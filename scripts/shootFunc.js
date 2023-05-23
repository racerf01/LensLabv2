const shoot_button = document.getElementById('shoot-button')
const shoot_cont = document.getElementById('shoot-overlay')

const exposureText = document.getElementById('exposure-text-result')
const apertureText = document.getElementById('aperture-text-result')
const shutterText = document.getElementById('shutter-text-result')
const isoText = document.getElementById('iso-text-result')

const headText = document.getElementById('shoot-cont-head')

const closeButton = document.getElementById('close-button')

window.addEventListener("load", (event) => { 
    shoot_cont.style.display = "none"; 
});


closeButton.addEventListener('click', (event) => {
    shoot_cont.style.display = "none"; 
})

shoot_button.addEventListener('click', (event) => { 
    takeShot(); 

    shoot_cont.style.display = "initial"; 
    const ev = Math.log2((100 * (apt ** 2)) / (iso * ssp))


    if (Math.ceil(ev) === evLevel) {
        headText.textContent = 'Good Job!'
        exposureText.textContent = 'Excellent photo! Each setting is perfectly matched'
        apertureText.textContent = ''
        shutterText.textContent = ''
        isoText.textContent = ''

        if (ssp >= 1/4) {
            headText.textContent = 'Good Job! But...'
            exposureText.textContent = 'Excellent photo! Some settings are set too much, but this is not a very big problem'
            shutterText.textContent = 'The shutter speed is too slow. Increase it to avoid camera shake or motion blur.'
        } else if (ssp <= 1/4000) {
            headText.textContent = 'Good Job! But...'
            exposureText.textContent = 'Excellent photo! Some settings are set too much, but this is not a very big problem'
            shutterText.textContent = 'The shutter speed is too fast. Decrease it to allow more light. '
        }

        if (iso >= 800 ) {
            headText.textContent = 'Good Job! But...'
            isoText.textContent = 'The ISO is too high. Decrease it to reduce the noise'
        } else if (iso <= 50 ) {
            headText.textContent = 'Good Job! But...'
            isoText.textContent = 'The ISO is too low. Increase it for more sensitivity to light.'
        }
    } else if (Math.ceil(ev) < evLevel)  {
        headText.textContent = 'Something is wrong...'
        exposureText.textContent = 'The picture is too bright! You should change something in the settings'

        console.log(apt, iso, ssp)

        if (apt <= 2.8) {
            apertureText.textContent = 'The aperture is too wide. Consider closing it for a larger depth of field.'
        } else if (apt >= 11) {
            apertureText.textContent = 'The aperture is too small. Consider opening it for more light.'
        }

        if (ssp >= 1/25) {
            shutterText.textContent = 'The shutter speed is too slow. Increase it to avoid camera shake or motion blur.'
        } else if (ssp <= 1/1000) {
            shutterText.textContent = 'The shutter speed is too fast. Decrease it to allow more light.'
        }

        if (iso >= 800 ) {
            isoText.textContent = 'The ISO is too high. Decrease it to reduce noise or amount of light'
        } else if (iso <= 100 ) {
            isoText.textContent = 'The ISO is too low. Increase it for more sensitivity to light.'
        }
    } else if (Math.ceil(ev) > evLevel) {
        headText.textContent = 'Something is wrong...'
        exposureText.textContent = 'The picture is too dark! You should change something in the settings'
        if (apt <= 2.8) {
            apertureText.textContent = 'The aperture is too wide. Consider closing it for a larger depth of field.'
        } else if (apt >= 11) {
            apertureText.textContent = 'The aperture is too small. Consider opening it for more light.'
        }

        if (ssp >= 1/25) {
            shutterText.textContent = 'The shutter speed is too slow. Increase it to avoid camera shake or motion blur.'
        } else if (ssp <= 1/1000) {
            shutterText.textContent = 'The shutter speed is too fast. Decrease it to allow more light.'
        }

        if (iso >= 800 ) {
            isoText.textContent = 'The ISO is too high. Decrease it to reduce noise or amount of light'
        } else if (iso <= 100 ) {
            isoText.textContent = 'The ISO is too low. Increase it for more sensitivity to light.'
        }
    }

}); 