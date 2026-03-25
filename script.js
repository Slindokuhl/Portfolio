import AgoraRTC from "agora-rtc-sdk-ng";

let client;
let localTracks = [];

const APP_ID = "8e65dc0cc41e48f28011f902cd8f3405";
const TOKEN = null; // Replace with token if needed

async function joinCall() {
  try {
    const channel = document.getElementById("channelName").value;
    if (!channel) return alert("Enter meeting name");

    client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    await client.join(APP_ID, channel, TOKEN, null);
    console.log("Joined successfully");

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

    const player = document.createElement("div");
    player.id = "local-player";
    player.className = "video-player";
    document.getElementById("video-streams").appendChild(player);
    localTracks[1].play("local-player");

    await client.publish(localTracks);

    client.on("user-published", async (user, mediaType) => {
      await client.subscribe(user, mediaType);
      if (mediaType === "video") {
        const remotePlayer = document.createElement("div");
        remotePlayer.id = user.uid;
        remotePlayer.className = "video-player";
        document.getElementById("video-streams").appendChild(remotePlayer);
        user.videoTrack.play(remotePlayer);
      }
      if (mediaType === "audio") user.audioTrack.play();
    });

  } catch (err) {
    console.error(err);
    alert("Error: " + err.message);
  }
}

async function leaveCall() {
  for (let track of localTracks) {
    track.stop();
    track.close();
  }
  await client.leave();
  document.getElementById("video-streams").innerHTML = "";
}

// Bind Agora buttons if they exist on the page
const joinBtn = document.getElementById("joinBtn");
const leaveBtn = document.getElementById("leaveBtn");
if (joinBtn)  joinBtn.addEventListener("click", joinCall);
if (leaveBtn) leaveBtn.addEventListener("click", leaveCall);

/* =====================
   HAMBURGER MENU
===================== */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon  = document.querySelector(".hamburger-icon");
  if (menu) menu.classList.toggle("open");
  if (icon) icon.classList.toggle("open");
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
  const menu      = document.querySelector(".menu-links");
  const hamburger = document.querySelector(".hamburger-menu");

  if (!menu || !hamburger) return;

  if (!hamburger.contains(e.target) && menu.classList.contains("open")) {
    toggleMenu();
  }
});

/* =====================
   SMOOTH SCROLLING
===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* =====================
   NAVIGATION SCROLL EFFECT
===================== */
window.addEventListener("scroll", function () {
  const nav           = document.querySelector("#desktop-nav");
  const hamburgerNav  = document.querySelector("#hamburger-nav");

  if (nav) {
    nav.style.backgroundColor = window.scrollY > 100
      ? "rgba(173, 216, 230, 0.98)"
      : "rgba(173, 216, 230, 0.95)";
  }
  if (hamburgerNav) {
    hamburgerNav.style.backgroundColor = window.scrollY > 100
      ? "rgba(173, 216, 230, 0.98)"
      : "rgba(173, 216, 230, 0.95)";
  }
});

/* =====================
   INTERSECTION OBSERVER — SCROLL ANIMATIONS
===================== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".details-container, .color-container").forEach(el => {
  el.style.opacity    = "0";
  el.style.transform  = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

/* =====================
   PAGE LOAD FADE-IN
===================== */
document.body.style.opacity    = "0";
document.body.style.transition = "opacity 0.3s ease";

window.addEventListener("load", function () {
  document.body.style.opacity = "1";
});

/* =====================
   GOOGLE MAPS
===================== */
let map;

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map = new google.maps.Map(document.getElementById("map"), {
          center: userLocation,
          zoom: 14
        });

        new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "You are here!"
        });
      },
      () => {
        alert("Geolocation failed. Allow location access.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Expose globals needed by HTML attributes and external scripts
window.toggleMenu = toggleMenu;
window.initMap    = initMap;