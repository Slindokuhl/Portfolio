const AgoraRTC = window.AgoraRTC;

export default class VideoCall {
  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.appId = "48e1240440fa48e29297863ed05ac95f";
    this.token = null;

    this.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    this.localTracks = [];
    this.joined = false;

    // ✅ UI
    this.container.innerHTML = `
    <!-- JOIN SCREEN -->
    <div id="join-screen">
      <div class="join-container">

        <div class="join-left">
          <div class="logo">🎥 MicroSlikx</div>

          <h1>Video meetings built for real collaboration</h1>

          <p class="desc">
            Create an instant meeting room, share your unique Meeting ID,
            and invite anyone to join — no account needed.
          </p>

          <div class="features">
            <div>🔗 Generate a unique Meeting ID instantly</div>
            <div>👥 Invite participants from anywhere</div>
            <div>🖥️ Screen sharing in one click</div>
            <div>🔒 Secure connections</div>
          </div>
        </div>

        <div class="join-card">
          <h2>Join a Meeting</h2>
          <p class="small-text">Enter your name and a Meeting ID</p>

          <label>YOUR NAME</label>
          <input id="username" placeholder="Enter your name" />

          <label>MEETING ID</label>
          <input id="channelName" placeholder="e.g team-standup-42" />

          <button id="joinBtn">Join Now</button>

          <div class="hint-box">
            💡 Enter any ID to create a room instantly
          </div>
        </div>

      </div>
    </div>

    <!-- MEETING SCREEN -->
    <div id="meeting-screen" style="display:none;">

      <div class="top-bar">
        <div class="meeting-info">
          <span id="meeting-name">Meeting</span>
          <span class="live-badge">● LIVE</span>
        </div>

        <div class="top-right">
          <div class="participants-count" id="count">👥 1</div>
        </div>
      </div>

      <div id="video-streams" class="video-grid"></div>

      <div class="controls">
        <button id="muteAudio" class="control-btn">🎤</button>
        <button id="muteVideo" class="control-btn">📷</button>
        <button id="shareScreenBtn" class="control-btn primary">🖥️</button>
        <button id="leaveBtn" class="control-btn leave">⏏</button>
      </div>

    </div>
    `;

     // refs
    this.joinScreen = this.container.querySelector("#join-screen");
    this.meetingScreen = this.container.querySelector("#meeting-screen");
    this.videoStreams = this.container.querySelector("#video-streams");

    // buttons
    this.container.querySelector("#joinBtn").onclick = () => this.joinChannel();
    this.container.querySelector("#leaveBtn").onclick = () => this.leaveChannel();
    this.container.querySelector("#muteAudio").onclick = () => this.toggleAudio();
    this.container.querySelector("#muteVideo").onclick = () => this.toggleVideo();
    this.container.querySelector("#shareScreenBtn").onclick = () => this.shareScreen();
  }

  async joinChannel() {
    if (this.joined) return;

    const name = this.container.querySelector("#username").value;
    const channel = this.container.querySelector("#channelName").value;

    document.querySelector("header")?.style.setProperty("display", "none");

    if (!name || !channel) {
      alert("Enter name and Meeting ID");
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

          // hide avatar when video starts
          player.querySelector(".avatar").style.display = "none";
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

      const localPlayer = this.createPlayer("local-player", `${name} (You)`);
      this.localTracks[1].play(localPlayer);

      localPlayer.querySelector(".avatar").style.display = "none";

      this.joinScreen.style.display = "none";
      this.meetingScreen.style.display = "flex";

      this.container.querySelector("#meeting-name").innerText = channel;

      this.joined = true;

    } catch (err) {
      alert(err.message);
    }
  }

  createPlayer(id, name) {
    const div = document.createElement("div");
    div.id = id;
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
    this.container.querySelector("#count").innerText = `👥 ${count}`;
  }

  toggleAudio() {
    const track = this.localTracks[0];
    if (track) track.setEnabled(!track.enabled);
  }

  toggleVideo() {
    const track = this.localTracks[1];
    if (track) track.setEnabled(!track.enabled);
  }

  async shareScreen() {
    try {
      this.screenTrack = await AgoraRTC.createScreenVideoTrack();

      await this.client.unpublish(this.localTracks[1]);
      await this.client.publish(this.screenTrack);

      const player = this.createPlayer("screen-player", "You (Screen)");
      this.screenTrack.play(player);

      player.querySelector(".avatar").style.display = "none";

    } catch (err) {
      console.error(err);
    }
  }

  async leaveChannel() {
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

    this.joinScreen.style.display = "flex";
    this.meetingScreen.style.display = "none";

    this.joined = false;
  }
}