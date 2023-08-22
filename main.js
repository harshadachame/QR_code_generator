document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputField");
    const generateBtn = document.getElementById("generateBtn");
    const qrcodeDiv = document.getElementById("qrcode");
    const downloadLink = document.getElementById("downloadLink");

    generateBtn.addEventListener("click", generateQRCode);

    function generateQRCode() {
        const inputValue = inputField.value;
        if (inputValue) {
            qrcodeDiv.innerHTML = ""; // Clear previous QR codes
            const qrcode = new QRCode(qrcodeDiv, {
                text: inputValue,
                width: 200,
                height: 200,
            });
            downloadLink.href = qrcode._el.childNodes[0].toDataURL("image/png");
            downloadLink.style.display = "block";
        }
    }
});
