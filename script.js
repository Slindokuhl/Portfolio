import AgoraRTC from "agora-rtc-sdk-ng";

/* =====================
   AGORA VIDEO CALL
===================== */
const APP_ID = "8e65dc0cc41e48f28011f902cd8f3405";
const TOKEN  = null; // Replace with token if required

let client;
let localTracks = [];

async function joinCall() {
  const channel = document.getElementById("channelName")?.value.trim();
  if (!channel) return alert("Enter a meeting name");

  try {
    client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    await client.join(APP_ID, channel, TOKEN, null);

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

    const localPlayer = document.createElement("div");
    localPlayer.id        = "local-player";
    localPlayer.className = "video-player";
    document.getElementById("video-streams").appendChild(localPlayer);
    localTracks[1].play("local-player");

    await client.publish(localTracks);

    client.on("user-published", async (user, mediaType) => {
      await client.subscribe(user, mediaType);
      if (mediaType === "video") {
        const remotePlayer = document.createElement("div");
        remotePlayer.id        = String(user.uid);
        remotePlayer.className = "video-player";
        document.getElementById("video-streams").appendChild(remotePlayer);
        user.videoTrack.play(remotePlayer);
      }
      if (mediaType === "audio") user.audioTrack.play();
    });

  } catch (err) {
    console.error("Agora error:", err);
    alert("Error: " + err.message);
  }
}

async function leaveCall() {
  localTracks.forEach(track => { track.stop(); track.close(); });
  localTracks = [];
  await client?.leave();
  document.getElementById("video-streams").innerHTML = "";
}

document.getElementById("joinBtn")?.addEventListener("click", joinCall);
document.getElementById("leaveBtn")?.addEventListener("click", leaveCall);

/* =====================
   HAMBURGER MENU
===================== */
function toggleMenu() {
  document.querySelector(".menu-links")?.classList.toggle("open");
  document.querySelector(".hamburger-icon")?.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const menu      = document.querySelector(".menu-links");
  const hamburger = document.querySelector(".hamburger-menu");
  if (menu?.classList.contains("open") && !hamburger?.contains(e.target)) {
    toggleMenu();
  }
});

/* =====================
   SMOOTH SCROLLING
===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* =====================
   NAVIGATION SCROLL EFFECT
===================== */
window.addEventListener("scroll", () => {
  const bg = window.scrollY > 100
    ? "rgba(173, 216, 230, 0.98)"
    : "rgba(173, 216, 230, 0.95)";

  document.querySelector("#desktop-nav")  ?.style.setProperty("background-color", bg);
  document.querySelector("#hamburger-nav")?.style.setProperty("background-color", bg);
}, { passive: true });

/* =====================
   SCROLL ANIMATIONS
===================== */
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = "1";
      entry.target.style.transform = "translateY(0)";
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".details-container, .color-container").forEach(el => {
  el.style.opacity    = "0";
  el.style.transform  = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  scrollObserver.observe(el);
});

/* =====================
   PAGE LOAD FADE-IN
===================== */
document.body.style.opacity    = "0";
document.body.style.transition = "opacity 0.3s ease";
window.addEventListener("load", () => { document.body.style.opacity = "1"; });

/* =====================
   GLOBALS
===================== */
window.toggleMenu = toggleMenu;