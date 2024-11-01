function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function showImageFullscreen(src) {

    const fullscreenDiv = document.createElement("div");
    fullscreenDiv.classList.add("fullscreen");
    
    const fullscreenImg = document.createElement("img");
    fullscreenImg.src = src;
    fullscreenImg.alt = "Imagem em tela cheia";
    
    fullscreenImg.onclick = () => {
        document.body.removeChild(fullscreenDiv);
    };
    
    fullscreenDiv.appendChild(fullscreenImg);
    document.body.appendChild(fullscreenDiv);
}

document.querySelectorAll(".imagens img").forEach(img => {
    img.onclick = () => showImageFullscreen(img.src);
});