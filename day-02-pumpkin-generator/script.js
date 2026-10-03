const counter = document.querySelector(".counter");
const discovered = new Set();

const button = document.querySelector(".generate-button");

const eyes = document.querySelector(".pumpkin-eyes");
const mouth = document.querySelector(".pumpkin-mouth");
const body = document.querySelector(".pumpkin-body");
const stem = document.querySelector(".pumpkin-stem");


const eyeOptions = [
    "assets/eyes1.svg",
    "assets/eyes2.svg",
    "assets/eyes3.svg",
    "assets/eyes4.svg",
];

const mouthOptions = [
    "assets/mouth1.svg",
    "assets/mouth2.svg",
    "assets/mouth3.svg",
    "assets/mouth4.svg",
];

const bodyOptions = [
    "assets/body1.svg",
    "assets/body2.svg",
    "assets/body3.svg",
    "assets/body4.svg",
]

const stemOptions = [
    "assets/stem1.svg",
    "assets/stem2.svg",
    "assets/stem3.svg",
    "assets/stem4.svg",
]

const total =
    eyeOptions.length *
    mouthOptions.length *
    bodyOptions.length *
    stemOptions.length;

button.addEventListener("click", function() {
    const randomEye=
    Math.floor(Math.random() * eyeOptions.length);
    eyes.src = eyeOptions [randomEye];

    const randomMouth=
    Math.floor(Math.random() * mouthOptions.length);
    mouth.src = mouthOptions [randomMouth];

    const randomBody=
    Math.floor(Math.random() * bodyOptions.length);
    body.src = bodyOptions [randomBody];

    const randomStem=
    Math.floor(Math.random() * stemOptions.length);
    stem.src = stemOptions [randomStem];


    const combo = `${randomEye}-${randomMouth}-${randomBody}-${randomStem}`;
    discovered.add(combo);
    counter.textContent =
  `You discovered ${discovered.size} pumpkins out ${total}`;
});



