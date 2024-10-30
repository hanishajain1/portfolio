
// Custom desktop cursor
const customCursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    const cursorX = e.clientX - customCursor.offsetWidth / 2;
    const cursorY = e.clientY - customCursor.offsetHeight / 2;
    customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
});

// Preload images
const images = [
    '/public/image/profileBW.png',
    '/public/image/profile.png',
    '/public/image/circle.png',
    '/public/image/bottom-rectangle.png'
];
const preloadImages = (imageArray) => {
    imageArray.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
};

// Splash Screen to Fold
document.addEventListener('DOMContentLoaded', () => {

    preloadImages(images);

    const nav = document.querySelector('.nav')
    const splash = document.getElementById('splash');
    const fold = document.querySelector('.fold');
    const sticky = document.querySelector('.sticky')
    const titleHanisha = document.querySelector('.Hanisha');
    const titleJain = document.querySelector('.Jain');
    const whoAmIDiv = document.querySelector('.WhoAmI');

    sticky.style.display = 'none';
    fold.style.display = 'none';
    nav.style.display = 'none';
    whoAmIDiv.style.display = 'none';


    // Set a timeout for the duration of the splash animation
    setTimeout(() => {
        splash.style.display = 'none';
        fold.style.display = 'flex';
        sticky.style.display = 'block';
        nav.style.display = 'flex';
        fold.style.opacity = '1';
        whoAmIDiv.style.display = 'flex';

        // Trigger animations for titles
        titleHanisha.style.animation = 'titleHanisha 2s forwards';
        titleJain.style.animation = 'titleJain 2s forwards';
        titleHanisha.style.opacity = '1';
        titleJain.style.opacity = '1';

    }, 3300); // Duration must match the splash animation duration
});

const isMobile = window.innerWidth <= 768;
const pageTitle = document.querySelector('.page-title');
if (isMobile) {
    pageTitle.classList.add('mobile');
} else {
    pageTitle.classList.add('desktop');
}

// Profile Picture Box Scroll Interaction
window.addEventListener("scroll", () => {
    const isMobile = window.innerWidth <= 768; // Define mobile screen breakpoint (e.g., 768px)
    const scrollPercentage = Math.min(window.scrollY / window.innerHeight, 1);

    const profileHeader = document.querySelector('.profile-header');
    // Apply mobile or desktop class based on screen size
    if (isMobile) {
        profileHeader.classList.add('mobile');
    } else {
        profileHeader.classList.remove('mobile');
    }

    // Determine properties based on scroll and screen type
    const width = isMobile ? 100 - (scrollPercentage * (100 - 66)) : 120 - (scrollPercentage * (120 - 66));
    const height = isMobile ? 100 - (scrollPercentage * (100 - 66)) : 120 - (scrollPercentage * (120 - 42));
    const borderRadius = 1.5 + (scrollPercentage * (50 - 1.5));

    // Apply the transformations
    profileHeader.style.width = `${width}vw`;
    profileHeader.style.height = `${height}vh`;
    profileHeader.style.borderRadius = `${borderRadius}em`;

    // Center the profile header based on its current size
    const profileHeaderWidth = width * window.innerWidth / 100; // Convert vw to pixels
    const profileHeaderHeight = height * window.innerHeight / 100; // Convert vh to pixels
    const centerX = (window.innerWidth - profileHeaderWidth) / 2; // Calculate left position
    const centerY = (window.innerHeight - profileHeaderHeight) / 2; // Calculate top position

    const titleHanisha = document.querySelector('.Hanisha'); // Ensure this targets .title.Hanisha
    const titleJain = document.querySelector('.Jain');
    const pageTitle = document.querySelector('.page-title');
    // Apply new positiont
    profileHeader.style.position = 'absolute';
    profileHeader.style.left = `${centerX}px`;
    profileHeader.style.top = `${centerY}px`;

    // Adjust background size and position for mobile and desktop
    if (!isMobile && width <= 66 && height <= 42) {
        titleHanisha.classList.add('shrunk');
        titleJain.classList.add('shrunk');
        pageTitle.classList.add('shrunk');
    } else {
        titleHanisha.classList.remove('shrunk');
        titleJain.classList.remove('shrunk');
        pageTitle.classList.remove('shrunk');
    }
});

window.addEventListener('scroll', function () {
    const profileHeader = document.querySelector('.profile-header');
    const scrollPosition = window.scrollY;

    // Adjust the scroll position to the point where you want the class to change
    if (scrollPosition > 100) { // Example threshold of 100px
        profileHeader.classList.add('pill');
    } else {
        profileHeader.classList.remove('pill');
    }
});

// Select all buttons inside the navbar
const buttons = document.querySelectorAll('.nav-button');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});

// Mouse move effect on the profile header
const profileHeader = document.getElementById('profile-header');
const movementStrength = 21; // Max move distance in pixels
const fold = document.querySelector('.fold');

// Get the viewport width and height
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    // Calculate how much the mouse has moved from the center
    const mouseX = (event.clientX / windowWidth) * 2 - 1;
    const mouseY = (event.clientY / windowHeight) * 2 - 1;

    // Move the profile image by 20px based on mouse direction
    const moveX = mouseX * movementStrength;
    const moveY = mouseY * movementStrength;

    // Apply the transform to the profile-header div
    profileHeader.style.transform = `translate(${moveX}px, ${moveY}px)`;
    profileHeader.style.transition = 'transform 0.1s ease-out'; // Smooth transition
});
