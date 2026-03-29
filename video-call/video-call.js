const AgoraRTC = window.AgoraRTC;

// ─── EmailJS Config ───────────────────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY     = "qO4DMhZWfigqmMZpb";
const EMAILJS_SERVICE_ID     = "service_lonwsfc";
const EMAILJS_TEMPLATE_HOST  = "template_myxj97v";
const EMAILJS_TEMPLATE_GUEST = "template_8056d44";
const HOST_EMAIL              = "slindokuhleatlehang22009757@gmail.com";
// ─────────────────────────────────────────────────────────────────────────────

// ─── SVG Icon Library ─────────────────────────────────────────────────────────
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

// ─── Template builders ────────────────────────────────────────────────────────
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
      <div class="participants-count" id="count">
        ${ICONS.users}<span id="count-num">1</span>
      </div>
    </div>
  </div>

  <div id="video-streams" class="video-grid"></div>

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

// ─── Main Class ───────────────────────────────────────────────────────────────
export default class VideoCall {
  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.appId  = "48e1240440fa48e29297863ed05ac95f";
    this.token  = null;
    this.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    this.localTracks   = [];
    this.screenTrack   = null;
    this.joined        = false;
    this.audioMuted    = true;
    this.videoMuted    = true;
    this.screenSharing = false;
    this.timerInterval = null;
    this.secondsElapsed = 0;
    this._emailjsReady  = false;

    this._buildUI();
    this._bindEvents();
    this._loadEmailJS();
  }

  // ── UI Construction ──────────────────────────────────────────────────────
  _buildUI() {
    this.container.innerHTML =
      buildJoinScreen() +
      buildMeetingScreen() +
      buildScheduleModal() +
      buildSuccessToast();

    // Cache frequently accessed elements
    this.joinScreen    = this.container.querySelector("#join-screen");
    this.meetingScreen = this.container.querySelector("#meeting-screen");
    this.videoStreams   = this.container.querySelector("#video-streams");
    this.timerEl       = this.container.querySelector("#meeting-timer");
    this.countEl       = this.container.querySelector("#count-num");
    this.meetingNameEl = this.container.querySelector("#meeting-name");
  }

  _bindEvents() {
    // Join / Leave
    this.container.querySelector("#joinBtn").onclick   = () => this.joinChannel();
    this.container.querySelector("#leaveBtn").onclick  = () => this.leaveChannel();

    // Media controls
    this.container.querySelector("#muteAudio").onclick      = () => this.toggleAudio();
    this.container.querySelector("#muteVideo").onclick      = () => this.toggleVideo();
    this.container.querySelector("#shareScreenBtn").onclick = () => this.shareScreen();

    // Schedule modal
    this.container.querySelector("#premiumBtn").onclick   = () => this.openSchedule();
    this.container.querySelector("#schedClose").onclick   = () => this.closeSchedule();
    this.container.querySelector("#schedCopyId").onclick  = () => this.copyMeetingId();
    this.container.querySelector("#schedSubmit").onclick  = () => this.submitSchedule();

    // Close on backdrop click
    this.container.querySelector("#schedule-overlay").onclick = (e) => {
      if (e.target.id === "schedule-overlay") this.closeSchedule();
    };

    // Join on Enter key
    this.container.querySelector("#channelName").onkeydown = (e) => {
      if (e.key === "Enter") this.joinChannel();
    };
  }

  // ── EmailJS ──────────────────────────────────────────────────────────────
  _loadEmailJS() {
    if (window.emailjs) {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
      this._emailjsReady = true;
      return;
    }
    const s = document.createElement("script");
    s.src    = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => { window.emailjs.init(EMAILJS_PUBLIC_KEY); this._emailjsReady = true; };
    s.onerror = () => console.error("Failed to load EmailJS SDK.");
    document.head.appendChild(s);
  }

  // ── Schedule Modal ───────────────────────────────────────────────────────
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
      this._schedError("Please fill in all required fields (*).");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this._schedError("Please enter a valid email address.");
      return;
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
      if (guestParams) {
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_GUEST, guestParams);
      }
      this.closeSchedule();
      this._showSuccessToast();
      this._resetScheduleForm();
    } catch (err) {
      console.error("EmailJS error:", err);
      this._schedError(`Failed to send — ${err?.text || err?.message || "Unknown error"}`);
    } finally {
      btn.disabled  = false;
      btn.innerHTML = `${ICONS.send} Send Meeting Request`;
    }
  }

  _schedError(msg) {
    this.container.querySelector(".sched-err")?.remove();
    const err = Object.assign(document.createElement("p"), {
      className: "sched-err",
      textContent: "⚠ " + msg,
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

  // ── Timer ────────────────────────────────────────────────────────────────
  _pad(n) { return String(n).padStart(2, "0"); }

  startTimer() {
    this.secondsElapsed = 0;
    this.timerInterval  = setInterval(() => {
      this.secondsElapsed++;
      const m = this._pad(Math.floor(this.secondsElapsed / 60));
      const s = this._pad(this.secondsElapsed % 60);
      if (this.timerEl) this.timerEl.innerText = `${m}:${s}`;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  // ── Participant Count ────────────────────────────────────────────────────
  updateCount() {
    if (this.countEl) this.countEl.innerText = this.client.remoteUsers.length + 1;
  }

  // ── Video Player ─────────────────────────────────────────────────────────
  createPlayer(id, name) {
    const existing = document.getElementById(id);
    if (existing) return existing;
    const div       = document.createElement("div");
    div.id          = id;
    div.className   = "video-player";
    div.innerHTML   = `<div class="avatar">${name.charAt(0).toUpperCase()}</div>
                       <div class="name-tag">${name}</div>`;
    this.videoStreams.appendChild(div);
    return div;
  }

  // ── Agora: Join ──────────────────────────────────────────────────────────
  async joinChannel() {
    if (this.joined) return;

    const name    = this.container.querySelector("#username").value.trim();
    const channel = this.container.querySelector("#channelName").value.trim();

    if (!name || !channel) { alert("Enter name and meeting ID"); return; }

    document.querySelector("header")?.style.setProperty("display", "none");

    try {
      this.localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

      this.client.on("user-published", async (user, mediaType) => {
        await this.client.subscribe(user, mediaType);
        let player = document.getElementById(`remote-${user.uid}`);
        if (!player) player = this.createPlayer(`remote-${user.uid}`, `User ${user.uid}`);
        if (mediaType === "video") {
          user.videoTrack.play(player);
          player.querySelector(".avatar")?.style.setProperty("display", "none");
        }
        if (mediaType === "audio") user.audioTrack.play();
        this.updateCount();
      });

      this.client.on("user-unpublished", (user) => {
        document.getElementById(`remote-${user.uid}`)?.remove();
        this.updateCount();
      });

      this.client.on("user-left", (user) => {
        document.getElementById(`remote-${user.uid}`)?.remove();
        this.updateCount();
      });

      this.uid = await this.client.join(this.appId, channel, this.token, null);
      await this.client.publish(this.localTracks);

      // Start muted (audio + video off)
      await this.localTracks[0].setEnabled(false);
      await this.localTracks[1].setEnabled(false);

      const localPlayer = this.createPlayer("local-player", `${name} (You)`);
      this.localTracks[1].play(localPlayer);

      this.joinScreen.style.display    = "none";
      this.meetingScreen.style.display = "flex";
      this.meetingNameEl.innerText     = `Meeting: ${channel}`;

      this.joined = true;
      this.startTimer();
      this.updateCount();

    } catch (err) {
      alert(err.message);
    }
  }

  // ── Agora: Leave ─────────────────────────────────────────────────────────
  async leaveChannel() {
    this.stopTimer();
    this.localTracks.forEach(t => { t.stop(); t.close(); });
    if (this.screenTrack) { this.screenTrack.stop(); this.screenTrack.close(); this.screenTrack = null; }
    await this.client.leave();

    this.videoStreams.innerHTML = "";
    document.querySelector("header")?.style.setProperty("display", "block");
    this.joinScreen.style.display    = "flex";
    this.meetingScreen.style.display = "none";
    this.joined = this.audioMuted = this.videoMuted = false;
    this.audioMuted    = true;
    this.videoMuted    = true;
    this.screenSharing = false;
  }

  // ── Media: Toggle Audio ───────────────────────────────────────────────────
  toggleAudio() {
    const track = this.localTracks[0];
    if (!track) return;
    this.audioMuted = !this.audioMuted;
    track.setEnabled(!this.audioMuted);

    const btn = this.container.querySelector("#muteAudio");
    if (this.audioMuted) {
      btn.classList.add("muted");
      btn.innerHTML = `<span class="btn-icon">${ICONS.micOff}</span><span class="btn-label">Mute</span>`;
    } else {
      btn.classList.remove("muted");
      btn.innerHTML = `<span class="btn-icon">${ICONS.micOn}</span><span class="btn-label">Unmute</span>`;
    }
  }

  // ── Media: Toggle Video ───────────────────────────────────────────────────
  toggleVideo() {
    const track = this.localTracks[1];
    if (!track) return;
    this.videoMuted = !this.videoMuted;
    track.setEnabled(!this.videoMuted);

    const btn    = this.container.querySelector("#muteVideo");
    const avatar = document.getElementById("local-player")?.querySelector(".avatar");

    if (this.videoMuted) {
      btn.classList.add("video-off");
      btn.innerHTML = `<span class="btn-icon">${ICONS.camOff}</span><span class="btn-label">Start Video</span>`;
      if (avatar) avatar.style.display = "flex";
    } else {
      btn.classList.remove("video-off");
      btn.innerHTML = `<span class="btn-icon">${ICONS.camOn}</span><span class="btn-label">Stop Video</span>`;
      if (avatar) avatar.style.display = "none";
    }
  }

  // ── Media: Screen Share ───────────────────────────────────────────────────
  async shareScreen() {
    const btn       = this.container.querySelector("#shareScreenBtn");
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