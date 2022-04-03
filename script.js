var navMenuAnchorTags= document.querySelectorAll('.nav-menu a');

// console.log(navMenuAnchorTags);

for(var i=0 ; i < navMenuAnchorTags.length ; i++){

    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
       
        // console.log(targetSectionID);
      
        var targetSection = document.getElementById(targetSectionID);
      
        console.log(targetSection);
       
        var interval = setInterval(function(){
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,80);
        },20);
});
    }


// |||****ANOTHER APPROACH****|||


    // var navMenuAnchorTags= document.querySelectorAll('.nav-menu a');
    // var interval;
// console.log(navMenuAnchorTags);

// for(var i=0 ; i < navMenuAnchorTags.length ; i++){

//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
       
        // console.log(targetSectionID);
      
        // var targetSection = document.getElementById(targetSectionID);
      
        // console.log(targetSection);
       
    //   **this line can also be written** -->>>interval = setInterval(scrollVertically,10,targetSection);

    //     interval= setInterval(function(){
    //         scrollVertically(targetSection);
    //           },10);  
    // });
    // }

    // function scrollVertically(targetSection){
    // var targetSectionCoordinates = targetSection.getBoundingClientRect();
    //         if(targetSectionCoordinates.top<=0){
    //             clearInterval(interval);
    //             return;
    //         }
    //         window.scrollBy(0,80);
    //     }



// ****SKILLS PROGRESS ANIMATION****

// Handle scroll event on window
// Check that skills section container is visible or not
// ensure that initial width of colored skill divs is zero -> initialised/reset to - width value
// Start aniamtion on every skill -> increase skill width from 0 to skill level at regular intervals
// Store skill level -> html with the help of data attribute

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}
window.addEventListener("scroll", checkScroll);

