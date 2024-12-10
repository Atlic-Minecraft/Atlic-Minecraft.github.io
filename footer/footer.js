const footer = document.createElement("div");
footer.className = "footer";
footer.innerHTML = `
    <a class="outline link" href="mailto:support@atlic.net"><i class="fas fa-envelope icon"></i> Contact Us</a>
    <a class="outline link" href="https://discord.gg/cQgjrusqD9"><i class="fab fa-discord icon"></i> Discord</a>
`;

document.body.appendChild(footer);