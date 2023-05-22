const tutorial1_button = document.getElementById("tutorial-1");
const tutorial2_button = document.getElementById("tutorial-2");
const tutorial3_button = document.getElementById("tutorial-3");
const tutorial4_button = document.getElementById("tutorial-4");
const tutorial5_button = document.getElementById("tutorial-5");
const sanbox_button = document.getElementById("tutorial-sandbox");

const tutorialText = document.getElementById("tutorial-text");
const tutorialHead = document.getElementById("table-header");

var currentTutorial = 1; 


sanbox_button.addEventListener('click', (event) => { 
    currentTutorial = 0; 
}); 


tutorial1_button.addEventListener('click', (event) => { 
    currentTutorial = 1; 

    localStorage.setItem('currentTutorial', currentTutorial)

    console.log(currentTutorial)

    event.target.classList.add('active');
    tutorial2_button.classList.remove('active')
    tutorial3_button.classList.remove('active')
    tutorial4_button.classList.remove('active')
    tutorial5_button.classList.remove('active') 

    tutorialText.textContent = 'Get started with your DSLR camera by diving into this introductory tutorial. Learn about the basic functions, buttons, and features of your camera, and understand how to navigate through the settings and menus. This overview will provide a solid foundation for your photography journey.'
    tutorialHead.textContent = 'Introduction overview'
}); 

tutorial2_button.addEventListener('click', (event) => { 
    currentTutorial = 2; 

    localStorage.setItem('currentTutorial', currentTutorial)

    console.log(currentTutorial)

    event.target.classList.add('active');
    tutorial1_button.classList.remove('active')
    tutorial3_button.classList.remove('active')
    tutorial4_button.classList.remove('active')
    tutorial5_button.classList.remove('active')

    tutorialText.textContent = "Sharpen your photography skills by mastering focus and zoom techniques. In this tutorial, you'll explore the autofocus modes, manual focus, and how to use different focus points effectively. Additionally, you'll learn about zoom lenses and their capabilities, enabling you to capture stunning close-ups and wide-angle shots with precision."
    tutorialHead.textContent = 'Working with focus and zoom'
}); 
tutorial3_button.addEventListener('click', (event) => { 
    currentTutorial = 3; 

    localStorage.setItem('currentTutorial', currentTutorial)

    console.log(currentTutorial)

    event.target.classList.add('active');
    tutorial1_button.classList.remove('active')
    tutorial2_button.classList.remove('active')
    tutorial4_button.classList.remove('active')
    tutorial5_button.classList.remove('active')

    tutorialText.textContent = "Delve into the world of exposure with this tutorial that focuses on the principles of aperture, shutter speed, and ISO. Discover how these elements work together to achieve the perfect exposure for your photographs. With practical examples and interactive exercises, you'll gain a deeper understanding of exposure and enhance your ability to capture well-balanced images."
    tutorialHead.textContent = 'Study the exposition'
}); 
tutorial4_button.addEventListener('click', (event) => { 
    currentTutorial = 4; 

    localStorage.setItem('currentTutorial', currentTutorial)

    console.log(currentTutorial)

    event.target.classList.add('active');
    tutorial1_button.classList.remove('active')
    tutorial2_button.classList.remove('active')
    tutorial3_button.classList.remove('active')
    tutorial5_button.classList.remove('active')

    tutorialText.textContent = "Light plays a crucial role in photography, and understanding different light sources is essential for capturing exceptional images. In this tutorial, you'll explore natural light, artificial light, and various lighting conditions. Learn how to adapt your camera settings to different lighting scenarios, enabling you to create captivating photographs in any situation."
    tutorialHead.textContent = 'Different light sources'
}); 
tutorial5_button.addEventListener('click', (event) => { 
    currentTutorial = 5; 

    localStorage.setItem('currentTutorial', currentTutorial)
    
    console.log(currentTutorial)

    event.target.classList.add('active');
    tutorial1_button.classList.remove('active')
    tutorial2_button.classList.remove('active')
    tutorial3_button.classList.remove('active')
    tutorial4_button.classList.remove('active')

    tutorialText.textContent = "Ready to capture your first photograph? This tutorial will guide you through the process, from setting up your camera to selecting the right exposure settings. You'll learn about composition techniques, framing your subject, and how to apply the knowledge you've gained so far. Capture that special moment and take your first step towards becoming a skilled DSLR photographer."
    tutorialHead.textContent = 'Take your first photo'
}); 
