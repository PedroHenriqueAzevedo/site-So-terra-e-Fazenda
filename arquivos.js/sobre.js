let slideIndex2 = 0;
let autoSlideInterval;
let isManualControl = false;

function startSlideShow() {
    autoSlideInterval = setInterval(showSlides2, 4000); 
}

function stopSlideShow() {
    clearInterval(autoSlideInterval);
}

function showSlides2() {
    if (isManualControl) return; 

    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("dot2");
    
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    
    slideIndex2++;
    if (slideIndex2 > slides2.length) { slideIndex2 = 1; }    
    
    for (let i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    
    slides2[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " active";
}

function currentSlide2(n) {
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("dot2");
    
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    slideIndex2 = n;
    if (slideIndex2 > slides2.length) { slideIndex2 = 1; }    
    if (slideIndex2 < 1) { slideIndex2 = slides2.length; } 
    
    for (let i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    
    slides2[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " active";
    
    stopSlideShow();
    isManualControl = true;
}

document.addEventListener('DOMContentLoaded', function() {
   
    showSlides2();
    startSlideShow();
});
