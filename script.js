// VARIABLES
let email = "28percentt@gmail.com";
let name = "28percentt";
let iconPath = "icon.png";

// CODE

// After page load
document.addEventListener("DOMContentLoaded", function () {
    document.title = `${name} - Portfolio`;

    let link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = iconPath;
    document.head.appendChild(link);

    let emailLink = document.getElementById("email");
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;

    let footerName = document.getElementById("footer-name");
    footerName.textContent = name;

    let siteURL = window.location.origin;

    new QRCode(document.getElementById("qrcode"), {
        text: siteURL,
        width: 200,
        height: 200
    });
});