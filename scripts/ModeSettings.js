
var currentMode = 1; 

const manual_button = document.getElementById("manual-button");
const av_button = document.getElementById("av-button");
const tv_button = document.getElementById("tv-button");
const program_button = document.getElementById("program-button");

const manual_bg = document.getElementById("manual-bg");
const av_bg = document.getElementById("av-bg");
const tv_bg = document.getElementById("tv-bg");
const program_bg = document.getElementById("program-bg");



manual_button.addEventListener('click', (event) => {
    currentMode = 1; 
    manual_bg.style.backgroundImage = 'url("/img/icons/manual-blue.png")';
    av_bg.style.backgroundImage = 'url("/img/icons/av-grey.png")';
    tv_bg.style.backgroundImage = 'url("/img/icons/tv-grey.png")';
    program_bg.style.backgroundImage = 'url("/img/icons/program-grey.png")';

    ap_slider.style.background = ('#2C00FF')
    ss_slider.style.background = ('#2C00FF')

    ap_SliderDisabled = false;
    ss_SliderDisabled = false;
})

av_button.addEventListener('click', (event) => {
    currentMode = 2; 
    manual_bg.style.backgroundImage = 'url("/img/icons/manual-grey.png")';
    av_bg.style.backgroundImage = 'url("/img/icons/av-blue.png")';
    tv_bg.style.backgroundImage = 'url("/img/icons/tv-grey.png")';
    program_bg.style.backgroundImage = 'url("/img/icons/program-grey.png")';

    ap_slider.style.background = ('#2C00FF')
    ss_slider.style.background = ('#979797')

    ap_SliderDisabled = false;
    ss_SliderDisabled = true;
})

tv_button.addEventListener('click', (event) => {
    currentMode = 3; 
    manual_bg.style.backgroundImage = 'url("/img/icons/manual-grey.png")';
    av_bg.style.backgroundImage = 'url("/img/icons/av-grey.png")';
    tv_bg.style.backgroundImage = 'url("/img/icons/tv-blue.png")';
    program_bg.style.backgroundImage = 'url("/img/icons/program-grey.png")';

    ap_slider.style.background = ('#979797')
    ss_slider.style.background = ('#2C00FF')


    ap_SliderDisabled = true;
    ss_SliderDisabled = false;
})

program_button.addEventListener('click', (event) => {
    currentMode = 4; 
    manual_bg.style.backgroundImage = 'url("/img/icons/manual-grey.png")';
    av_bg.style.backgroundImage = 'url("/img/icons/av-grey.png")';
    tv_bg.style.backgroundImage = 'url("/img/icons/tv-grey.png")';
    program_bg.style.backgroundImage = 'url("/img/icons/program-blue.png")';

    ap_slider.style.background = ('#979797')
    ss_slider.style.background = ('#979797')

    ap_SliderDisabled = true;
    ss_SliderDisabled = true;
})



function closestNumber(numbers, target) {
    return numbers.reduce(function(prev, curr) {
      return (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
    });
  }