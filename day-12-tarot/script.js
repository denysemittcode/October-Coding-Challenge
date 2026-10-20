/* Ask the Cards — unsolicited opinions, not actual divination. */
// Add more cards and their ridiculous replies here. No question analysis is needed.
const tarotDeck = [
  { image: 'cards/00_Fool.jpg', name: 'The Fool', answer: "That's a good question. Unfortunately, I'm not the card you should be asking." },
  { image: 'cards/01_Magician.jpg', name: 'The Magician', answer: "I could probably answer that, but where's the fun in figuring things out for you?" },
  { image: 'cards/02_High_Priestess.jpg', name: 'The High Priestess', answer: "I know the answer. I'm just not comfortable sharing that information right now." },
  { image: 'cards/03_Empress.jpg', name: 'The Empress', answer: 'Before I answer that, have you eaten anything today? You look kinda hangry.' },
  { image: 'cards/04_Emperor.jpg', name: 'The Emperor', answer: "Out of all the questions, that's what you ask? Have you considered ?" },
  { image: 'cards/05_Hierophant.jpg', name: 'The Hierophant', answer: "Interesting question. Have you tried asking someone who actually knows you?" },
  { image: 'cards/06_Lovers.jpg', name: 'The Lovers', answer: 'Great Question! But I think you should focus more on your relationship right now instead.' },
  { image: 'cards/07_Chariot.jpg', name: 'The Chariot', answer: 'Not sure, but I feel like you should get in your car and go somewhere fun.' },
  { image: 'cards/08_Strength.jpg', name: 'Strength', answer: "I don't have an answer, but I believe in you. Whatever it is you're doing." },
  { image: 'cards/09_Hermit.jpg', name: 'The Hermit', answer: 'You don’t need to know this. You need to put your phone on Do Not Disturb and disappear for 3 days.' },
  { image: 'cards/10_Wheel_of_Fortune.jpg', name: 'Wheel of Fortune', answer: "I was going to answer, but honestly this feels like a coin-flip situation." },
  { image: 'cards/11_Justice.jpg', name: 'Justice', answer: "Before I answer, are you telling me the whole story?" },
  { image: 'cards/12_Hanged_Man.jpg', name: 'The Hanged Man', answer: 'Interesting question. Did you know this position helps with spinal decompression? Try it!' },
  { image: 'cards/13_Death.jpg', name: 'Death', answer: "I wouldn't worry about that right now. You've got bigger changes coming. Just saying." },
  { image: 'cards/14_Temperance.jpg', name: 'Temperance', answer: 'Can I answer that after I drink some water? I feel too dehydrated rn.' },
  { image: 'cards/15_Devil.jpg', name: 'The Devil', answer: "I have a feeling you already know the answer. You just don't like it." },
  { image: 'cards/16_Tower.jpg', name: 'The Tower', answer: 'Funny you think I would know. Have you tried pretending everything is fine?' },
  { image: 'cards/17_Star.jpg', name: 'The Star', answer: "I'll get to your question in a minute. First, have you tried having a little hope?" },
  { image: 'cards/18_Moon.jpg', name: 'The Moon', answer: "I have no idea what you're talking about, but something does seem suspicious." },
  { image: 'cards/19_Sun.jpg', name: 'The Sun', answer: "Good question! Anyway, it's a beautiful day outside. Maybe go enjoy it?" },
  { image: 'cards/20_Judgement.jpg', name: 'Judgement', answer: "I could answer that, but I'm still processing some of your previous decisions." },
  { image: 'cards/21_World.jpg', name: 'The World', answer: "I could answer that, but we should touch some grass first." },
  { image: 'cards/Pents07.jpg', name: 'Seven of Pentacles', answer: 'Forget your question. Did you know seven is my favorite number?' },
  { image: 'cards/Pents08.jpg', name: 'Eight of Pentacles', answer: 'Meh, who knows? I think you should try a new hobby, tho.' },
  { image: 'cards/Swords01.jpg', name: 'Ace of Swords', answer: "Idk, but you dropped your crown queen." },
  { image: 'cards/Swords04.jpg', name: 'Four of Swords', answer: "Let me think about it for a couple of days. For now, let's take a nap." },
  { image: 'cards/Wands01.jpg', name: 'Ace of Wands', answer: "I have no idea, but Kevin might now." },
  { image: 'cards/Wands02.jpg', name: 'Two of Wands', answer: "Great question. Have you considered leaving your house for a bit?" },
  { image: 'cards/Wands03.jpg', name: 'Three of Wands', answer: "I'm still waiting for my last prediction to come true. Can you come back later?" },
  { image: 'cards/Wands04.jpg', name: 'Four of Wands', answer: "Before we get into that, when was the last time you threw a party and invited me?" },
  { image: 'cards/Wands05.jpg', name: 'Five of Wands', answer: "I was going to answer, but honestly, it sounds like you just need to fight somebody." },
  { image: 'cards/Swords05.jpg', name: 'Five of Swords', answer: "Do you want an answer, or do you just want to be right?" },
  { image: 'cards/Swords13.jpg', name: 'Queen of Swords', answer: "Unsure, but I do know you owe me money."}
];

const form = document.querySelector('#question-form');
const questionInput = document.querySelector('#question');
const cardButton = document.querySelector('#card-button');
const tarotCard = document.querySelector('#tarot-card');
const cardImage = document.querySelector('#card-image');
const meaning = document.querySelector('#card-meaning');
const status = document.querySelector('#reading-status');
const askAgain = document.querySelector('#ask-again');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const FLIP_DURATION = 900; // Same as --flip-speed in CSS.
let isAnimating = false;
let previousCard = null;

function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = () => reject(new Error(`Couldn't load ${src}`));
    img.src = src;
  });
}
function chooseCard() {
  const possibilities = tarotDeck.filter(card => card !== previousCard);
  return possibilities[Math.floor(Math.random() * possibilities.length)];
}
async function drawCard() {
  if (isAnimating) return;
  if (!questionInput.value.trim()) {
    questionInput.focus();
    status.textContent = 'You have to ask something first. The cards are not mind readers.';
    return;
  }
  isAnimating = true;
  cardButton.disabled = true;
  askAgain.hidden = true;
  meaning.textContent = '';
  status.textContent = 'The cards are thinking. Allegedly.';
  const card = chooseCard();
  const fast = reducedMotion.matches;
  try {
    // Show the back while swapping the picture, so the old image doesn't flash.
    const hadFlipped = tarotCard.classList.contains('is-flipped');
    tarotCard.classList.remove('is-flipped');
    if (hadFlipped && !fast) await wait(FLIP_DURATION);
    await preloadImage(card.image);
    cardImage.src = card.image;
    cardImage.alt = card.name;
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    tarotCard.classList.add('is-flipped');
    if (!fast) await wait(FLIP_DURATION);
    meaning.textContent = card.answer;
    status.textContent = 'Your card reading is complete. No hard feelings is all jokes.';
    askAgain.hidden = false;
    previousCard = card;
  } catch (error) {
    console.error(error);
    status.textContent = 'The cards are missing. Check the filenames in your cards folder.';
  } finally {
    isAnimating = false;
    cardButton.disabled = false;
  }
}
form.addEventListener('submit', event => { event.preventDefault(); drawCard(); });
cardButton.addEventListener('click', drawCard);
askAgain.addEventListener('click', () => { questionInput.value = ''; questionInput.focus(); status.textContent = 'Go on. Ask another question.'; });
