var distanceBG = document.getElementById("distance-bg");
var distanceButton = document.getElementById("distance-button");

var modelImgDistance = document.getElementById("model");

var distanceText = document.getElementById("distance-text-right");


console.log(distanceBG);
console.log(distanceButton);

var active_Distance = false;
var currentX_Distance = 0;
var currentY_Distance = 0;
var initialX_Distance;
var initialY_Distance;
var xOffset_Distance = 0;
var yOffset_Distance = 0;

// Media Queries vars 
var BigScreen = window.matchMedia("(min-width: 1024px) and (orientation: landscape)")
var MediumScreen = window.matchMedia("(max-width: 1024px) and (orientation: landscape)")
var BigPortraitScreen = window.matchMedia("(max-width: 1024px) and (orientation: portrait)")
var SmallPortraitScreen = window.matchMedia("(max-width: 576px) and (orientation: portrait)")

distanceButton.addEventListener("touchstart", dragStartDist, false);
distanceButton.addEventListener("touchend", dragEndDist, false);
distanceButton.addEventListener("touchmove", dragDist, false);

distanceButton.addEventListener("mousedown", dragStartDist, false);
distanceButton.addEventListener("mouseup", dragEndDist, false);
distanceButton.addEventListener("mousemove", dragDist, false);

function dragStartDist(e) {
    if (e.type === "touchstart") {
        initialX_Distance = e.touches[0].clientX - xOffset_Distance;
        initialY_Distance = e.touches[0].clientY - yOffset_Distance;
    } else {
        initialX_Distance = e.clientX - xOffset_Distance;
        initialY_Distance = e.clientY - yOffset_Distance;
    }

    if (e.target === distanceBG) {
        active_Distance = true;
    }
    }

    function dragEndDist(e) {
      initialX_Distance = currentX_Distance;
      initialY_Distance = currentY_Distance;

      active_Distance = false;
    }

    function dragDist(e) {
      if (active_Distance) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX_Distance = e.touches[0].clientX - initialX_Distance;
          currentY_Distance = e.touches[0].clientY - initialY_Distance;


          if (BigScreen.matches) { 
            if (currentX_Distance <= 340) {
              if (currentX_Distance >= 0) {
                if (modelImgDistance && modelImgDistance.style) {

                  CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)
                  
                  modelImgDistance.style.height = parseInt("50vh", 10) + ModelSizeBigScreen + "vh";
                  modelImgDistance.style.width = parseInt("50vh", 10) + ModelSizeBigScreen + "vh";

                  // console.log("CalculateModelSizeBigScreen", CalculateModelSizeBigScreen);

                  distanceText.textContent = `${Math.round((4 - currentX_Distance/100) * 10) / 10}m`;
  
                  xOffset_Distance = currentX_Distance;
                  yOffset_Distance = currentY_Distance;
  
                  if (currentX_Distance >= 340) {
                    if (currentX_Distance <= 0) {
                      dragEndDistance();
                    }
                  }
                } 
              }
            }
          }
          
  
          if (MediumScreen.matches) { 
            if (currentX_Distance <= 270) {
              if (currentX_Distance >= 0) {
                if (modelImgDistance && modelImgDistance.style) {

                  CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)
                  
                  modelImgDistance.style.height = parseInt("40vh", 10) + ModelSizeBigScreen + "vh";
                  modelImgDistance.style.width = parseInt("40vh", 10) + ModelSizeBigScreen + "vh";

                  distanceText.textContent = `${Math.round((4 - (currentX_Distance + 70)/100) * 10) / 10}m`;

                  // console.log("CalculateModelSizeBigScreen", CalculateModelSizeBigScreen);
  
                  xOffset_Distance = currentX_Distance;
                  yOffset_Distance = currentY_Distance;
  
                  if (currentX_Distance >= 270) {
                    if (currentX_Distance <= 0) {
                      dragEndDistance();
                    }
                  }
                } 
              }
            }
          }
  
          if (BigPortraitScreen.matches) { 
            if (currentX_Distance <= 290) {
              if (currentX_Distance >= 0) {
                if (modelImgDistance && modelImgDistance.style) {

                  CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)
                  
                  modelImgDistance.style.height = parseInt("32vh", 10) + ModelSizeBigScreen + "vh";
                  modelImgDistance.style.width = parseInt("32vh", 10) + ModelSizeBigScreen + "vh";

                  distanceText.textContent = `${Math.round((4 - (currentX_Distance + 50)/100) * 10) / 10}m`;

                  // console.log("CalculateModelSizeBigScreen", CalculateModelSizeBigScreen);
  
                  xOffset_Distance = currentX_Distance;
                  yOffset_Distance = currentY_Distance;
  
                  if (currentX_Distance >= 290) {
                    if (currentX_Distance <= 0) {
                      dragEndDistance();
                    }
                  }
                } 
              }
            }
          }
  
          if (SmallPortraitScreen.matches) { 
            if (currentX_Distance <= 295) {
              if (currentX_Distance >= 0) {
                if (modelImgDistance && modelImgDistance.style) {

                  CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)
                  
                  modelImgDistance.style.height = parseInt("27vh", 10) + ModelSizeBigScreen + "vh";
                  modelImgDistance.style.width = parseInt("27vh", 10) + ModelSizeBigScreen + "vh";

                  distanceText.textContent = `${Math.round((4 - (currentX_Distance + 45)/100) * 10) / 10}m`;

                  // console.log("CalculateModelSizeBigScreen", CalculateModelSizeBigScreen);
  
                  xOffset_Distance = currentX_Distance;
                  yOffset_Distance = currentY_Distance;
  
                  if (currentX_Distance >= 295) {
                    if (currentX_Distance <= 0) {
                      dragEndDistance();
                    }
                  }
                } 
              }
            }
          }

          CalculateBlurAmount(currentX_Distance, currentX_Focal, blurLevel);

          // console.log("BlurAmount: ", blurAmount)

        } else {
          currentX_Distance = e.clientX - initialX_Distance;
          currentY_Distance = e.clientY - initialY_Distance;

          if (BigScreen.matches) { 
            if (currentX_Distance <= 340) {
              if (currentX_Distance >= 0) {
                if (modelImgDistance && modelImgDistance.style) {
                  
                  CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)
                  
                  modelImgDistance.style.height = parseInt("50vh", 10) + ModelSizeBigScreen + "vh";
                  modelImgDistance.style.width = parseInt("50vh", 10) + ModelSizeBigScreen + "vh";

                  distanceText.textContent = `${Math.round((4 - currentX_Distance/100) * 10) / 10}m`;

                  // console.log("CalculateModelSizeBigScreen", CalculateModelSizeBigScreen);
  
                  xOffset_Distance = currentX_Distance;
                  yOffset_Distance = currentY_Distance;
  
                  if (currentX_Distance >= 340) {
                    if (currentX_Distance <= 0) {
                      dragEndDistance();
                    }
                  }
                } 
              }
            }
          }
          
  
          if (MediumScreen.matches) { 
            if (currentX_Distance <= 270) {
              if (currentX_Distance >= 0) {
                if (modelImgDistance && modelImgDistance.style) {

                  CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)
                  
                  modelImgDistance.style.height = parseInt("40vh", 10) + ModelSizeBigScreen + "vh";
                  modelImgDistance.style.width = parseInt("40vh", 10) + ModelSizeBigScreen + "vh";

                  distanceText.textContent = `${Math.round((4 - (currentX_Distance + 70)/100) * 10) / 10}m`;

                  // console.log("CalculateModelSizeBigScreen", CalculateModelSizeBigScreen);
  
                  xOffset_Distance = currentX_Distance;
                  yOffset_Distance = currentY_Distance;
  
                  if (currentX_Distance >= 270) {
                    if (currentX_Distance <= 0) {
                      dragEndDistance();
                    }
                  }
                } 
              }
            }
          }
  
          if (BigPortraitScreen.matches) { 
            if (currentX_Distance <= 290) {
              if (currentX_Distance >= 0) {
                if (modelImgDistance && modelImgDistance.style) {

                  CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)
                  
                  modelImgDistance.style.height = parseInt("32vh", 10) + ModelSizeBigScreen + "vh";
                  modelImgDistance.style.width = parseInt("32vh", 10) + ModelSizeBigScreen + "vh";

                  distanceText.textContent = `${Math.round((4 - (currentX_Distance + 50)/100) * 10) / 10}m`;

                  // console.log("CalculateModelSizeBigScreen", CalculateModelSizeBigScreen);
  
                  xOffset_Distance = currentX_Distance;
                  yOffset_Distance = currentY_Distance;
  
                  if (currentX_Distance >= 290) {
                    if (currentX_Distance <= 0) {
                      dragEndDistance();
                    }
                  }
                } 
              }
            }
          }
  
          if (SmallPortraitScreen.matches) { 
            if (currentX_Distance <= 295) {
              if (currentX_Distance >= 0) {
                if (modelImgDistance && modelImgDistance.style) {

                  CalculateModelSizeBigScreen(currentX_Distance, currentX_Focal)
                  
                  modelImgDistance.style.height = parseInt("27vh", 10) + ModelSizeBigScreen + "vh";
                  modelImgDistance.style.width = parseInt("27vh", 10) + ModelSizeBigScreen + "vh";

                  distanceText.textContent = `${Math.round((4 - (currentX_Distance + 45)/100) * 10) / 10}m`;

                  // console.log("CalculateModelSizeBigScreen", CalculateModelSizeBigScreen);
  
                  xOffset_Distance = currentX_Distance;
                  yOffset_Distance = currentY_Distance;
  
                  if (currentX_Distance >= 295) {
                    if (currentX_Distance <= 0) {
                      dragEndDistance();
                    }
                  }
                } 
              }
            }
          }

          CalculateBlurAmount(currentX_Distance, currentX_Focal, blurLevel);

          // console.log("BlurAmount: ", blurAmount)
        }

        if (BigScreen.matches) {
          if (currentX_Distance <= 340) {
            if (currentX_Distance >= 0) {
              setTranslate(currentX_Distance, 0, distanceBG);
            }
          }
        }
        if (MediumScreen.matches) {
          if (currentX_Distance <= 270) {
            if (currentX_Distance >= 0) {
              setTranslate(currentX_Distance, 0, distanceBG);
            }
          }
        }
        if (BigPortraitScreen.matches) {
          if (currentX_Distance <= 290) {
            if (currentX_Distance >= 0) {
              setTranslate(currentX_Distance, 0, distanceBG);
            }
          }
        }
        if (SmallPortraitScreen.matches) {
          if (currentX_Distance <= 295) {
            if (currentX_Distance >= 0) {
              setTranslate(currentX_Distance, 0, distanceBG);
            }
          }
        }
       
      }
    }

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos/10 + "vh, " + yPos + "vh, 0)";
}
