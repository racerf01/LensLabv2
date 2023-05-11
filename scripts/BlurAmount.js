var blurAmount = 0;
const blurOverlay = document.getElementById("overlay-1");

function CalculateBlurAmount (currentX_Distance, currentX_Focal, blurLevel) {
    blurAmount = currentX_Focal/1000 + currentX_Distance/1000 - blurLevel;
    blurOverlay.style['-webkit-backdrop-filter'] = `blur(${blurAmount}vh)`;
	blurOverlay.style.backdropFilter = `blur(${blurAmount}vh)`;

    // console.log("blurAmount", blurAmount)
    return blurAmount;
}