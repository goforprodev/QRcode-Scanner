// UI ELEMENTS
const logsUI = document.getElementById("logs");

// BUTTONS
const clearBtn = document.getElementById("clear_log");
const startBtn = document.getElementById("start_btn");
const stopBtn = document.getElementById("stop_btn");

// QRCODE UI ELEMENTS
const video = document.getElementById("qr-video");
const camList = document.getElementById("cam-list");
const videoContainer = document.getElementById("video-container");
const camHasFlash = document.getElementById("cam-has-flash");
const flashToggle = document.getElementById("flash-toggle");
const flashState = document.getElementById("flash-state");
const camQrResult = document.getElementById("cam-qr-result");
const fileSelector = document.getElementById("file-selector");
const fileQrResult = document.getElementById("file-qr-result");

// FUNCTIONS
const showLog = (text) => {
  const div = `
        <div
        id="log"
        class="bg-white my-2 shadow-md py-4 px-2 rounded-lg border-l-8 border-rose-400 flex gap-2 items-center h-auto"
      >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAMAAAAshD+zAAAAMFBMVEX///8AAABUVFSqqqo4ODjHx8eNjY1ubm5iYmKxsbHj4+OKioqbm5tMTEx+fn5ycnIqcEgyAAAFJ0lEQVR4nO2d7ZLaMAxFA2wI0P14/7ftTJ2d+m6vJRsCS9tz/3QwcuwTdyxH0pJpQgghhBBCCA3quB9S6TSXD0v9zbFzjLXT3DYfm1Ew7rTfDal0OpQPL/U3+84x1k6HtvnYjIJxgQMOOOA2h/s4JBI4N5kXA6wgbbiDsdtlM/rohgtupIz4QLhsRgfggAPuqeEuZlOazYir3aV8evmlt/LPqT7Unkrbj2Iudud6Emdpk6FmM6XLVXCfG36tvRnR3elgRYLVbF9vJ/MTyWSBAw444J4XbnUF72XDX32AtBW7s7iCoh+y7Rfrd3Et3wynfcVuX9vpirRXSScIHHDAAfcvwwWPNy/tvm5KwAEHHHDPDje3k3syojs4v8khWbOT5Svpe6rbAjiXHJ2vggskIwaPPOkqHdp2bqi2gAMOOOC+Aa5XpZOGvyWGIlv86lpea/fw3rbTyH2n7pU2do8twSPPmB1wwAEH3FPB3aLUf+XFOGKQOttHCjjggHusnh5urfMoH7S+xNlJbcqxTjRqUbckGqU2RQuupV5FalPcXLRN5mKVxvbVzt19p7EVyXMKri2fC3ATcLWAGwBxbf853FJ2YdmST2aLf63LCpfylbgCVbv8UOVcQeoeJIy/BHAumeEccfrYoupdOWeX9u3+XwQccMABtxmcG8Q9oqQXDHIA7ib0Xi8ABg444IB7INxs6kYWczA91m1rovFsCrPXs3I71rJKDuxHmUv5oMXftfVnktLFZFSprwqiVa6kPoh0peMG0bTu/4LAAQcccPeBk+1XJdvvYlzBGuZw7sG5kfa27+pV9E9CXeg8dwWB0hUJHHGvXVHusNvzuzJtDBxwwAF3O1xvAKY3zyCTyYNBveMCd3Vn4H4LuAm4TrigvkQOv+6AvbSLteUULb+bonEQl6RMk4pufqN3QdrSRxR3vXxFrlo5Nz/ggAMOuPvCBa6gtL3KFr92Mm3uelqS6OIqzk7GDSoOXVwlV+qcc4ctdsHjkrMbG2NUwAEHHHC3gMjV3eNIGiAK8gep/xqto+y1Aw444IDbDE7iES6+kScfJVkoh2SNjZRv9EcD5eDs/qje/S2PS3CO3oV2m67SOs32qqfl83lETPqOppKBAw444G6HC0LTV7mCdTuXPfu9rkM5pdu+C8WLG+l2BWn0a9CJp6Xy20W68r7AAQcccJvBpRfsnbQDviX3cK/ol0wGOOCAA65XLvk41wfTvakvcfUq+jIGV8MiBddSw6K/MytxFVfAHRSdq3rvfq8/dP7rqjL73L8CBxxwwD0QLnAF7bZXE1fRV7RJ36B0UeIqsu2fxT04tySuZTvld1rMA+fsVt31Tf93AAcccMDdF0465+qFS4Hdzer1kRNwwAEH3N8BN7cPzm8mIflWH5xXuUJvqVdxsZYvU08Pznu5aW0JnPsqSCUHvk8MAj+XTc8LuAk44L6MC9w2cL2vaFsl4fRBV7DUsRGNv4ifkWLJo4w76AoOuz+1b8P1FpP2rtxg9EvagAMOOOD+abipHjfwkfJhNEAEHHDAAfdNcJd2YnCpD7Xu3carFlNzIgfsWfrK9dyLIbaDGyyBD9LGYyvs+m6+csABBxxwKdzl8Kf0hcNTbSclhFqbUuxczYn+pmw7/hLEUFydTA4XaJfd1fwnCNyddivXbhvNfwMHHHDfAvdh9knR3wzXKwciA6fAwY0ZzBXkwMABBxxwm8FJIi9X6aR1KHKoDd537MYVO3cGDl6aKeMihBBCCCGE+vUTu/p9Nm2qdPsAAAAASUVORK5CYII=" alt="" class="w-10">
          <p>${text}</p>
        </div>
    `;
  logsUI.innerHTML += div;
};

const clearLogs = () => {
  logsUI.innerHTML = "";
};

const parseResult = (result) => {
  console.log(result);
  console.log(result.data);
  showLog(result.data);
};

const startScan = () => {
  scanner.start();
};

const stopScan = () => {
  scanner.stop();
};

// ###### Web Cam Scanning #######

const scanner = new QrScanner(video, (result) => parseResult(result), {
  onDecodeError: (error) => {
    camQrResult.textContent = error;
    camQrResult.style.color = "inherit";
  },
  highlightScanRegion: true,
  highlightCodeOutline: true,
});

const updateFlashAvailability = () => {
  scanner.hasFlash().then((hasFlash) => {
    camHasFlash.textContent = hasFlash;
    flashToggle.style.display = hasFlash ? "inline-block" : "none";
  });
};

scanner.start().then(() => {
  updateFlashAvailability();
  QrScanner.listCameras(true).then((cameras) =>
    cameras.forEach((camera) => {
      const option = document.createElement("option");
      option.value = camera.id;
      option.text = camera.label;
      camList.add(option);
    })
  );
});

// for debugging
window.scanner = scanner;

document
  .getElementById("scan-region-highlight-style-select")
  .addEventListener("change", (e) => {
    videoContainer.className = e.target.value;
    scanner._updateOverlay();
  });

document.getElementById("show-scan-region").addEventListener("change", (e) => {
  const input = e.target;
  const label = input.parentNode;
  label.parentNode.insertBefore(scanner.$canvas, label.nextSibling);
  scanner.$canvas.style.display = input.checked ? "block" : "none";
});

document
  .getElementById("inversion-mode-select")
  .addEventListener("change", (event) => {
    scanner.setInversionMode(event.target.value);
  });

camList.addEventListener("change", (event) => {
  scanner.setCamera(event.target.value).then(updateFlashAvailability);
});

flashToggle.addEventListener("click", () => {
  scanner
    .toggleFlash()
    .then(() => (flashState.textContent = scanner.isFlashOn() ? "on" : "off"));
});

// ###### Web Cam Scanning end #######

// EVENT HANDLERS
clearBtn.addEventListener("click", clearLogs);
startBtn.addEventListener("click", startScan);
stopBtn.addEventListener("click", stopScan);