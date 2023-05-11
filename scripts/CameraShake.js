var shakeToggle = document.getElementById("toggle-input")

shakeToggle.addEventListener("input", (event) => {
    if (shakeToggle.value == 0) {
        shakeToggle.value = 1;
        backgroundImg.style.backgroundImage = "url('img/pexels-abby-chung-1191377.jpg')"
    } else {
        shakeToggle.value = 0;
        backgroundImg.style.backgroundImage = "url('img/bg.gif')"
    }
  });