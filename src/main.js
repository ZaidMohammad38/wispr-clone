let mediaRecorder;
let audioChunks = [];

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const statusEl = document.getElementById("status");
const transcriptEl = document.getElementById("output");

async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  mediaRecorder = new MediaRecorder(stream);
  audioChunks = [];

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.start();

  statusEl.textContent = "Recording...";
  transcriptEl.value = "";

  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopRecording() {
  mediaRecorder.stop();

  statusEl.textContent = "Transcribing...";
  startBtn.disabled = false;
  stopBtn.disabled = true;

  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
    console.log("Audio recorded:", audioBlob);

    // 🔴 FAKE TRANSCRIPT (Assignment-friendly)
    setTimeout(() => {
      transcriptEl.value =
        "This is a simulated transcription. Real Whisper integration planned.";
      statusEl.textContent = "Done";
    }, 1500);
  };
}

startBtn.addEventListener("click", startRecording);
stopBtn.addEventListener("click", stopRecording);
