let siteURL = window.location.origin;

new QRCode(document.getElementById("qrcode"), {
    text: siteURL,
    width: 200,
    height: 200
});