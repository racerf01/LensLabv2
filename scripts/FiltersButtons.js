var currentFilter = 1; 


const filter1_button = document.getElementById("filter1-button");
const filter2_button = document.getElementById("filter2-button");
const filter3_button = document.getElementById("filter3-button");
const filter4_button = document.getElementById("filter4-button");

const filter1_bg = document.getElementById("filter1-bg");
const filter2_bg = document.getElementById("filter2-bg");
const filter3_bg = document.getElementById("filter3-bg");
const filter4_bg = document.getElementById("filter4-bg");


var contrastLevel = 100
var contrastLevelModel = 100
var saturateLevel = 100
var saturateLevelModel = 100
var hueLevel = 0
var sepiaLevel = 0
var grayscaleLevel = 0


var filterText = document.getElementById("filter-text-right");

var filterBG = document.getElementById('viewfinder')
var filterModel = document.getElementById('model')

filter1_button.addEventListener('click', (event) => {
    currentFilter = 1; 

    contrastLevel = 100
    contrastLevelModel = 100
    saturateLevel = 100
    saturateLevelModel = 100
    hueLevel = 0
    sepiaLevel = 0
    grayscaleLevel = 0


    filterModel.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
    filterBG.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;

    filterText.textContent = 'Natural'

    filter1_bg.style.backgroundImage = 'url("/img/icons/filter-1-blue.png")';
    filter3_bg.style.backgroundImage = 'url("/img/icons/filter-2-grey.png")';
    filter2_bg.style.backgroundImage = 'url("/img/icons/filter-3-grey.png")';
    filter4_bg.style.backgroundImage = 'url("/img/icons/filter-4-grey.png")';

    return contrastLevel, saturateLevel, hueLevel, sepiaLevel, grayscaleLevel, contrastLevelModel, saturateLevelModel
    
})

filter2_button.addEventListener('click', (event) => {
    currentFilter = 2; 

    contrastLevel = 90
    contrastLevelModel = 100
    saturateLevel = 170
    saturateLevelModel = 90
    hueLevel = -10
    sepiaLevel = 0
    grayscaleLevel = 0

    filterText.textContent = 'Film'

    filterModel.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
    filterBG.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;

    filter1_bg.style.backgroundImage = 'url("/img/icons/filter-1-grey.png")';
    filter2_bg.style.backgroundImage = 'url("/img/icons/filter-2-blue.png")';
    filter3_bg.style.backgroundImage = 'url("/img/icons/filter-3-grey.png")';
    filter4_bg.style.backgroundImage = 'url("/img/icons/filter-4-grey.png")';

    return contrastLevel, saturateLevel, hueLevel, sepiaLevel, grayscaleLevel, contrastLevelModel, saturateLevelModel
})

filter3_button.addEventListener('click', (event) => {
    currentFilter = 3; 

    contrastLevel = 110
    contrastLevelModel = 110
    saturateLevel = 130
    saturateLevelModel = 130
    hueLevel = 0
    sepiaLevel = 0
    grayscaleLevel = 0

    filterText.textContent = 'Bright'

    filterModel.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
    filterBG.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
    
    filter1_bg.style.backgroundImage = 'url("/img/icons/filter-1-grey.png")';
    filter2_bg.style.backgroundImage = 'url("/img/icons/filter-2-grey.png")';
    filter3_bg.style.backgroundImage = 'url("/img/icons/filter-3-blue.png")';
    filter4_bg.style.backgroundImage = 'url("/img/icons/filter-4-grey.png")';

    return contrastLevel, saturateLevel, hueLevel, sepiaLevel, grayscaleLevel, contrastLevelModel, saturateLevelModel
})

filter4_button.addEventListener('click', (event) => {
    currentFilter = 4; 

    contrastLevel = 110
    contrastLevelModel = 110
    saturateLevel = 0
    saturateLevelModel = 0
    hueLevel = 0
    sepiaLevel = 30
    grayscaleLevel = 100

    filterText.textContent = 'B&W'

    filterModel.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevelModel}%) saturate(${saturateLevelModel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;
    filterBG.style.filter = `brightness(${brightnessLevel}%) contrast(${contrastLevel}%) saturate(${saturateLevel}%) hue-rotate(${hueLevel}deg) sepia(${sepiaLevel}%) grayscale(${grayscaleLevel}%)`;

    filter1_bg.style.backgroundImage = 'url("/img/icons/filter-1-grey.png")';
    filter2_bg.style.backgroundImage = 'url("/img/icons/filter-2-grey.png")';
    filter3_bg.style.backgroundImage = 'url("/img/icons/filter-3-grey.png")';
    filter4_bg.style.backgroundImage = 'url("/img/icons/filter-4-blue.png")';

    return contrastLevel, saturateLevel, hueLevel, sepiaLevel, grayscaleLevel, contrastLevelModel, saturateLevelModel
})