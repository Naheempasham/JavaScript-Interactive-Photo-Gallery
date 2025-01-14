// Function to handle the mouseover event
function onImageMouseOver(event) {
    // Get the image element that triggered the event
    const image = event.target;

    // Apply a scaling effect when the mouse hovers over the image
    image.style.transform = 'scale(1.2)';
}

// Function to handle the mouseout event
function onImageMouseOut(event) {
    // Get the image element that triggered the event
    const image = event.target;

    // Reset the scaling effect when the mouse leaves the image
    image.style.transform = 'scale(1)';
}

// Get all the images in the gallery
const images = document.querySelectorAll('.gallery img');

// Add event listeners for mouseover and mouseout events
images.forEach(image => {
    image.addEventListener('mouseover', onImageMouseOver);
    image.addEventListener('mouseout', onImageMouseOut);
});
