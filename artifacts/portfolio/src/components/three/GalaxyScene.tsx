import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

const SHARDS = [
  { position: [3.2, 1.4, -3] as [number, number, number], scale: 0.7, geometry: "icosahedron", color: "#facc15" },
  { position: [-3.6, -1.6, -4] as [number, number, number], scale: 0.45, geometry: "tetrahedron", color: "#22d3ee" },
  { position: [2.2, -2.2, -2.5] as [number, number, number], scale: 0.32, geometry: "octahedron", color: "#facc15" },
  { position: [-2.6, 2.4, -3.5] as [number, number, number], scale: 0.26, geometry: "tetrahedron", color: "#a78bfa" },
  { position: [4.2, -0.6, -5] as [number, number, number], scale: 0.22, geometry: "icosahedron", color: "#22d3ee" },
];

function Shard({ position, scale, geometry, color }: (typeof SHARDS)[number]) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.12;
    meshRef.current.rotation.y += delta * 0.16;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
        {geometry === "tetrahedron" && <tetrahedronGeometry args={[1, 0]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.6} />
      </mesh>
    </Float>
  );
}

function PointerRig() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = state.pointer.y * 0.08;
    const targetY = state.pointer.x * 0.08;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.02);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.02);
  });

  return (
    <group ref={groupRef}>
      {SHARDS.map((shard, i) => (
        <Shard key={i} {...shard} />
      ))}
    </group>
  );
}

/** The slowly-turning Milky Way band + deep starfield. */
function MilkyWay() {
  const galaxyRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!galaxyRef.current) return;
    galaxyRef.current.rotation.z += delta * 0.006;
    galaxyRef.current.rotation.y += delta * 0.003;
  });

  return (
    <group ref={galaxyRef}>
      <Stars radius={120} depth={60} count={4500} factor={3.5} saturation={0} fade speed={0.5} />

      <group rotation={[0.3, 0.5, 0.55]}>
        <Sparkles count={220} scale={[26, 3.5, 10]} size={1.6} speed={0.15} opacity={0.55} color="#e2e8f0" />
        <Sparkles count={90} scale={[18, 2, 8]} size={2.4} speed={0.1} opacity={0.4} color="#facc15" />
        <Sparkles count={70} scale={[20, 2.5, 9]} size={2} speed={0.12} opacity={0.35} color="#22d3ee" />
      </group>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 4, 4]} intensity={60} color="#facc15" />
      <pointLight position={[-6, -3, 2]} intensity={30} color="#22d3ee" />
      <directionalLight position={[0, 5, -5]} intensity={0.4} />
      <MilkyWay />
      <PointerRig />
    </>
  );
}

export default function GalaxyScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!fixed inset-0"
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
