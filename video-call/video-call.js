const AgoraRTC = window.AgoraRTC;

export default class VideoCall {
  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.appId = "48e1240440fa48e29297863ed05ac95f";
    this.token = null;

    this.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    this.localTracks = [];
    this.joined = false;

    this.audioMuted = true;   // starts muted (as shown in screenshot)
    this.videoMuted = true;   // starts with video off
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
 
  <!-- Recreated Crolix logo in SVG: circular C with camera + chat -->
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
 
    <!-- Outer C ring (arc from ~40° to ~320°) -->
    <path d="
      M 50 8
      A 42 42 0 1 1 19.5 73
      L 26 68
      A 34 34 0 1 0 50 16 Z"
      fill="url(#ringGrad)"
    />
 
    <!-- Camera body -->
    <rect x="26" y="36" width="30" height="22" rx="4" fill="url(#camGrad)"/>
    <!-- Camera lens -->
    <circle cx="41" cy="47" r="7" fill="#0d1b2a"/>
    <circle cx="41" cy="47" r="4.5" fill="url(#ringGrad)"/>
    <!-- Camera viewfinder notch -->
    <rect x="53" y="40" width="2" height="14" rx="1" fill="url(#camGrad)"/>
    <!-- Video triangle (play arrow) -->
    <polygon points="56,44 63,47 56,50" fill="url(#camGrad)"/>
 
    <!-- Chat bubble tail at bottom-left -->
    <path d="M 22 58 L 18 68 L 30 62" fill="url(#ringGrad)" opacity="0.85"/>
  </svg>
 
  <div class="logo-text">
    <span class="crolix">Crolix</span>
    <span class="meet">Meet</span>
  </div>

</div>
          <h1>Start or Join meeting</h1>

          <p class="subtitle">
            Connect instantly with your team. Create meeting, share your ID,
            and collaborate in real-time.
          </p>

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
        </div>

        <div class="timer" id="meeting-timer">00:00</div>

        <div class="top-right">
          <div class="participants-count" id="count">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
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
              <line x1="8" y1="23" x2="16" y2="23"/>
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
              <line x1="8" y1="21" x2="16" y2="21"/>
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
  }

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

        if (!player) {
          player = this.createPlayer(`remote-${user.uid}`, `User ${user.uid}`);
        }

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

      // Disable AFTER publishing — Agora requires tracks to be published before disabling
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
    const label = btn.querySelector(".btn-label");

    if (this.audioMuted) {
      btn.classList.add("muted");
      btn.innerHTML = `
        <span class="btn-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="1" y1="1" x2="23" y2="23"/>
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </span>
        <span class="btn-label">Mute</span>
      `;
    } else {
      btn.classList.remove("muted");
      btn.innerHTML = `
        <span class="btn-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </span>
        <span class="btn-label">Unmute</span>
      `;
    }
  }

  toggleVideo() {
    const track = this.localTracks[1];
    if (!track) return;

    this.videoMuted = !this.videoMuted;
    track.setEnabled(!this.videoMuted);

    const btn = this.container.querySelector("#muteVideo");
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
        <span class="btn-label">Start Video</span>
      `;
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
        <span class="btn-label">Stop Video</span>
      `;
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

      } catch (err) {
        console.error(err);
      }
    } else {
      // Stop sharing
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

      } catch (err) {
        console.error(err);
      }
    }
  }

  async leaveChannel() {
    this.stopTimer();

    this.localTracks.forEach(track => {
      track.stop();
      track.close();
    });

    if (this.screenTrack) {
      this.screenTrack.stop();
      this.screenTrack.close();
    }

    await this.client.leave();

    this.videoStreams.innerHTML = "";

    document.querySelector("header")?.style.setProperty("display", "block");

    this.joinScreen.style.display    = "flex";
    this.meetingScreen.style.display = "none";

    this.joined = false;
    this.audioMuted = true;
    this.videoMuted = true;
    this.screenSharing = false;
  }
}