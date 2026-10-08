/* =========================
   ELEMENTS
========================= */

const ingredients =
document.querySelectorAll(".ingredient");

const cauldronZone =
document.querySelector(".cauldron-zone");

const cauldronLiquid =
document.querySelector(".cauldron-liquid");

const counter =
document.querySelector(".counter");

const discoveryCounter =
document.querySelector(".discovery-counter");

const progressDots =
document.querySelectorAll(".progress-dot");

const brewState =
document.querySelector(".brew-state");

const resultState =
document.querySelector(".result-state");

const sectionHeading =
document.querySelector(".section-heading");

const sectionSubtitle =
document.querySelector(".section-subtitle");

const poisonImage =
document.querySelector(".poison-image");

const poisonDescription =
document.querySelector(".poison-description");

const brewAgainButton =
document.querySelector(".brew-again");


/* =========================
   STATE
========================= */

let selectedIngredients = [];

const discoveredPotions =
new Set();

let draggedIngredient = null;

let originalIngredient = null;

let originalBox = null;

let isDragging = false;


/* =========================
   POISON ART
========================= */

const poisonImages = [
  "assets/poison1.svg",
  "assets/poison2.svg",
  "assets/poison3.svg",
  "assets/poison4.svg"
];


/* =========================
   ALL 20 RECIPES
========================= */

const recipes = [
/* Potion 1*/
  {
    ingredients: [
      "mushroom",
      "frog",
      "eye"
    ],

    name:
    "★ The Forgetting Potion ★",

    description:
    "Makes you forget everything you learned after scrolling far enough to find your ex’s new girlfriend’s makeup videos."
  },


  /* 02
     Mushroom + Frog + Spider
  */

  {
    ingredients: [
      "mushroom",
      "frog",
      "spider"
    ],

    name:
    "★ The Social Battery Potion ★",

    description:
    "Energy recharge to survive the plans you agreed to three weeks ago." 
  },


  /* 03
     Mushroom + Frog + Crystal
  */

  {
    ingredients: [
      "mushroom",
      "frog",
      "crystal"
    ],

    name:
    "★ The Delulu Potion ★",

    description:
    "Temporarily blocks logic so your delulu idea can continue thriving."
  },


  /* 04
     Mushroom + Frog + Skull
  */

  {
    ingredients: [
      "mushroom",
      "frog",
      "skull"
    ],

    name:
    "Neck to Crack potion",

    description:
    "Loosens every joint that started making suspicious sound effects after you turned 30."
  },


  /* 05
     Mushroom + Eye + Spider
  */

  {
    ingredients: [
      "mushroom",
      "eye",
      "spider"
    ],

    name:
    "☾ The Double Text Potion ☾",

    description:
    "Suppresses the urge to send “haha anyway” after six hours of awk silence."
  },


  /* 06
     Mushroom + Eye + Crystal
  */

  {
    ingredients: [
      "mushroom",
      "eye",
      "crystal"
    ],

    name:
    "⋆⁺₊⋆ The Melting Potion⋆⁺₊⋆",

    description:
    "Dissolves everything in your digestive system after eating like it was your last day on Earth. (I need this)"
  },


  /* 07
     Mushroom + Eye + Skull
  */

  {
    ingredients: [
      "mushroom",
      "eye",
      "skull"
    ],

    name:
    "⋆⁺₊⋆The Screenshot potion⋆⁺₊⋆",

    description:
    "Restores the memory of why you took that random screenshot two months ago."
  },


  /* 08
     Mushroom + Spider + Crystal
  */

  {
    ingredients: [
      "mushroom",
      "spider",
      "crystal"
    ],

    name:
    "☆ The Financial Delusion Potion ☆",

    description:
    "Helps you come up with excuses after buying something on sale that you did not need."
  },


  /* 09
     Mushroom + Spider + Skull
  */

  {
    ingredients: [
      "mushroom",
      "spider",
      "skull"
    ],

    name:
    "The Cancelled Plans Potion",

    description:
    "Creates a strong excuse to cancel plans."
  },


  /* 10
     Mushroom + Crystal + Skull
  */

  {
    ingredients: [
      "mushroom",
      "crystal",
      "skull"
    ],

    name:
    "☆ The Little treat Potion ☆",

    description:
    "Will taste like your favorite treat without any calories."
  },


  /* 11
     Frog + Eye + Spider
  */

  {
    ingredients: [
      "frog",
      "eye",
      "spider"
    ],

    name:
    "The Doom Scroll Stopper Potion",

    description:
    "Breaks the doomscrolling spell before “one more video” becomes the next morning regret. "
  },


  /* 12
     Frog + Eye + Crystal
  */

  {
    ingredients: [
      "frog",
      "eye",
      "crystal"
    ],

    name:
    "☆ The algorithm cleanse potion ☆",

    description:
    "Resets your feed after one accidental click convinces the internet you are into Twitch streamers."
  },


  /* 13
     Frog + Eye + Skull
  */

  {
    ingredients: [
      "frog",
      "eye",
      "skull"
    ],

    name:
    "☆ The What Was The Reason Potion ☆",

    description:
    "Restores the thought that dissapeared the second you walked into another room."
  },


  /* 14
     Frog + Spider + Crystal
  */

  {
    ingredients: [
      "frog",
      "spider",
      "crystal"
    ],

    name:
    "☆ The Gym Membership Potion ☆",

    description:
    "Summons enough motivation to finally enter the gym you’ve been paying for since six months ago."
  },


  /* 15
     Frog + Spider + Skull
  */

  {
    ingredients: [
      "frog",
      "spider",
      "skull"
    ],

    name:
    "☆ The Calm Your Tits Potion ☆",

    description:
    "Settles the panic caused by seeing an unexpected incoming phone call."
  },


  /* 16
     Frog + Crystal + Skull
  */

  {
    ingredients: [
      "frog",
      "crystal",
      "skull"
    ],

    name:
    "The Protecting my Peace Potion",

    description:
    "Blocks unnecessary drama temporarily."
  },


  /* 17
     Eye + Spider + Crystal
  */

  {
    ingredients: [
      "eye",
      "spider",
      "crystal"
    ],

    name:
    "★ The Detective Potion ★",

    description:
    "Activates your detective powers to turn a name and a blurry photo into a full on timeline of events and proof of guilt."
  },


  /* 18
     Eye + Spider + Skull
  */

  {
    ingredients: [
      "eye",
      "spider",
      "skull"
    ],

    name:
    "☆ The Scheduling Potion ☆",

    description:
    "Aligns six adult calendars long enough to finally find one Saturday everyone is free. (Yeah this is for you)"
  },


  /* 19
     Eye + Crystal + Skull
  */

  {
    ingredients: [
      "eye",
      "crystal",
      "skull"
    ],

    name:
    "★ The I'm Fine Potion ★",

    description:
    "Blocks the urge to say “I’m fine” when you are clearly preparing to bring it up again later."
  },


  /* 20
     Spider + Crystal + Skull
  */

  {
    ingredients: [
      "spider",
      "crystal",
      "skull"
    ],

    name:
    "★ The Productivity Potion ★",

    description:
    "Gives you temporary hyperfocus abilities to schedule appointments, answer emails, prep dinner and cancel subscriptions."
  }


];


/* =========================
   DRAG LISTENERS
========================= */

ingredients.forEach(
  function(ingredient) {

    ingredient.addEventListener(
      "pointerdown",
      startDrag
    );

  }
);


/* =========================
   START DRAG
========================= */

function startDrag(event) {

  if (isDragging) {
    return;
  }


  if (
    selectedIngredients.length >= 3
  ) {
    return;
  }


  originalIngredient =
  event.currentTarget;


  if (
    originalIngredient.classList.contains(
      "used"
    )
  ) {
    return;
  }


  event.preventDefault();


  isDragging = true;


  originalBox =
  originalIngredient.getBoundingClientRect();


  originalIngredient.classList.add(
    "is-grabbing"
  );


  draggedIngredient =
  originalIngredient.cloneNode(true);


  draggedIngredient.classList.remove(
    "is-grabbing",
    "used"
  );


  draggedIngredient.classList.add(
    "drag-ghost"
  );


  draggedIngredient.style.width =
  `${originalBox.width}px`;


  draggedIngredient.style.height =
  `${originalBox.height}px`;


  document.body.appendChild(
    draggedIngredient
  );


  moveDraggedIngredient(
    event.clientX,
    event.clientY
  );


  document.addEventListener(
    "pointermove",
    dragMove
  );


  document.addEventListener(
    "pointerup",
    endDrag
  );


  document.addEventListener(
    "pointercancel",
    cancelDrag
  );

}


/* =========================
   DRAG MOVE
========================= */

function dragMove(event) {

  if (!isDragging) {
    return;
  }


  event.preventDefault();


  moveDraggedIngredient(
    event.clientX,
    event.clientY
  );

}


/* =========================
   MOVE DRAGGED COPY
========================= */

function moveDraggedIngredient(
  x,
  y
) {

  if (!draggedIngredient) {
    return;
  }


  draggedIngredient.style.left =
  `${x}px`;


  draggedIngredient.style.top =
  `${y}px`;

}


/* =========================
   END DRAG
========================= */

function endDrag(event) {

  if (!isDragging) {
    return;
  }


  removeDragListeners();


  const liquidBox =
  cauldronLiquid.getBoundingClientRect();


  const droppedInside =
    event.clientX >= liquidBox.left &&
    event.clientX <= liquidBox.right &&
    event.clientY >= liquidBox.top &&
    event.clientY <= liquidBox.bottom;


  if (droppedInside) {

    animateDropIntoCauldron();

  } else {

    animateReturnToIngredients();

  }

}


/* =========================
   DROP INTO CAULDRON
========================= */

function animateDropIntoCauldron() {

  if (
    !draggedIngredient ||
    !originalIngredient
  ) {

    cleanupDrag();

    return;

  }


  const ingredientToAdd =
  originalIngredient;


  const liquidBox =
  cauldronLiquid.getBoundingClientRect();


  const liquidCenterX =
  liquidBox.left +
  liquidBox.width / 2;


  const liquidCenterY =
  liquidBox.top +
  liquidBox.height * 0.62;


  draggedIngredient.classList.add(
    "dropping"
  );


  requestAnimationFrame(
    function() {

      draggedIngredient.style.left =
      `${liquidCenterX}px`;


      draggedIngredient.style.top =
      `${liquidCenterY}px`;

    }
  );


  setTimeout(
    function() {

      if (draggedIngredient) {

        draggedIngredient.remove();

      }


      ingredientToAdd.classList.remove(
        "is-grabbing"
      );


      addIngredient(
        ingredientToAdd
      );


      draggedIngredient = null;
      originalIngredient = null;
      originalBox = null;

      isDragging = false;

    },
    290
  );

}


/* =========================
   RETURN MISSED DROP
========================= */

function animateReturnToIngredients() {

  if (
    !draggedIngredient ||
    !originalIngredient ||
    !originalBox
  ) {

    cleanupDrag();

    return;

  }


  const originalCenterX =
  originalBox.left +
  originalBox.width / 2;


  const originalCenterY =
  originalBox.top +
  originalBox.height / 2;


  draggedIngredient.classList.add(
    "returning"
  );


  requestAnimationFrame(
    function() {

      draggedIngredient.style.left =
      `${originalCenterX}px`;


      draggedIngredient.style.top =
      `${originalCenterY}px`;

    }
  );


  setTimeout(
    function() {

      cleanupDrag();

    },
    230
  );

}


/* =========================
   CANCEL DRAG
========================= */

function cancelDrag() {

  removeDragListeners();

  cleanupDrag();

}


/* =========================
   CLEAN DRAG STATE
========================= */

function cleanupDrag() {

  if (draggedIngredient) {

    draggedIngredient.remove();

  }


  if (originalIngredient) {

    originalIngredient.classList.remove(
      "is-grabbing"
    );

  }


  draggedIngredient = null;
  originalIngredient = null;
  originalBox = null;

  isDragging = false;

}


/* =========================
   REMOVE DRAG LISTENERS
========================= */

function removeDragListeners() {

  document.removeEventListener(
    "pointermove",
    dragMove
  );


  document.removeEventListener(
    "pointerup",
    endDrag
  );


  document.removeEventListener(
    "pointercancel",
    cancelDrag
  );

}


/* =========================
   ADD INGREDIENT
========================= */

function addIngredient(
  ingredient
) {

  const ingredientName =
  ingredient.dataset.name;


  if (
    selectedIngredients.includes(
      ingredientName
    )
  ) {
    return;
  }


  selectedIngredients.push(
    ingredientName
  );


  ingredient.classList.add(
    "used"
  );


  updateCounter();


  activateCauldron();


  if (
    selectedIngredients.length === 3
  ) {

    setTimeout(
      showResult,
      1000
    );

  }

}


/* =========================
   INGREDIENT COUNTER
========================= */

function updateCounter() {

  counter.textContent =
  `${selectedIngredients.length}/3 INGREDIENTS`;


  progressDots.forEach(
    function(dot, index) {

      if (
        index <
        selectedIngredients.length
      ) {

        dot.classList.add(
          "filled"
        );

      } else {

        dot.classList.remove(
          "filled"
        );

      }

    }
  );

}


/* =========================
   DISCOVERY COUNTER
========================= */

function updateDiscoveryCounter() {

  discoveryCounter.textContent =
  `You've discovered ${discoveredPotions.size}/20 unique potions`;

}


/* =========================
   CAULDRON EFFECT
========================= */

function activateCauldron() {

  cauldronZone.classList.remove(
    "active"
  );


  void cauldronZone.offsetWidth;


  cauldronZone.classList.add(
    "active"
  );


  setTimeout(
    function() {

      cauldronZone.classList.remove(
        "active"
      );

    },
    1250
  );

}


/* =========================
   FIND RECIPE
========================= */

function findRecipe() {

  const sortedSelection =
  [...selectedIngredients]
  .sort();


  return recipes.find(
    function(recipe) {

      const sortedRecipe =
      [...recipe.ingredients]
      .sort();


      return (
        JSON.stringify(
          sortedRecipe
        )
        ===
        JSON.stringify(
          sortedSelection
        )
      );

    }
  );

}


/* =========================
   SHOW RESULT
========================= */

function showResult() {

  const recipe =
  findRecipe();


  if (!recipe) {

    console.error(
      "No matching recipe:",
      selectedIngredients
    );

    return;

  }


  /* ADD TO DISCOVERED POTIONS */

  discoveredPotions.add(
    recipe.name
  );


  updateDiscoveryCounter();


  /* SELECT BOTTLE ART */

  const recipeIndex =
  recipes.indexOf(
    recipe
  );


  const imageIndex =
  recipeIndex %
  poisonImages.length;


  /* UPDATE RESULT */

  sectionHeading.textContent =
  "YOU CREATED";


  sectionSubtitle.textContent =
  recipe.name;


  poisonDescription.textContent =
  recipe.description;


  poisonImage.src =
  poisonImages[
    imageIndex
  ];


  poisonImage.alt =
  recipe.name;


  /* SWITCH STATES */

  brewState.classList.add(
    "hidden"
  );


  resultState.classList.remove(
    "hidden"
  );

}


/* =========================
   BREW AGAIN
========================= */

brewAgainButton.addEventListener(
  "click",
  resetGame
);


/* =========================
   RESET CURRENT BREW
========================= */

function resetGame() {

  selectedIngredients = [];


  cleanupDrag();


  ingredients.forEach(
    function(ingredient) {

      ingredient.classList.remove(
        "used",
        "is-grabbing"
      );

    }
  );


  updateCounter();


  /*
  IMPORTANT:
  We do NOT clear discoveredPotions.
  */


  sectionHeading.textContent =
  "LET'S BREW SOMETHING";


  sectionSubtitle.textContent =
  "Drag 3 ingredients into the cauldron.";


  resultState.classList.add(
    "hidden"
  );


  brewState.classList.remove(
    "hidden"
  );

}


/* =========================
   INITIALIZE
========================= */

updateCounter();

updateDiscoveryCounter();