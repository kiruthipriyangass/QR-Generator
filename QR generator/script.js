const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", () => {
  const text = qrText.value.trim();
  
  if (text === "") {
    alert("Please enter text or URL!");
    return;
  }

  // Using free API to generate QR Code
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
  qrImage.src = qrUrl;
  qrImage.style.display = "block";
  downloadBtn.classList.remove("hidden");
});

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "QRCode.png";
  link.click();
});
