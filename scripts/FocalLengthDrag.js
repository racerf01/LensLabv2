var focalBG = document.getElementById("focal-bg");
var focalButton = document.getElementById("focal-button");

var modelImgFocal = document.getElementById("model");
var backgroundImg = document.getElementById("viewfinder")

var focalText = document.getElementById("focal-text-right")

// console.log(focalBG);
// console.log(focalButton);

var active_Focal = false;
var currentX_Focal = 0;
var currentY_Focal = 0;
var initialX_Focal;
var initialY_Focal;
var xOffset_Focal = 0;
var yOffset_Focal = 0;

// Media Queries vars 
var BigScreen = window.matchMedia("(min-width: 1024px) and (orientation: landscape)")
var MediumScreen = window.matchMedia("(max-width: 1024px) and (orientation: landscape)")
var BigPortraitScreen = window.matchMedia("(max-width: 1024px) and (orientation: portrait)")
var SmallPortraitScreen = window.matchMedia("(max-width: 576px) and (orientation: portrait)")

focalButton.addEventListener("touchstart", dragStartFocal, false);
focalButton.addEventListener("touchend", dragEndFocal, false);
focalButton.addEventListener("touchmove", dragFocal, false);

focalButton.addEventListener("mousedown", dragStartFocal, false);
focalButton.addEventListener("mouseup", dragEndFocal, false);
focalButton.addEventListener("mousemove", dragFocal, false);

function dragStartFocal(e) {
  if (e.type === "touchstart") {
      initialX_Focal = e.touches[0].clientX - xOffset_Focal;
      initialY_Focal = e.touches[0].clientY - yOffset_Focal;
  } else {
      initialX_Focal = e.clientX - xOffset_Focal;
      initialY_Focal = e.clientY - yOffset_Focal;
  }

  if (e.target === focalBG) {
      active_Focal = true;
  }
  }

  function dragEndFocal(e) {
        initialX_Focal = currentX_Focal;
        initialY_Focal = currentY_Focal;
        active_Focal = false;
  }

  function dragFocal(e) {
    if (active_Focal) {
    
      e.preventDefault();
    
      if (e.type === "touchmove") {
        currentX_Focal = e.touches[0].clientX - initialX_Focal;
        currentY_Focal = e.touches[0].clientY - initialY_Focal;


        if (BigScreen.matches) { 
          if (currentX_Focal <= 340) {
            if (currentX_Focal >= 0) {
              if (modelImgFocal && modelImgFocal.style) {

                CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)

                modelImgFocal.style.height = parseInt("50vh", 10) + ModelSizeBigScreen + "vh";
                modelImgFocal.style.width = parseInt("50vh", 10) + ModelSizeBigScreen + "vh";
              }
              if (backgroundImg && backgroundImg.style) { 
                backgroundImg.style.backgroundSize = parseInt("90vh", 10) + currentX_Focal/20 + "vh";
              }

              focalText.textContent = `${Math.round(55 + currentX_Focal/5)}m`;

              // console.log(currentX_Focal);

              xOffset_Focal = currentX_Focal;
              yOffset_Focal = currentY_Focal;

              if (currentX_Focal >= 340) {
                if (currentX_Focal <= 0) {
                  dragEndFocal();
                }
              }
            } 
          }
        }
        

        if (MediumScreen.matches) { 
          if (currentX_Focal <= 270) {
            if (currentX_Focal >= 0) {
              if (modelImgFocal && modelImgFocal.style) {

                CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)

                modelImgFocal.style.height = parseInt("40vh", 10) + ModelSizeBigScreen + "vh";
                modelImgFocal.style.width = parseInt("40vh", 10) + ModelSizeBigScreen + "vh";
              }
              if (backgroundImg && backgroundImg.style) { 
                  backgroundImg.style.backgroundSize = parseInt("90vh", 10) + currentX_Focal/20 + "vh";
              }

              focalText.textContent = `${Math.round(55 + (currentX_Focal+70)/5)}m`;

              // console.log(currentX_Focal);

              xOffset_Focal = currentX_Focal;
              yOffset_Focal = currentY_Focal;

              if (currentX_Focal >= 270) {
                if (currentX_Focal <= 0) {
                  dragEndFocal();
                }
              }
            } 
          }
        }

        if (BigPortraitScreen.matches) { 
          if (currentX_Focal <= 290) {
            if (currentX_Focal >= 0) {
              if (modelImgFocal && modelImgFocal.style) {

                CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)

                modelImgFocal.style.height = parseInt("32vh", 10) + ModelSizeBigScreen + "vh";
                modelImgFocal.style.width = parseInt("32vh", 10) + ModelSizeBigScreen + "vh";
              }
              if (backgroundImg && backgroundImg.style) { 
                  backgroundImg.style.backgroundSize = parseInt("90vh", 10) + currentX_Focal/20 + "vh";
              }

              focalText.textContent = `${Math.round(55 + (currentX_Focal+50)/5)}m`;

              // console.log(currentX_Focal);

              xOffset_Focal = currentX_Focal;
              yOffset_Focal = currentY_Focal;

              if (currentX_Focal >= 290) {
                if (currentX_Focal <= 0) {
                  dragEndFocal();
                }
              }
            } 
          }
        }

        if (SmallPortraitScreen.matches) { 
          if (currentX_Focal <= 295) {
            if (currentX_Focal >= 0) {
              if (modelImgFocal && modelImgFocal.style) {

                CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)

                modelImgFocal.style.height = parseInt("27vh", 10) + ModelSizeBigScreen + "vh";
                modelImgFocal.style.width = parseInt("27vh", 10) + ModelSizeBigScreen + "vh";
              }
              if (backgroundImg && backgroundImg.style) { 
                  backgroundImg.style.backgroundSize = parseInt("90vh", 10) + currentX_Focal/20 + "vh";
              }

              focalText.textContent = `${Math.round(55 + (currentX_Focal+45)/5)}m`;

              // console.log(currentX_Focal);

              xOffset_Focal = currentX_Focal;
              yOffset_Focal = currentY_Focal;

              if (currentX_Focal >= 295) {
                if (currentX_Focal <= 0) {
                  dragEndFocal();
                }
              }
            } 
          }
        }

        CalculateBlurAmount(currentX_Distance, currentX_Focal, blurLevel);

        // console.log("BlurAmount2: ", blurAmount2)

      } else {
        currentX_Focal = e.clientX - initialX_Focal;
        currentY_Focal = e.clientY - initialY_Focal;

        if (BigScreen.matches) { 
          if (currentX_Focal <= 340) {
            if (currentX_Focal >= 0) {
              if (modelImgFocal && modelImgFocal.style) {

                CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)

                modelImgFocal.style.height = parseInt("50vh", 10) + ModelSizeBigScreen + "vh";
                modelImgFocal.style.width = parseInt("50vh", 10) + ModelSizeBigScreen + "vh";

              }
              if (backgroundImg && backgroundImg.style) { 
                backgroundImg.style.backgroundSize = parseInt("90vh", 10) + currentX_Focal/5 + "vh";
              }

              focalText.textContent = `${Math.round(55 + currentX_Focal/5)}m`;

              // console.log("ModelSizeBigScreen", ModelSizeBigScreen);

              xOffset_Focal = currentX_Focal;
              yOffset_Focal = currentY_Focal;

              if (currentX_Focal >= 340) {
                if (currentX_Focal <= 0) {
                  dragEndFocal();
                }
              }
            } 
          }
        }
        
        if (MediumScreen.matches) { 
          if (currentX_Focal <= 270) {
            if (currentX_Focal >= 0) {
              if (modelImgFocal && modelImgFocal.style) {

                CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)

                modelImgFocal.style.height = parseInt("40vh", 10) + ModelSizeBigScreen + "vh";
                modelImgFocal.style.width = parseInt("40vh", 10) + ModelSizeBigScreen + "vh";
              }
              if (backgroundImg && backgroundImg.style) { 
                  backgroundImg.style.backgroundSize = parseInt("90vh", 10) + currentX_Focal/20 + "vh";
              }

              focalText.textContent = `${Math.round(55 + (currentX_Focal+70)/5)}m`;

              // console.log(currentX_Focal);

              xOffset_Focal = currentX_Focal;
              yOffset_Focal = currentY_Focal;

              if (currentX_Focal >= 270) {
                if (currentX_Focal <= 0) {
                  dragEndFocal();
                }
              }
            } 
          }
        }

        if (BigPortraitScreen.matches) { 
          if (currentX_Focal <= 290) {
            if (currentX_Focal >= 0) {
              if (modelImgFocal && modelImgFocal.style) {

                CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)

                modelImgFocal.style.height = parseInt("32vh", 10) + ModelSizeBigScreen + "vh";
                modelImgFocal.style.width = parseInt("32vh", 10) + ModelSizeBigScreen + "vh";
              }
              if (backgroundImg && backgroundImg.style) { 
                  backgroundImg.style.backgroundSize = parseInt("90vh", 10) + currentX_Focal/20 + "vh";
              }
              // console.log(currentX_Focal);

              focalText.textContent = `${Math.round(55 + (currentX_Focal+50)/5)}m`;

              xOffset_Focal = currentX_Focal;
              yOffset_Focal = currentY_Focal;

              if (currentX_Focal >= 290) {
                if (currentX_Focal <= 0) {
                  dragEndFocal();
                }
              }
            } 
          }
        }

        if (SmallPortraitScreen.matches) { 
          if (currentX_Focal <= 295) {
            if (currentX_Focal >= 0) {
              if (modelImgFocal && modelImgFocal.style) {

                CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)

                modelImgFocal.style.height = parseInt("27vh", 10) + ModelSizeBigScreen + "vh";
                modelImgFocal.style.width = parseInt("27vh", 10) + ModelSizeBigScreen + "vh";
              }
              if (backgroundImg && backgroundImg.style) { 
                  backgroundImg.style.backgroundSize = parseInt("90vh", 10) + currentX_Focal/20 + "vh";
              }

              focalText.textContent = `${Math.round(55 + (currentX_Focal+45)/5)}m`;

              // console.log(currentX_Focal);

              xOffset_Focal = currentX_Focal;
              yOffset_Focal = currentY_Focal;

              if (currentX_Focal >= 295) {
                if (currentX_Focal <= 0) {
                  dragEndFocal();
                }
              }
            } 
          }
        }

        CalculateBlurAmount(currentX_Distance, currentX_Focal, blurLevel);

        // console.log("BlurAmount2: ", blurAmount2)
      }

      if (BigScreen.matches) {
        if (currentX_Focal <= 340) {
          if (currentX_Focal >= 0) {
            setTranslate(currentX_Focal, 0, focalBG);
          }
        }
      }
      if (MediumScreen.matches) {
        if (currentX_Focal <= 270) {
          if (currentX_Focal >= 0) {
            setTranslate(currentX_Focal, 0, focalBG);
          }
        }
      }
      if (BigPortraitScreen.matches) {
        if (currentX_Focal <= 290) {
          if (currentX_Focal >= 0) {
            setTranslate(currentX_Focal, 0, focalBG);
          }
        }
      }
      if (SmallPortraitScreen.matches) {
        if (currentX_Focal <= 295) {
          if (currentX_Focal >= 0) {
            setTranslate(currentX_Focal, 0, focalBG);
          }
        }
      }
     
    }
  }

function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos/10 + "vh, " + yPos + "vh, 0)";
}
