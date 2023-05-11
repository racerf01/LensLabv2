var evLevel = 16;


const dim_indoors_button = document.getElementById("dim-indoors-button");
const bright_indoors_button = document.getElementById("bright-indoors-button");
const overcast_button = document.getElementById("overcast-button");
const partly_cloudy_button = document.getElementById("partly-cloudy-button");
const mostly_sunny_button = document.getElementById("mostly-sunny-button");
const sunny_button = document.getElementById("sunny-button");

const dim_indoors_bg = document.getElementById("dim-indoors-bg");
const bright_indoors_bg = document.getElementById("bright-indoors-bg");
const overcast_bg = document.getElementById("overcast-bg");
const partly_cloudy_bg = document.getElementById("partly-cloudy-bg");
const mostly_sunny_bg = document.getElementById("mostly-sunny-bg");
const sunny_bg = document.getElementById("sunny-bg");

const lightningText = document.getElementById('lightning-text-right')

dim_indoors_button.addEventListener('click', (event) => {
    evLevel = 11; 
    dim_indoors_bg.style.backgroundImage = 'url("/img/icons/dim_indoors_blue.png")';
    bright_indoors_bg.style.backgroundImage = 'url("/img/icons/bright_indoors_grey.png")';
    overcast_bg.style.backgroundImage = 'url("/img/icons/overcast_grey.png")';
    partly_cloudy_bg.style.backgroundImage = 'url("/img/icons/partly_cloudy_grey.png")';
    mostly_sunny_bg.style.backgroundImage = 'url("/img/icons/mostly_sunny_grey.png")';
    sunny_bg.style.backgroundImage = 'url("/img/icons/sunny_grey.png")';

    lightningText.textContent = 'Dim Indoors';

    calculateExposureLevel(iso, apt, ssp)
    darkenFilter(evLevel);
})

bright_indoors_button.addEventListener('click', (event) => {
    evLevel = 12; 
    dim_indoors_bg.style.backgroundImage = 'url("/img/icons/dim_indoors_grey.png")';
    bright_indoors_bg.style.backgroundImage = 'url("/img/icons/bright_indoors_blue.png")';
    overcast_bg.style.backgroundImage = 'url("/img/icons/overcast_grey.png")';
    partly_cloudy_bg.style.backgroundImage = 'url("/img/icons/partly_cloudy_grey.png")';
    mostly_sunny_bg.style.backgroundImage = 'url("/img/icons/mostly_sunny_grey.png")';
    sunny_bg.style.backgroundImage = 'url("/img/icons/sunny_grey.png")';

    lightningText.textContent = 'Bright Indoors';

    calculateExposureLevel(iso, apt, ssp)
    darkenFilter(evLevel);
})

overcast_button.addEventListener('click', (event) => {
    evLevel = 13; 
    dim_indoors_bg.style.backgroundImage = 'url("/img/icons/dim_indoors_grey.png")';
    bright_indoors_bg.style.backgroundImage = 'url("/img/icons/bright_indoors_grey.png")';
    overcast_bg.style.backgroundImage = 'url("/img/icons/overcast_blue.png")';
    partly_cloudy_bg.style.backgroundImage = 'url("/img/icons/partly_cloudy_grey.png")';
    mostly_sunny_bg.style.backgroundImage = 'url("/img/icons/mostly_sunny_grey.png")';
    sunny_bg.style.backgroundImage = 'url("/img/icons/sunny_grey.png")';

    lightningText.textContent = 'Overcast';

    calculateExposureLevel(iso, apt, ssp)
    darkenFilter(evLevel);
})

partly_cloudy_button.addEventListener('click', (event) => {
    evLevel = 14; 
    dim_indoors_bg.style.backgroundImage = 'url("/img/icons/dim_indoors_grey.png")';
    bright_indoors_bg.style.backgroundImage = 'url("/img/icons/bright_indoors_grey.png")';
    overcast_bg.style.backgroundImage = 'url("/img/icons/overcast_grey.png")';
    partly_cloudy_bg.style.backgroundImage = 'url("/img/icons/partly_cloudy_blue.png")';
    mostly_sunny_bg.style.backgroundImage = 'url("/img/icons/mostly_sunny_grey.png")';
    sunny_bg.style.backgroundImage = 'url("/img/icons/sunny_grey.png")';

    lightningText.textContent = 'Partly Cloudy';

    calculateExposureLevel(iso, apt, ssp)
    darkenFilter(evLevel);
})

mostly_sunny_button.addEventListener('click', (event) => {
    evLevel = 15; 
    dim_indoors_bg.style.backgroundImage = 'url("/img/icons/dim_indoors_grey.png")';
    bright_indoors_bg.style.backgroundImage = 'url("/img/icons/bright_indoors_grey.png")';
    overcast_bg.style.backgroundImage = 'url("/img/icons/overcast_grey.png")';
    partly_cloudy_bg.style.backgroundImage = 'url("/img/icons/partly_cloudy_grey.png")';
    mostly_sunny_bg.style.backgroundImage = 'url("/img/icons/mostly_sunny_blue.png")';
    sunny_bg.style.backgroundImage = 'url("/img/icons/sunny_grey.png")';

    lightningText.textContent = 'Mostly Sunny';

    calculateExposureLevel(iso, apt, ssp)
    darkenFilter(evLevel);
})

sunny_button.addEventListener('click', (event) => {
    evLevel = 16; 
    dim_indoors_bg.style.backgroundImage = 'url("/img/icons/dim_indoors_grey.png")';
    bright_indoors_bg.style.backgroundImage = 'url("/img/icons/bright_indoors_grey.png")';
    overcast_bg.style.backgroundImage = 'url("/img/icons/overcast_grey.png")';
    partly_cloudy_bg.style.backgroundImage = 'url("/img/icons/partly_cloudy_grey.png")';
    mostly_sunny_bg.style.backgroundImage = 'url("/img/icons/mostly_sunny_grey.png")';
    sunny_bg.style.backgroundImage = 'url("/img/icons/sunny_blue.png")';

    lightningText.textContent = 'Sunny';

    calculateExposureLevel(iso, apt, ssp)
    darkenFilter(evLevel);
})


