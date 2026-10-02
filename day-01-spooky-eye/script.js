const eye = document.querySelector(".eye");
const iris = document.querySelector(".iris");

document.addEventListener
("mousemove", function(event)
 {
    const eyeBox = eye.getBoundingClientRect();

    const eyeCenterX = eyeBox.left + eyeBox.width / 2;
    const eyeCenterY = eyeBox.top + eyeBox.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2
    (
        mouseY - eyeCenterY,
        mouseX - eyeCenterX
    );

    const distance = 30;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    iris.style.transform=
    `translate(${moveX}px, ${moveY}px)`;


});