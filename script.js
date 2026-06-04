const images = document.querySelectorAll(".gallery-item");

let currentIndex = 0;

function openLightbox(index){
    currentIndex = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src =
    images[currentIndex].src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
    images[currentIndex].src;
}

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    document.getElementById("lightbox-img").src =
    images[currentIndex].src;
}

function filterImages(category) {

    const images = document.querySelectorAll('.gallery-item');

    images.forEach(function(image) {

        if (category === 'all') {
            image.style.display = 'block';
        }
        else if (image.classList.contains(category)) {
            image.style.display = 'block';
        }
        else {
            image.style.display = 'none';
        }

    });
}