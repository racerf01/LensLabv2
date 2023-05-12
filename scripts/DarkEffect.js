var modelDarkFilter = document.getElementById('model');
var bgDarkFilter = document.getElementById('viewfinder')


var darknessLevel = 0;
var exposureLevel = 100;

var brightnessLevel = 100; 

function darkenFilter(evLevel) {
    switch (evLevel) {
        case 16: 
            darknessLevel = 0
            brightnessLevel = exposureLevel - darknessLevel; 
            console.log('brightnessLevel', brightnessLevel)
            console.log("contrast", contrastLevel)
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            break;
        case 15:
            darknessLevel = 10
            brightnessLevel = exposureLevel - darknessLevel; 
            console.log('brightnessLevel', brightnessLevel)
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            break;
        case 14:
            darknessLevel = 20
            brightnessLevel = exposureLevel - darknessLevel; 
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            break;
        case 13:
            darknessLevel = 30
            brightnessLevel = exposureLevel - darknessLevel; 
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            break;
        case 12:
            darknessLevel = 40
            brightnessLevel = exposureLevel - darknessLevel; 
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            break;
        case 11:
            darknessLevel = 50
            brightnessLevel = exposureLevel - darknessLevel; 
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
            break;
    }
}