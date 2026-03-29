const AgoraRTC = window.AgoraRTC;

// ─── EmailJS bootstrap ───────────────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY     = "qO4DMhZWfigqmMZpb";
const EMAILJS_SERVICE_ID     = "service_lonwsfc";
const EMAILJS_TEMPLATE_HOST  = "template_myxj97v";
const EMAILJS_TEMPLATE_GUEST = "template_8056d44";
const HOST_EMAIL             = "slindokuhleatlehang22009757@gmail.com"; // ← your address
// ─────────────────────────────────────────────────────────────────────────────

export default class VideoCall {
  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.appId = "48e1240440fa48e29297863ed05ac95f";
    this.token = null;

    this.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    this.localTracks = [];
    this.joined = false;

    this.audioMuted = true;
    this.videoMuted = true;
    this.screenSharing = false;

    this.timerInterval = null;
    this.secondsElapsed = 0;

    // ✅ UI
    this.container.innerHTML = `
    <!-- JOIN SCREEN -->
    <div id="join-screen">
      <div class="join-wrapper">

        <div class="join-left">
          <div class="splash">
            <svg class="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stop-color="#4fa3f7"/>
                  <stop offset="100%" stop-color="#6c5ce7"/>
                </linearGradient>
                <linearGradient id="camGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stop-color="#74b9ff"/>
                  <stop offset="100%" stop-color="#a29bfe"/>
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
              <span class="crolix">Crolix</span>
              <span class="meet">Meet</span>
            </div>
          </div>

          <h1>Start or Join meeting</h1>
          <p class="subtitle">Connect instantly with your team. Create meeting, share your ID, and collaborate in real-time.</p>
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
          <input id="username" placeholder="Enter your name" />
          <label>Meeting ID</label>
          <input id="channelName" placeholder="e.g team-standup-42" />
          <button id="joinBtn">Join Now</button>
          <div class="hint-box">
            💡 Tip: Create a meeting by entering a new ID and sharing it with others.
          </div>
        </div>

      </div>
    </div>

    <!-- MEETING SCREEN -->
    <div id="meeting-screen" style="display:none;">

      <div class="top-bar">
        <div class="meeting-info">
          <span class="meeting-dot"></span>
          <span id="meeting-name">Chat</span>
          <span class="live-badge">● LIVE</span>
          <!-- ★ PREMIUM BUTTON -->
          <button id="premiumBtn" class="premium-pill" title="Schedule a Meeting">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8"  y1="2" x2="8"  y2="6"/>
              <line x1="3"  y1="10" x2="21" y2="10"/>
            </svg>
            Schedule
          </button>
        </div>

        <div class="timer" id="meeting-timer">00:00</div>

        <div class="top-right">
          <div class="participants-count" id="count">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span id="count-num">1</span>
          </div>
        </div>
      </div>

      <div id="video-streams" class="video-grid"></div>

      <div class="controls">
        <button id="muteAudio" class="control-btn muted" title="Mute">
          <span class="btn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="1" y1="1" x2="23" y2="23"/>
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
              <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8"  y1="23" x2="16" y2="23"/>
            </svg>
          </span>
          <span class="btn-label">Mute</span>
        </button>

        <button id="muteVideo" class="control-btn video-off" title="Start Video">
          <span class="btn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="1" y1="1" x2="23" y2="23"/>
              <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.723v6.554a1 1 0 0 1-1.447.894L15 14"/>
              <rect x="1" y="6" width="14" height="12" rx="2" ry="2"/>
            </svg>
          </span>
          <span class="btn-label">Start Video</span>
        </button>

        <button id="shareScreenBtn" class="control-btn share-btn" title="Share Screen">
          <span class="btn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8"  y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </span>
          <span class="btn-label" id="share-label">Stop Share</span>
        </button>

        <button id="leaveBtn" class="control-btn leave" title="Leave">
          <span class="btn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </span>
          <span class="btn-label">Leave</span>
        </button>
      </div>

    </div>

    <!-- ════════════════════════════════════════
         SCHEDULE MODAL
    ════════════════════════════════════════ -->
    <div id="schedule-overlay" class="sched-overlay" style="display:none;">
      <div class="sched-modal">

        <!-- header -->
        <div class="sched-header">
          <div class="sched-header-left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8"  y1="2" x2="8"  y2="6"/>
              <line x1="3"  y1="10" x2="21" y2="10"/>
            </svg>
            <span>Schedule a Meeting</span>
          </div>
          <button class="sched-close" id="schedClose">✕</button>
        </div>

        <!-- body -->
        <div class="sched-body">

          <div class="sched-row">
            <div class="sched-field">
              <label>YOUR FULL NAME <span class="req">*</span></label>
              <input id="sched-name" placeholder="e.g. John Doe" />
            </div>
            <div class="sched-field">
              <label>YOUR INITIALS <span class="req">*</span></label>
              <input id="sched-initials" placeholder="e.g. JD" maxlength="5" />
            </div>
          </div>

          <div class="sched-field">
            <label>MEETING ID <span class="req">*</span></label>
            <div class="sched-copy-wrap">
              <input id="sched-meetid" placeholder="e.g. team-standup-42" />
              <button class="sched-copy-btn" id="schedCopyId" title="Copy Meeting ID">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
              </button>
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
            <label>YOUR EMAIL <span class="optional">(optional — to receive acceptance notification)</span></label>
            <input id="sched-email" type="email" placeholder="your@email.com" />
          </div>

          <div class="sched-field">
            <label>MESSAGE <span class="optional">(optional)</span></label>
            <textarea id="sched-message" placeholder="Brief agenda or notes…" rows="3"></textarea>
          </div>

          <button class="sched-submit" id="schedSubmit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Meeting Request
          </button>

        </div>
      </div>
    </div>

    <!-- ════════════════════════
         SUCCESS TOAST (custom)
    ════════════════════════ -->
    <div id="sched-success-toast" class="sched-toast" style="display:none;">
      <div class="sched-toast-inner">
        <div class="sched-toast-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div>
          <div class="sched-toast-title">Request Sent!</div>
          <div class="sched-toast-sub">Thank you — we'll get back to you soon.</div>
        </div>
      </div>
    </div>
    `;

    // refs
    this.joinScreen    = this.container.querySelector("#join-screen");
    this.meetingScreen = this.container.querySelector("#meeting-screen");
    this.videoStreams   = this.container.querySelector("#video-streams");

    // buttons
    this.container.querySelector("#joinBtn").onclick        = () => this.joinChannel();
    this.container.querySelector("#leaveBtn").onclick       = () => this.leaveChannel();
    this.container.querySelector("#muteAudio").onclick      = () => this.toggleAudio();
    this.container.querySelector("#muteVideo").onclick      = () => this.toggleVideo();
    this.container.querySelector("#shareScreenBtn").onclick = () => this.shareScreen();

    // ── Schedule modal wiring ──────────────────────────────────────────────
    this.container.querySelector("#premiumBtn").onclick  = () => this.openSchedule();
    this.container.querySelector("#schedClose").onclick  = () => this.closeSchedule();
    this.container.querySelector("#schedCopyId").onclick = () => this.copyMeetingId();
    this.container.querySelector("#schedSubmit").onclick = () => this.submitSchedule();

    // close on backdrop click
    this.container.querySelector("#schedule-overlay").onclick = (e) => {
      if (e.target.id === "schedule-overlay") this.closeSchedule();
    };

    // ── Load EmailJS SDK ───────────────────────────────────────────────────
    this._loadEmailJS();
  }

  // ── EmailJS loader (isolated so init is guaranteed before first send) ─────
  _loadEmailJS() {
    if (window.emailjs) {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
      this._emailjsReady = true;
      return;
    }
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
      this._emailjsReady = true;
    };
    s.onerror = () => console.error("Failed to load EmailJS SDK.");
    document.head.appendChild(s);
  }

  // ── Schedule helpers ──────────────────────────────────────────────────────

  openSchedule() {
    const overlay = this.container.querySelector("#schedule-overlay");
    // Pre-fill meeting ID from current session
    const meetingName = this.container.querySelector("#meeting-name").innerText.replace("Meeting: ", "");
    this.container.querySelector("#sched-meetid").value = meetingName || "";
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
    // ── Guard: SDK must be ready ───────────────────────────────────────────
    if (!this._emailjsReady || !window.emailjs) {
      this._schedError("Email service not ready yet — please try again in a moment.");
      return;
    }

    const name     = this.container.querySelector("#sched-name").value.trim();
    const initials = this.container.querySelector("#sched-initials").value.trim();
    const meetId   = this.container.querySelector("#sched-meetid").value.trim();
    const date     = this.container.querySelector("#sched-date").value;
    const time     = this.container.querySelector("#sched-time").value;
    const email    = this.container.querySelector("#sched-email").value.trim();
    const message  = this.container.querySelector("#sched-message").value.trim();

    // ── Required field validation ──────────────────────────────────────────
    if (!name || !initials || !meetId || !date || !time) {
      this._schedError("Please fill in all required fields (*).");
      return;
    }

    // ── Optional email format check ────────────────────────────────────────
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this._schedError("Please enter a valid email address.");
      return;
    }

    const btn = this.container.querySelector("#schedSubmit");
    btn.disabled = true;
    btn.textContent = "Sending…";

    const formattedDate = new Date(`${date}T${time}`).toLocaleString("en-ZA", {
      weekday: "long", year: "numeric", month: "long",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    });

    // ── HOST template params ───────────────────────────────────────────────
    // IMPORTANT: the key names here must EXACTLY match the {{variables}}
    // you defined inside your EmailJS template (template_myxj97v).
    // In your EmailJS dashboard → Email Templates → template_myxj97v:
    //   • "To Email" field  →  {{to_email}}
    //   • Body variables    →  {{from_name}}, {{initials}}, {{meeting_id}},
    //                          {{date_time}}, {{guest_email}}, {{message}}
    const hostParams = {
      to_email   : HOST_EMAIL,                    // ← recipient (your address)
      from_name  : name,
      initials   : initials,
      meeting_id : meetId,
      date_time  : formattedDate,
      guest_email: email || "Not provided",
      message    : message || "No additional message.",
    };

    // ── GUEST template params ──────────────────────────────────────────────
    // In your EmailJS dashboard → template_8056d44:
    //   • "To Email" field  →  {{to_email}}
    //   • Body variables    →  {{from_name}}, {{meeting_id}},
    //                          {{date_time}}, {{message}}
    const guestParams = email
      ? {
          to_email  : email,                        // ← recipient (guest's address)
          from_name : name,
          meeting_id: meetId,
          date_time : formattedDate,
          message   : message || "No additional message.",
        }
      : null;

    try {
      // 1️⃣  Notify the host (you)
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_HOST, hostParams);

      // 2️⃣  Notify the scheduler only if they provided an email
      if (guestParams) {
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_GUEST, guestParams);
      }

      // ✅ Success
      this.closeSchedule();
      this._showSuccessToast();
      this._resetScheduleForm();

    } catch (err) {
      console.error("EmailJS error:", err);

      // Surface a human-readable message
      const reason = err?.text || err?.message || "Unknown error";
      this._schedError(`Failed to send — ${reason}`);
    } finally {
      btn.disabled = false;
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Send Meeting Request`;
    }
  }

  _schedError(msg) {
    // Remove any existing error first
    const existing = this.container.querySelector(".sched-err");
    if (existing) existing.remove();

    const err = document.createElement("p");
    err.className = "sched-err";
    err.textContent = "⚠ " + msg;
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

  // ─────────────────────────────────────────────────────────────────────────
  //  Agora / meeting methods — unchanged
  // ─────────────────────────────────────────────────────────────────────────

  async joinChannel() {
    if (this.joined) return;

    const name    = this.container.querySelector("#username").value.trim();
    const channel = this.container.querySelector("#channelName").value.trim();

    document.querySelector("header")?.style.setProperty("display", "none");

    if (!name || !channel) {
      alert("Enter name and chat ID");
      return;
    }

    try {
      this.localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

      this.client.on("user-published", async (user, mediaType) => {
        await this.client.subscribe(user, mediaType);
        let player = document.getElementById(`remote-${user.uid}`);
        if (!player) player = this.createPlayer(`remote-${user.uid}`, `User ${user.uid}`);
        if (mediaType === "video") {
          user.videoTrack.play(player);
          const avatar = player.querySelector(".avatar");
          if (avatar) avatar.style.display = "none";
        }
        if (mediaType === "audio") user.audioTrack.play();
        this.updateCount();
      });

      this.client.on("user-unpublished", (user) => {
        const player = document.getElementById(`remote-${user.uid}`);
        if (player) player.remove();
        this.updateCount();
      });

      this.client.on("user-left", (user) => {
        const player = document.getElementById(`remote-${user.uid}`);
        if (player) player.remove();
        this.updateCount();
      });

      this.uid = await this.client.join(this.appId, channel, this.token, null);
      await this.client.publish(this.localTracks);

      await this.localTracks[0].setEnabled(false);
      await this.localTracks[1].setEnabled(false);

      const localPlayer = this.createPlayer("local-player", `${name} (You)`);
      this.localTracks[1].play(localPlayer);

      this.joinScreen.style.display    = "none";
      this.meetingScreen.style.display = "flex";

      this.container.querySelector("#meeting-name").innerText = `Meeting: ${channel}`;

      this.joined = true;
      this.startTimer();
      this.updateCount();

    } catch (err) {
      alert(err.message);
    }
  }

  createPlayer(id, name) {
    if (document.getElementById(id)) return document.getElementById(id);
    const div = document.createElement("div");
    div.id        = id;
    div.className = "video-player";
    const initial = name.charAt(0).toUpperCase();
    div.innerHTML = `
      <div class="avatar">${initial}</div>
      <div class="name-tag">${name}</div>
    `;
    this.videoStreams.appendChild(div);
    return div;
  }

  updateCount() {
    const count = this.client.remoteUsers.length + 1;
    this.container.querySelector("#count-num").innerText = count;
  }

  startTimer() {
    this.secondsElapsed = 0;
    this.timerInterval = setInterval(() => {
      this.secondsElapsed++;
      const m = String(Math.floor(this.secondsElapsed / 60)).padStart(2, "0");
      const s = String(this.secondsElapsed % 60).padStart(2, "0");
      const el = this.container.querySelector("#meeting-timer");
      if (el) el.innerText = `${m}:${s}`;
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  toggleAudio() {
    const track = this.localTracks[0];
    if (!track) return;
    this.audioMuted = !this.audioMuted;
    track.setEnabled(!this.audioMuted);
    const btn = this.container.querySelector("#muteAudio");
    if (this.audioMuted) {
      btn.classList.add("muted");
      btn.innerHTML = `
        <span class="btn-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="1" y1="1" x2="23" y2="23"/>
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8"  y1="23" x2="16" y2="23"/>
          </svg>
        </span>
        <span class="btn-label">Mute</span>`;
    } else {
      btn.classList.remove("muted");
      btn.innerHTML = `
        <span class="btn-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8"  y1="23" x2="16" y2="23"/>
          </svg>
        </span>
        <span class="btn-label">Unmute</span>`;
    }
  }

  toggleVideo() {
    const track = this.localTracks[1];
    if (!track) return;
    this.videoMuted = !this.videoMuted;
    track.setEnabled(!this.videoMuted);
    const btn    = this.container.querySelector("#muteVideo");
    const player = document.getElementById("local-player");
    const avatar = player?.querySelector(".avatar");
    if (this.videoMuted) {
      btn.classList.add("video-off");
      btn.innerHTML = `
        <span class="btn-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="1" y1="1" x2="23" y2="23"/>
            <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.723v6.554a1 1 0 0 1-1.447.894L15 14"/>
            <rect x="1" y="6" width="14" height="12" rx="2" ry="2"/>
          </svg>
        </span>
        <span class="btn-label">Start Video</span>`;
      if (avatar) avatar.style.display = "flex";
    } else {
      btn.classList.remove("video-off");
      btn.innerHTML = `
        <span class="btn-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="23 7 16 12 23 17 23 7"/>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
          </svg>
        </span>
        <span class="btn-label">Stop Video</span>`;
      if (avatar) avatar.style.display = "none";
    }
  }

  async shareScreen() {
    if (!this.screenSharing) {
      try {
        this.screenTrack = await AgoraRTC.createScreenVideoTrack();
        await this.client.unpublish(this.localTracks[1]);
        await this.client.publish(this.screenTrack);
        const player = this.createPlayer("screen-player", "You (Screen)");
        this.screenTrack.play(player);
        const avatar = player.querySelector(".avatar");
        if (avatar) avatar.style.display = "none";
        this.screenSharing = true;
        const btn = this.container.querySelector("#shareScreenBtn");
        btn.classList.add("sharing");
        btn.querySelector(".btn-label").innerText = "Stop Share";
      } catch (err) { console.error(err); }
    } else {
      try {
        if (this.screenTrack) {
          await this.client.unpublish(this.screenTrack);
          this.screenTrack.stop();
          this.screenTrack.close();
          this.screenTrack = null;
        }
        const screenPlayer = document.getElementById("screen-player");
        if (screenPlayer) screenPlayer.remove();
        await this.client.publish(this.localTracks[1]);
        this.screenSharing = false;
        const btn = this.container.querySelector("#shareScreenBtn");
        btn.classList.remove("sharing");
        btn.querySelector(".btn-label").innerText = "Stop Share";
      } catch (err) { console.error(err); }
    }
  }

  async leaveChannel() {
    this.stopTimer();
    this.localTracks.forEach(track => { track.stop(); track.close(); });
    if (this.screenTrack) { this.screenTrack.stop(); this.screenTrack.close(); }
    await this.client.leave();
    this.videoStreams.innerHTML = "";
    document.querySelector("header")?.style.setProperty("display", "block");
    this.joinScreen.style.display    = "flex";
    this.meetingScreen.style.display = "none";
    this.joined        = false;
    this.audioMuted    = true;
    this.videoMuted    = true;
    this.screenSharing = false;
  }
}