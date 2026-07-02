export function SceneFallback() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Cheap CSS starfield — tiled radial-gradient dots, no WebGL needed */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
            radial-gradient(1px 1px at 90px 80px, white, transparent),
            radial-gradient(1.5px 1.5px at 140px 20px, white, transparent),
            radial-gradient(1px 1px at 45px 130px, white, transparent),
            radial-gradient(1.5px 1.5px at 170px 150px, white, transparent),
            radial-gradient(1px 1px at 110px 190px, white, transparent)
          `,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[130px] ambient-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-glow-cyan/15 rounded-full blur-[100px] ambient-glow" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-glow-violet/10 rounded-full blur-[110px] ambient-glow" style={{ animationDelay: "-6s" }} />
    </div>
  );
}
