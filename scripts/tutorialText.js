const tutorial_head = document.getElementById("tutorial-head-h1");
const tutorial_head2 = document.getElementById("tutorial-head-h2");
const tutorial_text = document.getElementById("tutorial-text-a");

const next_button = document.getElementById("forward-button");
const back_button = document.getElementById("back-button");

const slide_count = document.getElementById("counter");


const light_panel = document.getElementById("lightning-panel")
const distance_panel = document.getElementById("distance-panel")
const focal_panel = document.getElementById("focal-panel")
const mode_panel = document.getElementById("mode-panel") 
const sett_panel = document.getElementById("sett-panel") 
const filter_panel = document.getElementById("filter-panel") 
const shoot_panel = document.getElementById("shoot-panel") 


var currentTutorial = localStorage.getItem('currentTutorial'); 

var count = 1; 

var nextEnabled = true;
var backEnabled = false;

window.addEventListener("load", (event) => {
    if (currentTutorial == 1) {
        tutorial_head.textContent = tutorial1_head1;
        tutorial_head2.textContent = 'Lesson 1'
        tutorial_text.textContent = tutorial1_slide1;
        slide_count.textContent = "1/10"
    }
    if (currentTutorial == 2) {
        tutorial_head.textContent = tutorial2_head1;
        tutorial_head2.textContent = 'Lesson 2'
        tutorial_text.textContent = tutorial2_slide1;
        slide_count.textContent = "2/6"
    }
    if (currentTutorial == 3) {
        tutorial_head.textContent = tutorial3_head1;
        tutorial_head2.textContent = 'Lesson 3'
        tutorial_text.textContent = tutorial3_slide1;
        slide_count.textContent = "1/10"
    }
    if (currentTutorial == 4) {
        tutorial_head.textContent = tutorial4_head1;
        tutorial_head2.textContent = 'Lesson 4'
        tutorial_text.textContent = tutorial4_slide1;
        slide_count.textContent = "1/9"
    }
    if (currentTutorial == 5) {
        tutorial_head.textContent = tutorial5_head1;
        tutorial_head2.textContent = 'Lesson 5'
        tutorial_text.textContent = tutorial5_slide1;
        slide_count.textContent = "1/6"
    }
});


next_button.addEventListener('click', (event) => { 

    if (nextEnabled) {
        if (currentTutorial == 1) { 
            count += 1
            console.log(count)
            if (count == 2) {
                
                tutorial_head.textContent = tutorial1_head2;
                tutorial_text.textContent = tutorial1_slide2;
                slide_count.textContent = "2/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = true
                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial1_head3;
                tutorial_text.textContent = tutorial1_slide3;
                slide_count.textContent = "3/10"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial1_head4;
                tutorial_text.textContent = tutorial1_slide4;
                slide_count.textContent = "4/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "2px solid #2C00FF";
                focal_panel.style.border = "2px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial1_head5;
                tutorial_text.textContent = tutorial1_slide5;
                slide_count.textContent = "5/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "2px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial1_head6;
                tutorial_text.textContent = tutorial1_slide6;
                slide_count.textContent = "6/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 7) {

                tutorial_head.textContent = tutorial1_head7;
                tutorial_text.textContent = tutorial1_slide7;
                slide_count.textContent = "7/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 8) {

                tutorial_head.textContent = tutorial1_head8;
                tutorial_text.textContent = tutorial1_slide8;
                slide_count.textContent = "8/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "2px solid #2C00FF"
            }
            if (count == 9) {

                tutorial_head.textContent = tutorial1_head9;
                tutorial_text.textContent = tutorial1_slide9;
                slide_count.textContent = "9/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 10) {

                tutorial_head.textContent = tutorial1_head10;
                tutorial_text.textContent = tutorial1_slide10;
                slide_count.textContent = "10/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                nextEnabled = false
            }
            
        }
        if (currentTutorial == 2) { 
            count += 1
            console.log(count)
            if (count == 2) {
                
                tutorial_head.textContent = tutorial2_head2;
                tutorial_text.textContent = tutorial2_slide2;
                slide_count.textContent = "2/6"
                backEnabled = true;

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "2px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = true
                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial2_head3;
                tutorial_text.textContent = tutorial2_slide3;
                slide_count.textContent = "3/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "2px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial2_head4;
                tutorial_text.textContent = tutorial2_slide4;
                slide_count.textContent = "4/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "2px solid #2C00FF";
                focal_panel.style.border = "2px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial2_head5;
                tutorial_text.textContent = tutorial2_slide5;
                slide_count.textContent = "5/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial2_head6;
                tutorial_text.textContent = tutorial2_slide6;
                slide_count.textContent = "6/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                nextEnabled = false
            }
        }
        if (currentTutorial == 3) { 
            count += 1
            console.log(count)
            if (count == 2) {
                
                tutorial_head.textContent = tutorial3_head2;
                tutorial_text.textContent = tutorial3_slide2;
                slide_count.textContent = "2/10"
                backEnabled = true;

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = true
                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial3_head3;
                tutorial_text.textContent = tutorial3_slide3;
                slide_count.textContent = "3/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial3_head4;
                tutorial_text.textContent = tutorial3_slide4;
                slide_count.textContent = "4/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial3_head5;
                tutorial_text.textContent = tutorial3_slide5;
                slide_count.textContent = "5/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial3_head6;
                tutorial_text.textContent = tutorial3_slide6;
                slide_count.textContent = "6/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 7) {

                tutorial_head.textContent = tutorial3_head7;
                tutorial_text.textContent = tutorial3_slide7;
                slide_count.textContent = "7/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "2px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 8) {

                tutorial_head.textContent = tutorial3_head8;
                tutorial_text.textContent = tutorial3_slide8;
                slide_count.textContent = "8/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 9) {

                tutorial_head.textContent = tutorial3_head9;
                tutorial_text.textContent = tutorial3_slide9;
                slide_count.textContent = "9/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 10) {

                tutorial_head.textContent = tutorial3_head10;
                tutorial_text.textContent = tutorial3_slide10;
                slide_count.textContent = "10/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                nextEnabled = false
            }
            
        }
        if (currentTutorial == 4) { 
            count += 1
            console.log(count)
            if (count == 2) {
                
                tutorial_head.textContent = tutorial4_head2;
                tutorial_text.textContent = tutorial4_slide2;
                slide_count.textContent = "2/9"
                backEnabled = true;

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = true
                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial4_head3;
                tutorial_text.textContent = tutorial4_slide3;
                slide_count.textContent = "3/9"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial4_head4;
                tutorial_text.textContent = tutorial4_slide4;
                slide_count.textContent = "4/9"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial4_head5;
                tutorial_text.textContent = tutorial4_slide5;
                slide_count.textContent = "5/9"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial4_head6;
                tutorial_text.textContent = tutorial4_slide6;
                slide_count.textContent = "6/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 7) {

                tutorial_head.textContent = tutorial4_head7;
                tutorial_text.textContent = tutorial4_slide7;
                slide_count.textContent = "7/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 8) {

                tutorial_head.textContent = tutorial4_head8;
                tutorial_text.textContent = tutorial4_slide8;
                slide_count.textContent = "8/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 9) {

                tutorial_head.textContent = tutorial4_head9;
                tutorial_text.textContent = tutorial4_slide9;
                slide_count.textContent = "9/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                nextEnabled = false
            }
            
        }
        if (currentTutorial == 5) { 
            count += 1
            console.log(count)
            if (count == 2) {
                
                tutorial_head.textContent = tutorial5_head2;
                tutorial_text.textContent = tutorial5_slide2;
                slide_count.textContent = "2/6"
                backEnabled = true;

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "2px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = true
                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial5_head3;
                tutorial_text.textContent = tutorial5_slide3;
                slide_count.textContent = "3/6"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "3px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial5_head4;
                tutorial_text.textContent = tutorial5_slide4;
                slide_count.textContent = "4/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "2px solid #2C00FF";
                focal_panel.style.border = "2px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
                shoot_panel.style.border = "2px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial5_head5;
                tutorial_text.textContent = tutorial5_slide5;
                slide_count.textContent = "5/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
                shoot_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial5_head6;
                tutorial_text.textContent = tutorial5_slide6;
                slide_count.textContent = "6/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
                shoot_panel.style.border = "0px solid #2C00FF"

                nextEnabled = false
            }
            
        }
    }
    
    
    
});

back_button.addEventListener('click', (event) => { 

    if (backEnabled) {
        if (currentTutorial == 1) { 
            count -= 1
            console.log(count)
            if (count == 1) {
                
                tutorial_head.textContent = tutorial1_head1;
                tutorial_text.textContent = tutorial1_slide1;
                slide_count.textContent = "1/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = false;

                
            }
            if (count == 2) {
                
                tutorial_head.textContent = tutorial1_head2;
                tutorial_text.textContent = tutorial1_slide2;
                slide_count.textContent = "2/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial1_head3;
                tutorial_text.textContent = tutorial1_slide3;
                slide_count.textContent = "3/10"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial1_head4;
                tutorial_text.textContent = tutorial1_slide4;
                slide_count.textContent = "4/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "2px solid #2C00FF";
                focal_panel.style.border = "2px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial1_head5;
                tutorial_text.textContent = tutorial1_slide5;
                slide_count.textContent = "5/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "2px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial1_head6;
                tutorial_text.textContent = tutorial1_slide6;
                slide_count.textContent = "6/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 7) {

                tutorial_head.textContent = tutorial1_head7;
                tutorial_text.textContent = tutorial1_slide7;
                slide_count.textContent = "7/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 8) {

                tutorial_head.textContent = tutorial1_head8;
                tutorial_text.textContent = tutorial1_slide8;
                slide_count.textContent = "8/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "2px solid #2C00FF"
            }
            if (count == 9) {

                tutorial_head.textContent = tutorial1_head9;
                tutorial_text.textContent = tutorial1_slide9;
                slide_count.textContent = "9/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                nextEnabled = true
            }
            if (count == 10) {

                tutorial_head.textContent = tutorial1_head10;
                tutorial_text.textContent = tutorial1_slide10;
                slide_count.textContent = "10/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
                
            }
        }
        if (currentTutorial == 2) { 
            count -= 1
            console.log(count)
            if (count == 1) {
                
                tutorial_head.textContent = tutorial2_head1;
                tutorial_text.textContent = tutorial2_slide1;
                slide_count.textContent = "1/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = false;

                
            }
            if (count == 2) {
                
                tutorial_head.textContent = tutorial2_head2;
                tutorial_text.textContent = tutorial2_slide2;
                slide_count.textContent = "2/6"
                backEnabled = true;

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "2px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = true
                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial2_head3;
                tutorial_text.textContent = tutorial2_slide3;
                slide_count.textContent = "3/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "2px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial2_head4;
                tutorial_text.textContent = tutorial2_slide4;
                slide_count.textContent = "4/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "2px solid #2C00FF";
                focal_panel.style.border = "2px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial2_head5;
                tutorial_text.textContent = tutorial2_slide5;
                slide_count.textContent = "5/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                nextEnabled = true
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial2_head6;
                tutorial_text.textContent = tutorial2_slide6;
                slide_count.textContent = "6/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                nextEnabled = false
            }
        }
        if (currentTutorial == 3) { 
            count -= 1
            console.log(count)
            if (count == 1) {
                
                tutorial_head.textContent = tutorial3_head1;
                tutorial_text.textContent = tutorial3_slide1;
                slide_count.textContent = "1/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = false;

                
            }
            if (count == 2) {
                
                tutorial_head.textContent = tutorial3_head2;
                tutorial_text.textContent = tutorial3_slide2;
                slide_count.textContent = "2/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial3_head3;
                tutorial_text.textContent = tutorial3_slide3;
                slide_count.textContent = "3/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial3_head4;
                tutorial_text.textContent = tutorial3_slide4;
                slide_count.textContent = "4/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "2px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial3_head5;
                tutorial_text.textContent = tutorial3_slide5;
                slide_count.textContent = "5/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial3_head6;
                tutorial_text.textContent = tutorial3_slide6;
                slide_count.textContent = "6/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 7) {

                tutorial_head.textContent = tutorial3_head7;
                tutorial_text.textContent = tutorial3_slide7;
                slide_count.textContent = "7/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "2px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 8) {

                tutorial_head.textContent = tutorial3_head8;
                tutorial_text.textContent = tutorial3_slide8;
                slide_count.textContent = "8/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 9) {

                tutorial_head.textContent = tutorial3_head9;
                tutorial_text.textContent = tutorial3_slide9;
                slide_count.textContent = "9/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                nextEnabled = true
            }
            if (count == 10) {

                tutorial_head.textContent = tutorial3_head10;
                tutorial_text.textContent = tutorial3_slide10;
                slide_count.textContent = "10/10"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
                
            }
        }
        if (currentTutorial == 4) { 
            count -= 1
            console.log(count)
            if (count == 1) {
                
                tutorial_head.textContent = tutorial4_head1;
                tutorial_text.textContent = tutorial4_slide1;
                slide_count.textContent = "1/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = false;

                
            }
            if (count == 2) {
                
                tutorial_head.textContent = tutorial4_head2;
                tutorial_text.textContent = tutorial4_slide2;
                slide_count.textContent = "2/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial4_head3;
                tutorial_text.textContent = tutorial4_slide3;
                slide_count.textContent = "3/9"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial4_head4;
                tutorial_text.textContent = tutorial4_slide4;
                slide_count.textContent = "4/9"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial4_head5;
                tutorial_text.textContent = tutorial4_slide5;
                slide_count.textContent = "5/9"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial4_head6;
                tutorial_text.textContent = tutorial4_slide6;
                slide_count.textContent = "6/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 7) {

                tutorial_head.textContent = tutorial4_head7;
                tutorial_text.textContent = tutorial4_slide7;
                slide_count.textContent = "7/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 8) {

                tutorial_head.textContent = tutorial4_head8;
                tutorial_text.textContent = tutorial4_slide8;
                slide_count.textContent = "8/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                nextEnabled = true
            }
            if (count == 9) {

                tutorial_head.textContent = tutorial4_head9;
                tutorial_text.textContent = tutorial4_slide9;
                slide_count.textContent = "9/9"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                
            }
        }
        if (currentTutorial == 5) { 
            count -= 1
            console.log(count)
            if (count == 1) {
                
                tutorial_head.textContent = tutorial5_head1;
                tutorial_text.textContent = tutorial5_slide1;
                slide_count.textContent = "1/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                backEnabled = false;

                
            }
            if (count == 2) {
                
                tutorial_head.textContent = tutorial5_head2;
                tutorial_text.textContent = tutorial5_slide2;
                slide_count.textContent = "2/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "2px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"

                
            } 
            if (count == 3) {
                
                tutorial_head.textContent = tutorial5_head3;
                tutorial_text.textContent = tutorial5_slide3;
                slide_count.textContent = "3/6"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
                shoot_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 4) {
                
                tutorial_head.textContent = tutorial5_head4;
                tutorial_text.textContent = tutorial5_slide4;
                slide_count.textContent = "4/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "2px solid #2C00FF";
                focal_panel.style.border = "2px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
                shoot_panel.style.border = "2px solid #2C00FF"
            }
            if (count == 5) {

                tutorial_head.textContent = tutorial5_head5;
                tutorial_text.textContent = tutorial5_slide5;
                slide_count.textContent = "5/6"

                light_panel.style.border = "2px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "2px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
                shoot_panel.style.border = "0px solid #2C00FF"
            }
            if (count == 6) {

                tutorial_head.textContent = tutorial5_head6;
                tutorial_text.textContent = tutorial5_slide6;
                slide_count.textContent = "6/6"

                light_panel.style.border = "0px solid #2C00FF";
                distance_panel.style.border = "0px solid #2C00FF";
                focal_panel.style.border = "0px solid #2C00FF"
                mode_panel.style.border = "0px solid #2C00FF"
                sett_panel.style.border = "0px solid #2C00FF"
                filter_panel.style.border = "0px solid #2C00FF"
            }
        }
    }
    
    
});