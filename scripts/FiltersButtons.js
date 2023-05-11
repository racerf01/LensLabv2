var currentFilter = 1; 


const filter1_button = document.getElementById("filter1-button");
const filter2_button = document.getElementById("filter2-button");
const filter3_button = document.getElementById("filter3-button");
const filter4_button = document.getElementById("filter4-button");

const filter1_bg = document.getElementById("filter1-bg");
const filter2_bg = document.getElementById("filter2-bg");
const filter3_bg = document.getElementById("filter3-bg");
const filter4_bg = document.getElementById("filter4-bg");



var filterText = document.getElementById("filter-text-right");

var filterBG = document.getElementById('viewfinder')
var filterModel = document.getElementById('model')

filter1_button.addEventListener('click', (event) => {
    currentFilter = 1; 

    filterModel.style.filter = '';
    filterBG.style.filter = '';

    filterText.textContent = 'Natural'

    filter1_bg.style.backgroundImage = 'url("/img/icons/filter-1-blue.png")';
    filter3_bg.style.backgroundImage = 'url("/img/icons/filter-2-grey.png")';
    filter2_bg.style.backgroundImage = 'url("/img/icons/filter-3-grey.png")';
    filter4_bg.style.backgroundImage = 'url("/img/icons/filter-4-grey.png")';
})

filter2_button.addEventListener('click', (event) => {
    currentFilter = 2; 

    filterText.textContent = 'Film'

    filterModel.style.filter = 'contrast(90%) brightness(110%) saturate(150%) hue-rotate(-10deg)';
    filterBG.style.filter = 'contrast(100%) brightness(100%) saturate(100%) hue-rotate(-10deg)';

    filter1_bg.style.backgroundImage = 'url("/img/icons/filter-1-grey.png")';
    filter2_bg.style.backgroundImage = 'url("/img/icons/filter-2-blue.png")';
    filter3_bg.style.backgroundImage = 'url("/img/icons/filter-3-grey.png")';
    filter4_bg.style.backgroundImage = 'url("/img/icons/filter-4-grey.png")';
})

filter3_button.addEventListener('click', (event) => {
    currentFilter = 3; 

    filterText.textContent = 'Bright'

    filterModel.style.filter = 'contrast(110%) brightness(110%) saturate(130%)';
    filterBG.style.filter = 'contrast(100%) brightness(100%) saturate(130%)';

    filter1_bg.style.backgroundImage = 'url("/img/icons/filter-1-grey.png")';
    filter2_bg.style.backgroundImage = 'url("/img/icons/filter-2-grey.png")';
    filter3_bg.style.backgroundImage = 'url("/img/icons/filter-3-blue.png")';
    filter4_bg.style.backgroundImage = 'url("/img/icons/filter-4-grey.png")';
})

filter4_button.addEventListener('click', (event) => {
    currentFilter = 4; 

    filterText.textContent = 'B&W'

    filterModel.style.filter = 'contrast(110%) brightness(110%) sepia(30%) grayscale(100%)';
    filterBG.style.filter = 'contrast(110%) brightness(110%) sepia(30%) grayscale(100%)';

    filter1_bg.style.backgroundImage = 'url("/img/icons/filter-1-grey.png")';
    filter2_bg.style.backgroundImage = 'url("/img/icons/filter-2-grey.png")';
    filter3_bg.style.backgroundImage = 'url("/img/icons/filter-3-grey.png")';
    filter4_bg.style.backgroundImage = 'url("/img/icons/filter-4-blue.png")';
})