const AgoraRTC = window.AgoraRTC;



// ─── Firebase Config ───────────────────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBYXtYwGH5U5ZNvEPZUcRenQ9bJheXmqAs",
  authDomain: "crolix-5a614.firebaseapp.com",
  projectId: "crolix-5a614",
  storageBucket: "crolix-5a614.firebasestorage.app",
  messagingSenderId: "983243030432",
  appId: "1:983243030432:web:e5cea6cb44269f8c62aec5",
  measurementId: "G-7F8K0W9CZC"
};

// ─── EmailJS Config ────────────────────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY     = "qO4DMhZWfigqmMZpb";
const EMAILJS_SERVICE_ID     = "service_lonwsfc";
const EMAILJS_TEMPLATE_HOST  = "template_myxj97v";
const EMAILJS_TEMPLATE_GUEST = "template_8056d44";
const HOST_EMAIL              = "slindokuhleatlehang22009757@gmail.com";

// ─── SVG Icon Library ──────────────────────────────────────────────────────────
const ICONS = {
  micOff: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="1" y1="1" x2="23" y2="23"/>
    <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
    <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
    <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
  </svg>`,
  micOn: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
  </svg>`,
  camOff: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="1" y1="1" x2="23" y2="23"/>
    <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.723v6.554a1 1 0 0 1-1.447.894L15 14"/>
    <rect x="1" y="6" width="14" height="12" rx="2" ry="2"/>
  </svg>`,
  camOn: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>`,
  screen: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>`,
  leave: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`,
  users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>`,
  calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`,
  send: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>`,
  copy: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>`,
  check: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>`,
};

// ─── Avatar colour palette ─────────────────────────────────────────────────────
const AVATAR_GRADIENTS = [
  ["#6366f1", "#818cf8"],
  ["#0ea5e9", "#38bdf8"],
  ["#10b981", "#34d399"],
  ["#f59e0b", "#fbbf24"],
  ["#ef4444", "#f87171"],
  ["#8b5cf6", "#a78bfa"],
  ["#ec4899", "#f472b6"],
  ["#14b8a6", "#2dd4bf"],
];

function gradientForName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  const [a, b] = AVATAR_GRADIENTS[Math.abs(hash) % AVATAR_GRADIENTS.length];
  return `linear-gradient(135deg, ${a}, ${b})`;
}

// ─── Template builders ─────────────────────────────────────────────────────────
const buildJoinScreen = () => `
<div id="join-screen">
  <div class="join-wrapper">
    <div class="join-left">
      <div class="splash">
        <svg class="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4fa3f7"/><stop offset="100%" stop-color="#6c5ce7"/>
            </linearGradient>
            <linearGradient id="camGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#74b9ff"/><stop offset="100%" stop-color="#a29bfe"/>
            </linearGradient>
          </defs>
          <path d="M 50 8 A 42 42 0 1 1 19.5 73 L 26 68 A 34 34 0 1 0 50 16 Z" fill="url(#ringGrad)"/>
          <rect x="26" y="36" width="30" height="22" rx="4" fill="url(#camGrad)"/>
          <circle cx="41" cy="47" r="7" fill="#0d1b2a"/>
          <circle cx="41" cy="47" r="4.5" fill="url(#ringGrad)"/>
          <rect x="53" y="40" width="2" height="14" rx="1" fill="url(#camGrad)"/>
          <polygon points="56,44 63,47 56,50" fill="url(#camGrad)"/>
          <path d="M 22 58 L 18 68 L 30 62" fill="url(#ringGrad)" opacity="0.85"/>
        </svg>
        <div class="logo-text">
          <span class="crolix">Crolix</span><span class="meet">Meet</span>
        </div>
      </div>
      <h1>Start or Join meeting</h1>
      <p class="subtitle">Connect instantly with your team. Create a meeting, share your ID, and collaborate in real-time.</p>
      <ul class="features">
        <li>📌 Create your own meeting instantly</li>
        <li>🔗 Share unique meeting ID</li>
        <li>👥 Join from anywhere</li>
        <li>⏰ Schedule and manage sessions easily</li>
      </ul>
    </div>
    <div class="join-card">
      <h2>Join meeting</h2>
      <p class="small-text">Enter your name and meeting ID</p>
      <label>YOUR NAME</label>
      <input id="username" placeholder="Enter your name" autocomplete="name" />
      <label>MEETING ID</label>
      <input id="email" placeholder="Enter your email (optional)" />
      <input id="channelName" placeholder="e.g. team-standup-42" autocomplete="off" />
      <button id="joinBtn">Join Now</button>
      <div class="hint-box">💡 Tip: Create a meeting by entering a new ID and sharing it with others.</div>
    </div>
  </div>
</div>`;

const buildMeetingScreen = () => `
<div id="meeting-screen" style="display:none;">
  <div class="top-bar">
    <div class="meeting-info">
      <span class="meeting-dot"></span>
      <span id="meeting-name">Chat</span>
      <span class="live-badge">● LIVE</span>
      <button id="premiumBtn" class="premium-pill" title="Schedule a Meeting">
        ${ICONS.calendar} Schedule
      </button>
    </div>
    <div class="timer" id="meeting-timer">00:00</div>
    <div class="top-right">
      <div class="participants-count" id="count" title="View participants">
        ${ICONS.users}<span id="count-num">1</span>
      </div>
    </div>
  </div>

  <div id="video-streams" class="video-grid"></div>

  <div id="participants-panel" class="participants-panel" style="display:none;">
    <div class="panel-header">
      <span>${ICONS.users} Participants (<span id="panel-count">0</span>)</span>
      <button id="closePanelBtn" class="panel-close-btn">✕</button>
    </div>
    <ul id="participants-list" class="participants-list"></ul>
  </div>

  <div class="controls">
    <button id="muteAudio" class="control-btn muted" title="Unmute">
      <span class="btn-icon">${ICONS.micOff}</span>
      <span class="btn-label">Mute</span>
    </button>
    <button id="muteVideo" class="control-btn video-off" title="Start Video">
      <span class="btn-icon">${ICONS.camOff}</span>
      <span class="btn-label">Start Video</span>
    </button>
    <button id="shareScreenBtn" class="control-btn share-btn" title="Share Screen">
      <span class="btn-icon">${ICONS.screen}</span>
      <span class="btn-label" id="share-label">Share</span>
    </button>
    <button id="leaveBtn" class="control-btn leave" title="Leave">
      <span class="btn-icon">${ICONS.leave}</span>
      <span class="btn-label">Leave</span>
    </button>
  </div>
</div>`;

const buildScheduleModal = () => `
<div id="schedule-overlay" class="sched-overlay" style="display:none;">
  <div class="sched-modal">
    <div class="sched-header">
      <div class="sched-header-left">${ICONS.calendar}<span>Schedule a Meeting</span></div>
      <button class="sched-close" id="schedClose">✕</button>
    </div>
    <div class="sched-body">
      <div class="sched-row">
        <div class="sched-field">
          <label>FULL NAME <span class="req">*</span></label>
          <input id="sched-name" placeholder="e.g. John Doe" />
        </div>
        <div class="sched-field">
          <label>INITIALS <span class="req">*</span></label>
          <input id="sched-initials" placeholder="e.g. JD" maxlength="5" />
        </div>
      </div>
      <div class="sched-field">
        <label>MEETING ID <span class="req">*</span></label>
        <div class="sched-copy-wrap">
          <input id="sched-meetid" placeholder="e.g. team-standup-42" />
          <button class="sched-copy-btn" id="schedCopyId" title="Copy Meeting ID">${ICONS.copy}</button>
        </div>
      </div>
      <div class="sched-row">
        <div class="sched-field">
          <label>DATE <span class="req">*</span></label>
          <input id="sched-date" type="date" />
        </div>
        <div class="sched-field">
          <label>TIME <span class="req">*</span></label>
          <input id="sched-time" type="time" />
        </div>
      </div>
      <div class="sched-field">
        <label>YOUR EMAIL <span class="optional">(optional — receive confirmation)</span></label>
        <input id="sched-email" type="email" placeholder="your@email.com" />
      </div>
      <div class="sched-field">
        <label>MESSAGE <span class="optional">(optional)</span></label>
        <textarea id="sched-message" placeholder="Brief agenda or notes…" rows="3"></textarea>
      </div>
      <button class="sched-submit" id="schedSubmit">
        ${ICONS.send} Send Meeting Request
      </button>
    </div>
  </div>
</div>`;

const buildSuccessToast = () => `
<div id="sched-success-toast" class="sched-toast" style="display:none;">
  <div class="sched-toast-inner">
    <div class="sched-toast-icon">${ICONS.check}</div>
    <div>
      <div class="sched-toast-title">Request Sent!</div>
      <div class="sched-toast-sub">Thank you — we'll get back to you soon.</div>
    </div>
  </div>
</div>`;

// ─── Notification Toast ────────────────────────────────────────────────────────
const buildNotifContainer = () => `<div id="notif-container" class="notif-container"></div>`;

// ─── Logo Absorption Animation ─────────────────────────────────────────────────
function initLogoAbsorption(container) {
  const ENTRANCE_DELAY      = 1500;
  const ABSORPTION_DURATION = 2200;
  const LOOP_INTERVAL       = 8000;

  let absorptionTimeout = null;
  let loopInterval      = null;

  function triggerAbsorption() {
    const splash = container.querySelector(".splash");
    if (!splash) return;
    const joinScreen = container.querySelector("#join-screen");
    if (joinScreen && joinScreen.style.display === "none") return;
    splash.classList.add("absorbing");
    absorptionTimeout = setTimeout(() => {
      splash.classList.remove("absorbing");
    }, ABSORPTION_DURATION + 50);
  }

  setTimeout(() => {
    triggerAbsorption();
    loopInterval = setInterval(triggerAbsorption, LOOP_INTERVAL);
  }, ENTRANCE_DELAY);

  return function cleanup() {
    clearTimeout(absorptionTimeout);
    clearInterval(loopInterval);
  };
}

// ─── Firestore loader ──────────────────────────────────────────────────────────
function loadFirestore(config) {
  const loadScript = (src) => new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) return res();
    const s = document.createElement("script");
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });

  return Promise.all([
    loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"),
    loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"),
  ]).then(() => {
    if (!firebase.apps.length) firebase.initializeApp(config);
    return firebase.firestore();
  });
}

// ─── Main Class ────────────────────────────────────────────────────────────────
export default class VideoCall {
  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.appId  = "48e1240440fa48e29297863ed05ac95f";
    this.token  = null;
    this.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    this.localTracks    = [];
    this.screenTrack    = null;
    this.joined         = false;
    this.joining        = false;
    this.audioMuted     = true;
    this.videoMuted     = true;
    this.screenSharing  = false;
    this.timerInterval  = null;
    this.secondsElapsed = 0;
    this._emailjsReady  = false;

    // ── Pre-warm state ────────────────────────────────────────────────────────
    this._prewarmDone     = false;
    this._prewarmPending  = false;
    this._prewarmedTracks = null;

    // Firestore references
    this._db             = null;
    this._participantRef = null;
    this._unsubscribe    = null;
    this._channelId      = null;
    this._localUid       = null;
    this._localName      = null;

    // uid (string) → { name, videoMuted, audioMuted, joinedAt }
    this._participants = {};

    this._seenUids    = new Set();
    this._initialLoad = true;
    this._presenceWritten = false;
    this._logoAnimCleanup = null;

    // ── Pending presence promise ──────────────────────────────────────────────
    // Tracks the in-flight _registerPresence call so leaveChannel() can
    // always await it before deleting, even if leave is called early.
    this._presencePromise = null;

    // Resolve Firestore eagerly and store on instance
    loadFirestore(FIREBASE_CONFIG)
      .then(db  => { this._db = db; console.log("✅ Firestore ready"); })
      .catch(err => console.error("Firestore load failed:", err));

    this._buildUI();
    this._bindEvents();
    this._loadEmailJS();
    this._logoAnimCleanup = initLogoAbsorption(this.container);
  }

  // ── Pre-warm camera/mic before user clicks Join ─────────────────────────────
  async _prewarmTracks() {
    if (this._prewarmDone || this._prewarmPending) return;
    this._prewarmPending = true;
    console.log("[Prewarm] Starting track pre-warm…");
    try {
      this._prewarmedTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
      await this._prewarmedTracks[0].setEnabled(false);
      await this._prewarmedTracks[1].setEnabled(false);
      this._prewarmDone = true;
      console.log("[Prewarm] Tracks ready ✓");
    } catch (err) {
      console.warn("[Prewarm] Could not pre-warm tracks:", err.message);
      this._prewarmedTracks = null;
    }
    this._prewarmPending = false;
  }

  // ── Notification toast ──────────────────────────────────────────────────────
  _showNotif(message, type = "join") {
    const container = this.container.querySelector("#notif-container");
    if (!container) return;

    const notif = document.createElement("div");
    notif.className = `notif-toast notif-${type}`;

    const icon = type === "join"
      ? `<span class="notif-icon notif-icon-join">→</span>`
      : `<span class="notif-icon notif-icon-leave">←</span>`;

    notif.innerHTML = `${icon}<span class="notif-msg">${message}</span>`;
    container.appendChild(notif);

    requestAnimationFrame(() => notif.classList.add("notif-show"));

    setTimeout(() => {
      notif.classList.remove("notif-show");
      setTimeout(() => notif.remove(), 400);
    }, 4000);
  }

  // ── Save name to top-level "name" collection (fire-and-forget) ──────────────
  _saveNameToCollection(name) {
    if (!this._db) return;
    this._db.collection("name").add({ name: name })
      .then(() => console.log(`✅ Name saved to 'name' collection: ${name}`))
      .catch(err => console.warn("Could not save to 'name' collection:", err));
  }

  // ── Write participant doc: meetings/{channelId}/participants/{uid} ──────────
  // Returns the doc reference so leaveChannel can delete it by ref.
  async _registerPresence(channelId, uid, name, email = "") {
    if (!this._db) return null;

    const ref = this._db
      .collection("meetings")
      .doc(channelId)
      .collection("participants")
      .doc(String(uid));

    this._participantRef = ref;

    await ref.set({
      uid:        String(uid),
      name:       name,
      email:      email,
      videoMuted: true,
      audioMuted: true,
      joinedAt:   Date.now(),
    });

    this._presenceWritten = true;
    console.log(`✅ Presence written: meetings/${channelId}/participants/${uid}`);
    return ref;
  }

  // ── Delete participant doc by path — works even if ref was lost ─────────────
  // PRIMARY cleanup method called on leave. It tries three strategies in order:
  //   1. Use the stored _participantRef directly (fastest — ref already in hand).
  //   2. Reconstruct the path from stored channelId + localUid (ref was nulled
  //      early but we still have the identifiers).
  //   3. Fall back silently — nothing to delete (user left before writing).
  async _deletePresence(channelId, uid) {
    if (!this._db) return;

    // Strategy 1 — stored ref still valid
    if (this._participantRef) {
      try {
        await this._participantRef.delete();
        console.log(`🗑️  Presence deleted via stored ref (uid: ${uid})`);
        return;
      } catch (err) {
        console.warn("_deletePresence (stored ref) failed, falling back:", err.message);
      }
    }

    // Strategy 2 — reconstruct path from channelId + uid
    if (channelId && uid) {
      try {
        await this._db
          .collection("meetings")
          .doc(channelId)
          .collection("participants")
          .doc(String(uid))
          .delete();
        console.log(`🗑️  Presence deleted via reconstructed path (uid: ${uid})`);
        return;
      } catch (err) {
        console.warn("_deletePresence (reconstructed path) failed:", err.message);
      }
    }

    console.log("ℹ️  No presence doc to delete (user left before writing).");
  }

  // ── Sync own video-mute state to Firestore ──────────────────────────────────
  _updateVideoState(muted) {
    if (!this._participantRef) return;
    this._participantRef.update({ videoMuted: muted }).catch(() => {});
    if (this._localUid && this._participants[this._localUid]) {
      this._participants[this._localUid].videoMuted = muted;
    }
  }

  // ── Sync own audio-mute state to Firestore ──────────────────────────────────
  _updateAudioState(muted) {
    if (!this._participantRef) return;
    this._participantRef.update({ audioMuted: muted }).catch(() => {});
    if (this._localUid && this._participants[this._localUid]) {
      this._participants[this._localUid].audioMuted = muted;
    }
  }

  // ── Real-time listener: meetings/{channelId}/participants ───────────────────
  _listenToParticipants(channelId, localUid) {
    if (!this._db) return;

    if (this._unsubscribe) { this._unsubscribe(); this._unsubscribe = null; }

    this._initialLoad = true;

    const colRef = this._db
      .collection("meetings")
      .doc(channelId)
      .collection("participants");

    this._unsubscribe = colRef.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        const data = change.doc.data();
        if (!data) return;
        const uid  = String(data.uid || change.doc.id);
        const name = data.name || "Participant";
        const isLocalUser = uid === localUid;

        if (change.type === "added") {
          this._participants[uid] = {
            name,
            videoMuted: data.videoMuted !== false,
            audioMuted: data.audioMuted !== false,
            joinedAt:   data.joinedAt || Date.now(),
          };

          if (!isLocalUser) {
            let player = document.getElementById(`remote-${uid}`);
            if (!player) player = this.createPlayer(`remote-${uid}`, name);
            this._applyAvatarState(player, name, data.videoMuted !== false);

            if (!this._initialLoad) {
              this._showNotif(`${name} joined the meeting`, "join");
            }
          }

          this._seenUids.add(uid);
          this._updateCountDisplay();
          this._renderParticipantsList();
        }

        if (change.type === "modified") {
          this._participants[uid] = {
            name,
            videoMuted: data.videoMuted !== false,
            audioMuted: data.audioMuted !== false,
            joinedAt:   data.joinedAt || 0,
          };

          if (!isLocalUser) {
            const player = document.getElementById(`remote-${uid}`);
            if (player) this._applyAvatarState(player, name, data.videoMuted !== false);
          }
          this._renderParticipantsList();
        }

        if (change.type === "removed") {
          const leavingName = this._participants[uid]?.name || name;

          delete this._participants[uid];
          this._seenUids.delete(uid);

          if (!isLocalUser) {
            document.getElementById(`remote-${uid}`)?.remove();
            this._showNotif(`${leavingName} left the meeting`, "leave");
          }

          this._updateCountDisplay();
          this._renderParticipantsList();
        }
      });

      if (this._initialLoad) this._initialLoad = false;
    }, err => {
      console.error("Firestore listener error:", err);
    });
  }

  // ── Participant count badge ─────────────────────────────────────────────────
  _updateCountDisplay() {
    if (!this.countEl) return;
    const count = Object.keys(this._participants || {}).length;
    this.countEl.textContent = count;
    const panelCount = this.container.querySelector("#panel-count");
    if (panelCount) panelCount.textContent = count;
  }

  // ── Participants sidebar list ───────────────────────────────────────────────
  _renderParticipantsList() {
    const list = this.container.querySelector("#participants-list");
    if (!list) return;

    list.innerHTML = "";

    const sorted = Object.entries(this._participants).sort(([uidA, infoA], [uidB, infoB]) => {
      if (uidA === this._localUid) return -1;
      if (uidB === this._localUid) return 1;
      return (infoA.joinedAt || 0) - (infoB.joinedAt || 0);
    });

    sorted.forEach(([uid, info]) => {
      const isLocal = uid === this._localUid;
      const li = document.createElement("li");
      li.className = "participant-item";

      const initial     = (info.name || "?").charAt(0).toUpperCase();
      const displayName = isLocal ? `${info.name} (You)` : info.name;
      const grad        = gradientForName(info.name || "?");

      const camIcon = info.videoMuted
        ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
             <line x1="1" y1="1" x2="23" y2="23"/>
             <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.723v6.554a1 1 0 0 1-1.447.894L15 14"/>
             <rect x="1" y="6" width="14" height="12" rx="2" ry="2"/>
           </svg>`
        : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
             <polygon points="23 7 16 12 23 17 23 7"/>
             <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
           </svg>`;

      const micIcon = info.audioMuted
        ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
             <line x1="1" y1="1" x2="23" y2="23"/>
             <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
             <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
           </svg>`
        : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
             <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
             <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
           </svg>`;

      li.innerHTML = `
        <div class="p-avatar" style="background:${grad};">${initial}</div>
        <span class="p-name">${displayName}</span>
        <div class="p-indicators">
          <span class="p-status ${info.audioMuted ? "mic-off" : "mic-on"}" title="${info.audioMuted ? "Muted" : "Unmuted"}">
            ${micIcon}
          </span>
          <span class="p-status ${info.videoMuted ? "cam-off" : "cam-on"}" title="${info.videoMuted ? "Camera off" : "Camera on"}">
            ${camIcon}
          </span>
        </div>
      `;
      list.appendChild(li);
    });
  }

  // ── Toggle participants panel ───────────────────────────────────────────────
  _toggleParticipantsPanel() {
    const panel = this.container.querySelector("#participants-panel");
    if (!panel) return;
    const isVisible = panel.style.display !== "none";
    panel.style.display = isVisible ? "none" : "flex";
    if (!isVisible) this._renderParticipantsList();
  }

  // ── Apply avatar visibility + name labels to a player tile ─────────────────
  _applyAvatarState(player, name, videoMuted) {
    if (!player) return;

    const avatar     = player.querySelector(".avatar");
    const nameTag    = player.querySelector(".name-tag");
    const avatarName = player.querySelector(".avatar-name");
    const initial    = player.querySelector(".avatar-initial");

    if (nameTag)    nameTag.textContent    = name;
    if (avatarName) avatarName.textContent = name;
    if (initial)    initial.textContent    = name.charAt(0).toUpperCase();

    if (avatar) {
      avatar.style.background = gradientForName(name);
      if (videoMuted) {
        avatar.style.display = "flex";
        avatar.style.zIndex  = "3";
      } else {
        avatar.style.display = "none";
        avatar.style.zIndex  = "";
      }
    }
  }

  // ── Patch name labels in a tile ────────────────────────────────────────────
  _patchPlayerName(player, name) {
    if (!player) return;
    const displayName = name.replace(/\s*\(You\)\s*$/, "");
    const nameTag    = player.querySelector(".name-tag");
    const avatarName = player.querySelector(".avatar-name");
    const initial    = player.querySelector(".avatar-initial");
    const avatar     = player.querySelector(".avatar");
    if (nameTag)    nameTag.textContent     = name;
    if (avatarName) avatarName.textContent  = displayName;
    if (initial)    initial.textContent     = displayName.charAt(0).toUpperCase();
    if (avatar)     avatar.style.background = gradientForName(displayName);
  }

  // ── Resolve a remote uid's name from cache or Firestore ────────────────────
  async _resolveName(uid) {
    const cached = this._participants[uid]?.name;
    if (cached) return cached;

    if (this._db && this._channelId) {
      try {
        const snap = await this._db
          .collection("meetings")
          .doc(this._channelId)
          .collection("participants")
          .doc(String(uid))
          .get();

        const data = snap.data();
        if (data?.name) {
          if (!this._participants[uid]) {
            this._participants[uid] = { name: data.name, videoMuted: true, audioMuted: true };
          } else {
            this._participants[uid].name = data.name;
          }
          return data.name;
        }
      } catch (_) {}
    }
    return "Participant";
  }

  // ── UI ───────────────────────────────────────────────────────────────────────
  _buildUI() {
    this.container.innerHTML =
      buildJoinScreen() +
      buildMeetingScreen() +
      buildScheduleModal() +
      buildSuccessToast() +
      buildNotifContainer();

    this.joinScreen    = this.container.querySelector("#join-screen");
    this.meetingScreen = this.container.querySelector("#meeting-screen");
    this.videoStreams   = this.container.querySelector("#video-streams");
    this.timerEl       = this.container.querySelector("#meeting-timer");
    this.countEl       = this.container.querySelector("#count-num");
    this.meetingNameEl = this.container.querySelector("#meeting-name");
  }

  _bindEvents() {
    this.container.querySelector("#joinBtn").onclick          = () => this.joinChannel();
    this.container.querySelector("#leaveBtn").onclick         = () => this.leaveChannel();
    this.container.querySelector("#muteAudio").onclick        = () => this.toggleAudio();
    this.container.querySelector("#muteVideo").onclick        = () => this.toggleVideo();
    this.container.querySelector("#shareScreenBtn").onclick   = () => this.shareScreen();
    this.container.querySelector("#premiumBtn").onclick       = () => this.openSchedule();
    this.container.querySelector("#schedClose").onclick       = () => this.closeSchedule();
    this.container.querySelector("#schedCopyId").onclick      = () => this.copyMeetingId();
    this.container.querySelector("#schedSubmit").onclick      = () => this.submitSchedule();
    this.container.querySelector("#schedule-overlay").onclick = (e) => {
      if (e.target.id === "schedule-overlay") this.closeSchedule();
    };
    this.container.querySelector("#channelName").onkeydown = (e) => {
      if (e.key === "Enter") this.joinChannel();
    };
    this.container.querySelector("#username").onkeydown = (e) => {
      if (e.key === "Enter") this.joinChannel();
    };

    const prewarm = () => this._prewarmTracks();
    this.container.querySelector("#username").addEventListener("focus", prewarm, { once: true });
    this.container.querySelector("#channelName").addEventListener("focus", prewarm, { once: true });

    this.container.querySelector("#count").onclick         = () => this._toggleParticipantsPanel();
    this.container.querySelector("#closePanelBtn").onclick = () => {
      const panel = this.container.querySelector("#participants-panel");
      if (panel) panel.style.display = "none";
    };
  }

  // ── EmailJS ─────────────────────────────────────────────────────────────────
  _loadEmailJS() {
    if (window.emailjs) {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
      this._emailjsReady = true;
      return;
    }
    const s = document.createElement("script");
    s.src     = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload  = () => { window.emailjs.init(EMAILJS_PUBLIC_KEY); this._emailjsReady = true; };
    s.onerror = () => console.error("Failed to load EmailJS SDK.");
    document.head.appendChild(s);
  }

  // ── Schedule Modal ──────────────────────────────────────────────────────────
  openSchedule() {
    const overlay = this.container.querySelector("#schedule-overlay");
    const rawName = this.meetingNameEl.innerText.replace("Meeting: ", "");
    this.container.querySelector("#sched-meetid").value = rawName || "";
    overlay.style.display = "flex";
    requestAnimationFrame(() => overlay.classList.add("open"));
  }

  closeSchedule() {
    const overlay = this.container.querySelector("#schedule-overlay");
    overlay.classList.remove("open");
    setTimeout(() => { overlay.style.display = "none"; }, 300);
  }

  copyMeetingId() {
    const val = this.container.querySelector("#sched-meetid").value.trim();
    if (!val) return;
    navigator.clipboard.writeText(val).catch(() => {});
    const btn = this.container.querySelector("#schedCopyId");
    btn.classList.add("copied");
    setTimeout(() => btn.classList.remove("copied"), 1800);
  }

  async submitSchedule() {
    if (!this._emailjsReady || !window.emailjs) {
      this._schedError("Email service not ready — please try again in a moment.");
      return;
    }
    const get = (id) => this.container.querySelector(`#${id}`).value.trim();
    const name     = get("sched-name");
    const initials = get("sched-initials");
    const meetId   = get("sched-meetid");
    const date     = get("sched-date");
    const time     = get("sched-time");
    const email    = get("sched-email");
    const message  = get("sched-message");

    if (!name || !initials || !meetId || !date || !time) {
      this._schedError("Please fill in all required fields (*)."); return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this._schedError("Please enter a valid email address."); return;
    }

    const btn = this.container.querySelector("#schedSubmit");
    btn.disabled    = true;
    btn.textContent = "Sending…";

    const formattedDate = new Date(`${date}T${time}`).toLocaleString("en-ZA", {
      weekday: "long", year: "numeric", month: "long",
      day: "numeric", hour: "2-digit", minute: "2-digit",
    });

    const hostParams = {
      to_email: HOST_EMAIL, from_name: name, initials,
      meeting_id: meetId, date_time: formattedDate,
      guest_email: email || "Not provided",
      message: message || "No additional message.",
    };
    const guestParams = email ? {
      to_email: email, from_name: name, meeting_id: meetId,
      date_time: formattedDate, message: message || "No additional message.",
    } : null;

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_HOST, hostParams);
      if (guestParams) await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_GUEST, guestParams);
      this.closeSchedule();
      this._showSuccessToast();
      this._resetScheduleForm();
    } catch (err) {
      this._schedError(`Failed to send — ${err?.text || err?.message || "Unknown error"}`);
    } finally {
      btn.disabled  = false;
      btn.innerHTML = `${ICONS.send} Send Meeting Request`;
    }
  }

  _schedError(msg) {
    this.container.querySelector(".sched-err")?.remove();
    const err = Object.assign(document.createElement("p"), {
      className: "sched-err", textContent: "⚠ " + msg,
    });
    this.container.querySelector("#schedSubmit").insertAdjacentElement("beforebegin", err);
    setTimeout(() => err.remove(), 4000);
  }

  _resetScheduleForm() {
    ["sched-name","sched-initials","sched-meetid","sched-date",
     "sched-time","sched-email","sched-message"].forEach(id => {
       const el = this.container.querySelector(`#${id}`);
       if (el) el.value = "";
     });
  }

  _showSuccessToast() {
    const toast = this.container.querySelector("#sched-success-toast");
    toast.style.display = "flex";
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => { toast.style.display = "none"; }, 500);
    }, 4000);
  }

  // ── Timer ───────────────────────────────────────────────────────────────────
  _pad(n) { return String(n).padStart(2, "0"); }

  startTimer() {
    this.secondsElapsed = 0;
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.secondsElapsed++;
      const m = this._pad(Math.floor(this.secondsElapsed / 60));
      const s = this._pad(this.secondsElapsed % 60);
      if (this.timerEl) this.timerEl.innerText = `${m}:${s}`;
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
    this.secondsElapsed = 0;
    if (this.timerEl) this.timerEl.innerText = "00:00";
  }

  // ── Create video player tile ────────────────────────────────────────────────
  createPlayer(id, name) {
    const existing = document.getElementById(id);
    if (existing) return existing;

    const div = document.createElement("div");
    div.id        = id;
    div.className = "video-player";
    div.innerHTML = `
      <div class="avatar" style="background:${gradientForName(name)}; display:flex; z-index:3;">
        <span class="avatar-initial">${name.charAt(0).toUpperCase()}</span>
        <span class="avatar-name">${name}</span>
      </div>
      <div class="name-tag">${name}</div>
    `;
    this.videoStreams.appendChild(div);
    return div;
  }

  // ── Join ────────────────────────────────────────────────────────────────────
  async joinChannel() {
    if (this.joined || this.joining) return;

    const name    = this.container.querySelector("#username").value.trim();
    const email   = this.container.querySelector("#email").value.trim();
    const channel = this.container.querySelector("#channelName").value.trim();
    if (!name || !channel) { alert("Enter your name and a meeting ID"); return; }

    this.joining = true;
    const joinBtn = this.container.querySelector("#joinBtn");
    joinBtn.disabled    = true;
    joinBtn.textContent = "Joining…";

    try {
      document.querySelector("header")?.style.setProperty("display", "none");

      // Non-blocking name save
      this._saveNameToCollection(name);

      // ── Resolve tracks ─────────────────────────────────────────────────────
      let tracksPromise;
      if (this._prewarmDone && this._prewarmedTracks) {
        console.log("[Join] Using pre-warmed tracks ✓");
        tracksPromise = Promise.resolve(this._prewarmedTracks);
      } else if (this._prewarmPending) {
        console.log("[Join] Waiting for pre-warm to finish…");
        tracksPromise = new Promise((resolve) => {
          const poll = setInterval(() => {
            if (!this._prewarmPending) {
              clearInterval(poll);
              resolve(
                this._prewarmedTracks
                  ? this._prewarmedTracks
                  : AgoraRTC.createMicrophoneAndCameraTracks()
              );
            }
          }, 100);
        });
      } else {
        console.log("[Join] Creating tracks fresh…");
        tracksPromise = AgoraRTC.createMicrophoneAndCameraTracks();
      }

      // Reset prewarm flags so leave + rejoin works cleanly
      this._prewarmDone     = false;
      this._prewarmedTracks = null;

      // ── Run Agora join and track creation concurrently ─────────────────────
      const [joinedUid, tracks] = await Promise.all([
        this.client.join(this.appId, channel, this.token, null),
        tracksPromise,
      ]);

      // ── Store state ────────────────────────────────────────────────────────
      this.localTracks  = tracks;
      this.uid          = joinedUid;
      this._channelId   = channel;
      this._localName   = name;
      this._localUid    = String(joinedUid);

      // ── Re-enable pre-warmed tracks before publishing ──────────────────────
      await this.localTracks[0].setEnabled(true);
      await this.localTracks[1].setEnabled(true);

      // ── Publish ────────────────────────────────────────────────────────────
      await this.client.publish(this.localTracks);

      // ── Start muted via setMuted (track stays enabled + published) ─────────
      await this.localTracks[0].setMuted(true);
      await this.localTracks[1].setMuted(true);

      // ── Register Agora remote-user event handlers ──────────────────────────
      this.client.on("user-published", async (user, mediaType) => {
        await this.client.subscribe(user, mediaType);

        const uid          = String(user.uid);
        const resolvedName = await this._resolveName(uid);

        let player = document.getElementById(`remote-${uid}`);
        if (!player) player = this.createPlayer(`remote-${uid}`, resolvedName);
        this._patchPlayerName(player, resolvedName);

        if (mediaType === "video") {
          user.videoTrack.play(player);
          const avatar = player.querySelector(".avatar");
          if (avatar) { avatar.style.display = "none"; avatar.style.zIndex = ""; }
        }

        if (mediaType === "audio") user.audioTrack.play();
      });

      this.client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "video") {
          const uid    = String(user.uid);
          const player = document.getElementById(`remote-${uid}`);
          if (player) {
            const pName  = this._participants[uid]?.name || "Participant";
            const avatar = player.querySelector(".avatar");
            if (avatar) {
              avatar.style.background = gradientForName(pName);
              avatar.style.display    = "flex";
              avatar.style.zIndex     = "3";
            }
          }
        }
      });

      this.client.on("user-left", (user) => {
        const uid = String(user.uid);
        if (!this._participants[uid]) {
          document.getElementById(`remote-${uid}`)?.remove();
          this._updateCountDisplay();
        }
      });

      // ── Seed self in participants map ──────────────────────────────────────
      this._participants[this._localUid] = {
        name,
        videoMuted: true,
        audioMuted: true,
        joinedAt:   Date.now(),
      };

      // ── Start Firestore listener ───────────────────────────────────────────
      this._listenToParticipants(channel, this._localUid);

      // ── Switch UI ─────────────────────────────────────────────────────────
      this.joinScreen.style.display    = "none";
      this.meetingScreen.style.display = "flex";
      this.meetingNameEl.innerText     = `Meeting: ${channel}`;

      const localPlayer = this.createPlayer("local-player", `${name} (You)`);
      this.localTracks[1].play(localPlayer);
      const localAvatar = localPlayer.querySelector(".avatar");
      if (localAvatar) localAvatar.style.display = "flex";

      this.joined  = true;
      this.joining = false;
      this.startTimer();
      this._updateCountDisplay();

      // ── Write Firestore presence — store the promise so leaveChannel can
      //    await it before deleting, even if leave fires immediately. ─────────
      this._presenceWritten = false;
      this._presencePromise = this._registerPresence(channel, joinedUid, name, email)
        .catch(err => {
          console.warn("Presence write failed (non-fatal):", err);
          return null;
        });

    } catch (err) {
      console.error("Join error:", err);
      alert("Could not join: " + (err.message || err));
      joinBtn.disabled    = false;
      joinBtn.textContent = "Join Now";
      this.joining        = false;
      this.joined         = false;

      this.joinScreen.style.display    = "flex";
      this.meetingScreen.style.display = "none";
      document.querySelector("header")?.style.removeProperty("display");

      this.localTracks.forEach(t => { try { t.stop(); t.close(); } catch (_) {} });
      this.localTracks = [];

      this._prewarmDone     = false;
      this._prewarmedTracks = null;
      this._participants    = {};
      this._localUid        = null;
      this._presencePromise = null;

      if (this._unsubscribe) { this._unsubscribe(); this._unsubscribe = null; }

      try { await this.client.leave(); } catch (_) {}
    }
  }

  // ── Leave ───────────────────────────────────────────────────────────────────
  //
  // GUARANTEED DELETION STRATEGY
  // ─────────────────────────────
  // The old code had a race: if the user clicked Leave before
  // _registerPresence resolved, `_participantRef` was still null and the
  // fire-and-forget IIFE silently skipped deletion.
  //
  // Fix — we capture the three things needed to delete regardless of timing:
  //   • pendingPresence  — the in-flight _registerPresence promise
  //   • snapshotRef      — the already-resolved ref (may be null if not done)
  //   • snapshotChannel / snapshotUid — raw path identifiers as a fallback
  //
  // The async IIFE then:
  //   1. Awaits pendingPresence (resolves instantly if already done).
  //   2. Calls _deletePresence() with the two fallback identifiers so the
  //      method can reconstruct the path even if snapshotRef was null.
  //
  leaveChannel() {
    if (!this.joined && !this.joining) return;

    // ── Capture everything before nulling ──────────────────────────────────
    const pendingPresence  = this._presencePromise;   // may still be resolving
    const snapshotRef      = this._participantRef;    // may be null if early leave
    const snapshotChannel  = this._channelId;
    const snapshotUid      = this._localUid;
    const screenTrack      = this.screenTrack;
    const localTracks      = this.localTracks.slice();
    const client           = this.client;
    const unsubscribe      = this._unsubscribe;

    // ── Reset all instance state synchronously ─────────────────────────────
    this.joined        = false;
    this.joining       = false;
    this.audioMuted    = true;
    this.videoMuted    = true;
    this.screenSharing = false;
    this._participants = {};
    this._seenUids.clear();
    this._presenceWritten = false;
    this._presencePromise = null;
    this._unsubscribe     = null;
    this._participantRef  = null;
    this._channelId       = null;
    this._localUid        = null;
    this._localName       = null;
    this.screenTrack      = null;
    this.localTracks      = [];

    // ── Stop Firestore listener immediately ────────────────────────────────
    if (unsubscribe) unsubscribe();

    // ── Stop timer + reset UI synchronously ───────────────────────────────
    this.stopTimer();

    this.videoStreams.innerHTML      = "";
    this.meetingScreen.style.display = "none";
    this.joinScreen.style.display    = "flex";
    document.querySelector("header")?.style.removeProperty("display");

    const panel = this.container.querySelector("#participants-panel");
    if (panel) panel.style.display = "none";

    const joinBtn = this.container.querySelector("#joinBtn");
    if (joinBtn) { joinBtn.disabled = false; joinBtn.textContent = "Join Now"; }

    const muteAudio  = this.container.querySelector("#muteAudio");
    const muteVideo  = this.container.querySelector("#muteVideo");
    const shareBtnEl = this.container.querySelector("#shareScreenBtn");
    const shareLabel = this.container.querySelector("#share-label");
    if (muteAudio)  { muteAudio.classList.add("muted");     muteAudio.innerHTML  = `<span class="btn-icon">${ICONS.micOff}</span><span class="btn-label">Mute</span>`; }
    if (muteVideo)  { muteVideo.classList.add("video-off"); muteVideo.innerHTML  = `<span class="btn-icon">${ICONS.camOff}</span><span class="btn-label">Start Video</span>`; }
    if (shareBtnEl) { shareBtnEl.classList.remove("sharing"); }
    if (shareLabel) { shareLabel.innerText = "Share"; }

    // ── Restart logo animation ────────────────────────────────────────────
    if (this._logoAnimCleanup) this._logoAnimCleanup();
    this._logoAnimCleanup = initLogoAbsorption(this.container);

    // ── Re-attach prewarm listeners for next join ─────────────────────────
    this._prewarmDone     = false;
    this._prewarmedTracks = null;
    this._prewarmPending  = false;

    const prewarm = () => this._prewarmTracks();
    this.container.querySelector("#username").addEventListener("focus", prewarm, { once: true });
    this.container.querySelector("#channelName").addEventListener("focus", prewarm, { once: true });

    // ── Create fresh Agora client for next join ────────────────────────────
    try { this.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" }); } catch (_) {}

    // ── Fire-and-forget async cleanup ─────────────────────────────────────
    // IMPORTANT: We await pendingPresence FIRST so that even if _registerPresence
    // hasn't finished yet, we wait for it before trying to delete. After that,
    // _deletePresence uses a 3-strategy fallback to guarantee the doc is removed.
    (async () => {
      // 1. Stop and close media tracks
      localTracks.forEach(t => { try { t.stop(); t.close(); } catch (_) {} });
      if (screenTrack) { try { screenTrack.stop(); screenTrack.close(); } catch (_) {} }

      // 2. Await any in-flight presence write so the doc definitely exists
      //    before we attempt to delete it.
      if (pendingPresence) {
        try { await pendingPresence; } catch (_) {}
      }

      // 3. Delete participant doc with 3-strategy fallback.
      //    We temporarily restore the captured ref so _deletePresence can use it.
      this._participantRef = snapshotRef;
      await this._deletePresence(snapshotChannel, snapshotUid);
      this._participantRef = null; // null out again — we're done

      // 4. Leave Agora channel (3-second timeout)
      try {
        await Promise.race([
          client.leave(),
          new Promise((_, rej) => setTimeout(() => rej(new Error("leave timeout")), 3000)),
        ]);
        console.log("✅ Agora channel left");
      } catch (err) {
        console.warn("Agora leave (non-fatal):", err.message);
      }
    })();
  }

  // ── Toggle Audio ────────────────────────────────────────────────────────────
  toggleAudio() {
    const track = this.localTracks[0];
    if (!track) return;
    this.audioMuted = !this.audioMuted;
    track.setMuted(this.audioMuted);

    this._updateAudioState(this.audioMuted);

    const btn = this.container.querySelector("#muteAudio");
    if (this.audioMuted) {
      btn.classList.add("muted");
      btn.innerHTML = `<span class="btn-icon">${ICONS.micOff}</span><span class="btn-label">Mute</span>`;
    } else {
      btn.classList.remove("muted");
      btn.innerHTML = `<span class="btn-icon">${ICONS.micOn}</span><span class="btn-label">Unmute</span>`;
    }
  }

  // ── Toggle Video ────────────────────────────────────────────────────────────
  toggleVideo() {
    const track = this.localTracks[1];
    if (!track) return;
    this.videoMuted = !this.videoMuted;
    track.setMuted(this.videoMuted);

    const btn    = this.container.querySelector("#muteVideo");
    const player = document.getElementById("local-player");
    const avatar = player?.querySelector(".avatar");

    if (this.videoMuted) {
      btn.classList.add("video-off");
      btn.innerHTML = `<span class="btn-icon">${ICONS.camOff}</span><span class="btn-label">Start Video</span>`;
      if (avatar) { avatar.style.display = "flex"; avatar.style.zIndex = "3"; }
    } else {
      btn.classList.remove("video-off");
      btn.innerHTML = `<span class="btn-icon">${ICONS.camOn}</span><span class="btn-label">Stop Video</span>`;
      if (avatar) { avatar.style.display = "none"; avatar.style.zIndex = ""; }
    }
    this._updateVideoState(this.videoMuted);
  }

  // ── Screen Share ─────────────────────────────────────────────────────────────
  async shareScreen() {
    const btn        = this.container.querySelector("#shareScreenBtn");
    const shareLabel = this.container.querySelector("#share-label");

    if (!this.screenSharing) {
      try {
        this.screenTrack = await AgoraRTC.createScreenVideoTrack();
        await this.client.unpublish(this.localTracks[1]);
        await this.client.publish(this.screenTrack);

        const player = this.createPlayer("screen-player", "You (Screen)");
        this.screenTrack.play(player);
        player.querySelector(".avatar")?.style.setProperty("display", "none");

        this.screenSharing = true;
        btn.classList.add("sharing");
        if (shareLabel) shareLabel.innerText = "Stop Share";
      } catch (err) { console.error(err); }
    } else {
      try {
        if (this.screenTrack) {
          await this.client.unpublish(this.screenTrack);
          this.screenTrack.stop();
          this.screenTrack.close();
          this.screenTrack = null;
        }
        document.getElementById("screen-player")?.remove();
        await this.client.publish(this.localTracks[1]);

        this.screenSharing = false;
        btn.classList.remove("sharing");
        if (shareLabel) shareLabel.innerText = "Share";
      } catch (err) { console.error(err); }
    }
  }
}