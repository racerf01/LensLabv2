const iso_text = document.querySelector("#iso-text-right");
const iso_slider = document.querySelector("#iso-slider");
const iso_viewfinder = document.querySelector('#iso-meter');
var iso = 100;

const ap_text = document.querySelector("#ap-text-right");
const ap_slider = document.querySelector("#ap-slider");
const ap_viewfinder = document.querySelector('#aperture-meter');
var apt = 4.5;

const ss_text = document.querySelector("#ss-text-right");
const ss_slider = document.querySelector("#ss-slider");
const ss_viewfinder = document.querySelector('#shutter-meter');
var ssp = 1/3200;


const iso_slider_cont = document.querySelector("#iso-slider-cont");
const ap_slider_cont = document.querySelector("#ap-slider-cont");
const ss_slider_cont = document.querySelector("#ss-slider-cont");


var iso_SliderDisabled = false;
var ap_SliderDisabled = false;
var ss_SliderDisabled = false;


var findApt = 0
var findSS = 0

var blurLevel = 0; 

const isoValues = [25, 50, 100, 125, 200, 250, 400, 500, 640, 800, 1000, 1250, 1600, 2000, 3200, 4000, 6400];
const apValues = [1.4, 1.8, 2.0, 2.8, 3.2, 3.5, 4.0, 4.5, 5.0, 5.6, 6.3, 7.1, 8.0, 9.0, 10, 11, 13, 14, 16, 18, 22];
const ssValues = [3, 2, 1, 1/2, 1/4, 1/5, 1/6, 1/8, 1/10, 1/13, 1/15, 1/20, 1/25, 1/30, 1/40, 1/50, 1/60, 1/80, 1/100, 1/125, 1/160, 1/200, 1/250, 1/320, 1/400, 1/500, 1/640, 1/800, 1/1000, 1/1250, 1/1600, 1/2000, 1/2500, 1/3200, 1/4000, 1/8000];

iso_slider.addEventListener("input", (event) => {
    iso_slider_cont.disabled = false;
    const value = parseInt(iso_slider.value);
    iso = isoValues[value - 1];
    iso_text.textContent = iso;
    iso_viewfinder.textContent = iso;
    const exposureLevel = calculateExposureLevel(iso, apt, ssp);
    console.log(exposureLevel);

    if (ss_SliderDisabled) {
      var findSS = (100 * (apt ** 2)) / (iso * (2 ** evLevel));
      ssp = closestNumber(ssValues, findSS);
      if (ssp >= 1) {
        ss_slider.value = ssValues[ssp - 1];
        ss_text.textContent = `${ssp}''`
        ss_viewfinder.textContent = `${ssp}''`
      } else {
        ss_slider.value = ssValues[ssp - 1];
        ss_text.textContent = `1/${1 / ssp}`;
        ss_viewfinder.textContent = `${1 / ssp}`;
      }
      const exposureLevel = calculateExposureLevel(iso, apt, ssp);
    }

    if (ap_SliderDisabled) {
      var findApt = Math.sqrt((iso * ssp * 2 ** evLevel) / 100)
      console.log('findApt', findApt);
      apt = closestNumber(apValues, findApt);
      console.log('apValues[apt - 1]', apValues[apt - 1])
      ap_slider.value = apValues[apt - 1];
      
      ap_text.textContent = `f/${apt.toFixed(1)}`;
      ap_viewfinder.textContent = apt;

      const blurLevels = {
        1.4: 0,
        1.8: 0.05,
        2: 0.07,
        2.8: 0.12,
        3.2: 0.15,
        3.5: 0.020,
        4.0: 0.25,
        4.5: 0.30,
        5.0: 0.35,
        5.6: 0.40,
        6.3: 0.45,
        7.1: 0.50,
        8.0: 0.55,
        9.0: 0.6,
        10: 0.65,
        11: 0.7,
        13: 0.71,
        14: 0.72,
        16: 0.73,
        18: 0.75,
        22: 0.8
    };


      blurLevel = blurLevels[apt];

      const exposureLevel = calculateExposureLevel(iso, apt, ssp);
      CalculateBlurAmount(currentX_Distance, currentX_Focal, blurLevel);
    }

});

ap_slider.addEventListener("input", (event) => {
  if (ap_SliderDisabled) {
    ap_slider_cont.disabled = true;

  } else {
    ap_slider_cont.disabled = false;
    const value = parseInt(ap_slider.value);
    apt = apValues[value - 1];
    const blurLevels = {
      1.4: 0,
      1.8: 0.05,
      2: 0.07,
      2.8: 0.12,
      3.2: 0.15,
      3.5: 0.020,
      4.0: 0.25,
      4.5: 0.30,
      5.0: 0.35,
      5.6: 0.40,
      6.3: 0.45,
      7.1: 0.50,
      8.0: 0.55,
      9.0: 0.6,
      10: 0.65,
      11: 0.7,
      13: 0.71,
      14: 0.72,
      16: 0.73,
      18: 0.75,
      22: 0.8
  };
    ap_text.textContent = `f/${apt.toFixed(1)}`;
    ap_viewfinder.textContent = apt;
    const exposureLevel = calculateExposureLevel(iso, apt, ssp);
    // console.log(exposureLevel);
    blurLevel = blurLevels[apt];
    CalculateBlurAmount(currentX_Distance, currentX_Focal, blurLevel);
    // console.log("blurLevel", blurLevel)

    if (ss_SliderDisabled) {
      var findSS = (100 * (apt ** 2)) / (iso * (2 ** evLevel));
      ssp = closestNumber(ssValues, findSS);
      if (ssp >= 1) {
        ss_slider.value = ssValues[ssp - 1];
        ss_text.textContent = `${ssp}''`
        ss_viewfinder.textContent = `${ssp}''`
      } else {
        ss_slider.value = ssValues[ssp - 1];
        ss_text.textContent = `1/${1 / ssp}`;
        ss_viewfinder.textContent = `${1 / ssp}`;
      }
      const exposureLevel = calculateExposureLevel(iso, apt, ssp);
    }
  }
  
});

ss_slider.addEventListener("input", (event) => {
  if (ss_SliderDisabled) {
    ss_slider_cont.disabled = true;
    
  } else {
    ss_slider_cont.disabled = false;
    const value = parseInt(ss_slider.value);
    ssp = ssValues[value - 1];
    if (ssp >= 1) {
      ss_text.textContent = `${ssp}''`
      ss_viewfinder.textContent = `${ssp}''`
    } else {
      ss_text.textContent = `1/${1 / ssp}`;
      ss_viewfinder.textContent = `${1 / ssp}`;
    }
    const exposureLevel = calculateExposureLevel(iso, apt, ssp);
    console.log(exposureLevel);


    if (ap_SliderDisabled) {
      var findApt = Math.sqrt((iso * ssp * 2 ** evLevel) / 100)
      console.log('findApt', findApt);
      apt = closestNumber(apValues, findApt);
      console.log('apValues[apt - 1]', apValues[apt - 1])
      ap_slider.value = apValues[apt - 1];
      
      ap_text.textContent = `f/${apt.toFixed(1)}`;
      ap_viewfinder.textContent = apt;

      const blurLevels = {
        1.4: 0,
        1.8: 0.05,
        2: 0.07,
        2.8: 0.12,
        3.2: 0.15,
        3.5: 0.020,
        4.0: 0.25,
        4.5: 0.30,
        5.0: 0.35,
        5.6: 0.40,
        6.3: 0.45,
        7.1: 0.50,
        8.0: 0.55,
        9.0: 0.6,
        10: 0.65,
        11: 0.7,
        13: 0.71,
        14: 0.72,
        16: 0.73,
        18: 0.75,
        22: 0.8
    };


      blurLevel = blurLevels[apt];

      const exposureLevel = calculateExposureLevel(iso, apt, ssp);
      CalculateBlurAmount(currentX_Distance, currentX_Focal, blurLevel);
    }
  }
  
});