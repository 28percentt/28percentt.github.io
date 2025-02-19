// VARIABLES
let email = "28percentt@gmail.com";
let name = "28percentt";
let iconPath = "icon.png";

// CODE

document.addEventListener("DOMContentLoaded", function () {
    document.title = `${name}'s Portfolio`;

    let link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = iconPath;
    document.head.appendChild(link);

    let logoElement = document.getElementById('Logo');
    logoElement.src = iconPath;

    let emailLink = document.getElementById("email");
    emailLink.href = `mailto:${email}`;

    let footerName = document.getElementById("footer-name");
    footerName.textContent = name;
});