var modelDarkFilter = document.getElementById('model');
var bgDarkFilter = document.getElementById('viewfinder')

var brightnessLevel
var darknessLevel = 0;
var exposureLevel = 100;



function darkenFilter(evLevel) {
    switch (evLevel) {
        case 16: 
            darknessLevel = 0
            brightnessLevel = exposureLevel - darknessLevel; 
            console.log('brightnessLevel', brightnessLevel)
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            break;
        case 15:
            darknessLevel = 10
            brightnessLevel = exposureLevel - darknessLevel; 
            console.log('brightnessLevel', brightnessLevel)
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            break;
        case 14:
            darknessLevel = 20
            brightnessLevel = exposureLevel - darknessLevel; 
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            break;
        case 13:
            darknessLevel = 30
            brightnessLevel = exposureLevel - darknessLevel; 
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            break;
        case 12:
            darknessLevel = 40
            brightnessLevel = exposureLevel - darknessLevel; 
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            break;
        case 11:
            darknessLevel = 50
            brightnessLevel = exposureLevel - darknessLevel; 
            modelDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            bgDarkFilter.style.filter = `brightness(${brightnessLevel}%)`;
            break;
    }
}