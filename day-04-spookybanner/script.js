const ghost1 = document.querySelector(".ghost-1");
const ghost2 = document.querySelector(".ghost-2");
const ghost3 = document.querySelector(".ghost-3");
const ghost4 = document.querySelector(".ghost-4");
const ghost5 = document.querySelector(".ghost-5");

const counter = document.querySelector(".counter");
const starburst = document.querySelector(".starburst");

const endCard = document.querySelector(".end-card");

let caught = 0;


function catchGhost(ghost) {

    const ghostLeft = ghost.offsetLeft;
    const ghostTop = ghost.offsetTop;

    starburst.style.left = ghostLeft + "px";
    starburst.style.top = ghostTop + "px";

    starburst.classList.add("active");

    ghost.style.display = "none";

    caught++;

    counter.textContent = caught + " out of 5";

    setTimeout(function() {
        starburst.classList.remove("active");
    }, 400);


    if (caught === 3) {

        ghost4.style.display = "block";
        ghost5.style.display = "block";

        ghost4.style.animation = "ghostFloat4 2.2s linear infinite";
        ghost5.style.animation = "ghostFloat5 2.2s linear infinite";
    }

    if (caught === 5) {

    setTimeout(function() {


        document.querySelector(".banner-subtitle").style.display = "none";
        counter.style.display = "none";

        endCard.classList.add("active");

    }, 400);

}
}


ghost1.addEventListener("click", function() {

    catchGhost(ghost1);

    ghost2.style.display = "block";
    ghost3.style.display = "block";

    ghost2.style.animation = "ghostFloat2 3s linear infinite";
    ghost3.style.animation = "ghostFloat3 3s linear infinite";
});


ghost2.addEventListener("click", function() {
    catchGhost(ghost2);
});


ghost3.addEventListener("click", function() {
    catchGhost(ghost3);
});


ghost4.addEventListener("click", function() {
    catchGhost(ghost4);
});


ghost5.addEventListener("click", function() {
    catchGhost(ghost5);
});