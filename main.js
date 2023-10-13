const image = document.getElementById("image");
const imageUrls = ["./IMG-20230414-WA0006.jpg", "./WhatsApp Image 2023-09-28 at 16.25.48.jpg"]; // Add your image URLs
let currentIndex = 0;

function changeImage() {
    image.style.opacity = 0;
    setTimeout(() => {
        image.src = imageUrls[currentIndex];
        image.style.opacity = 1;
        currentIndex = (currentIndex + 1) % imageUrls.length;
    }, 2500); // Half of the animation duration (5s)
}

// Change the image initially and start the loop
changeImage();
setInterval(changeImage, 5000); // Change image every 5 seconds