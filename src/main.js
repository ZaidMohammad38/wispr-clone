let mediaRecorder;
let audioChunks = [];

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const statusEl = document.getElementById("status");
const outputEl = document.getElementById("output");

startBtn.addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  mediaRecorder = new MediaRecorder(stream);
  audioChunks = [];

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.start();

  statusEl.textContent = "Recording...";
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  mediaRecorder.stop();

  statusEl.textContent = "Processing...";
  startBtn.disabled = false;
  stopBtn.disabled = true;

  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
    console.log("Recorded audio:", audioBlob);

    // ✅ Fake transcript
    setTimeout(() => {
      outputEl.value =
        "This is a simulated transcription. Real speech-to-text integration coming soon.";
      statusEl.textContent = "Done";
    }, 1500);
  };
});
