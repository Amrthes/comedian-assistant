window.addEventListener('DOMContentLoaded', () => {
  const db = firebase.firestore();

  const promptDisplay = document.getElementById('prompt');
  const getPromptButton = document.getElementById('getPromptButton');
  const responseField = document.getElementById('responseField');
  const submitButton = document.getElementById('submitButton');

  const prompts = [
    "Imagine if socks could talk. What would they complain about?",
    "What would the world look like if everyone had to wear giant hats all the time?",
    "If you were a villain in a cartoon, what would your evil plan be?",
    "What if your houseplants started demanding better care and pay raises?",
    "How would life change if every time you sneezed, it rained for five minutes?",
    "What would it be like if your alarm clock had a personality and argued with you about getting up?",
    "Imagine a world where everyone had to communicate only through dance moves.",
    "If food could give you a review, what would your last meal say about you?",
    "What if clouds started changing colors based on their moods?",
    "Picture a world where every car was also a karaoke machine. What songs would play in traffic?",
    "What would happen if you could only express your feelings through interpretive art?",
    "If your pet had a secret life, what would it be like?",
    "What if gravity started to act unpredictable for one day? How would people adjust?",
    "If your phone could send you funny notifications based on your mood, what would it say right now?",
    "What would happen if everyone on the planet suddenly spoke in rhyme for an hour?",
    "Imagine if robots could cook but they only knew how to make spaghetti.",
    "What if all the trees in your neighborhood suddenly started singing?",
    "If you had a personal theme song that played everywhere you went, what would it be?",
    "Imagine if there was a school for animals to learn how to be better pets. What subjects would they study?",
    "If you could live in a world where everything was made of cheese, what would be the biggest problem?",
    "What if animals started writing online reviews for human products?",
    "If you could have any fictional creature as a pet, what would it be and why?",
    "Imagine a world where pizza was the only food allowed, but with random toppings every time.",
    "What would happen if your shoes decided they wanted to explore on their own?",
    "If you had to invent a new holiday, what would it be, and how would people celebrate?",
    "What would happen if everyone had to carry a talking mirror around with them?",
    "What if your clothes could change themselves whenever they felt like it?",
    "Imagine a world where everyone’s hair color changed based on their mood. What color would you be today?",
    "What would it be like if the only mode of transportation was pogo sticks?",
    "If your house could have a personality, what kind of mood would it be in today?",
    "What would happen if your favorite superhero had to save the world with a broken arm?",
    "Imagine if the moon could text you every time it had a new thought.",
    "What would happen if everyone had to walk backwards for an entire day?",
    "If you could only wear shoes that made noise, what would your fashion choices look like?",
    "What if you could press a button to instantly switch to any animal’s body for one hour? What would you do?",
    "Imagine a world where all vehicles could only move in zigzags.",
    "If you had to give a TED talk on something completely ridiculous, what would it be?",
    "What if your computer could get tired and go on vacation? Where would it go?",
    "Imagine if clouds could tell jokes, what would their punchlines sound like?",
    "What would happen if you could only speak in one-liner jokes for a whole day?",
    "Imagine if plants had the ability to walk around and talk to each other.",
    "What would happen if people started wearing shoes on their hands instead of feet?",
    "If you could only use one emoji for the rest of your life, which one would you choose and why?",
    "What if animals held annual talent shows? What acts would they perform?",
    "If your refrigerator started giving you life advice, what would it say?",
    "What would happen if every time you made a decision, a random person yelled, 'Great choice!'?",
    "Imagine if your shoes could run away from you at the worst possible moments.",
    "What would happen if socks became the world’s currency?",
    "If every time you made a mistake, a confetti cannon went off, how would that affect your life?",
    "What if you could only answer questions with 'I’m sorry, I’m on a diet'?",
    "Imagine if food suddenly became sentient, what would it say about your eating habits?"
  ];

  let usedPrompts = [];

  function fetchPrompt() {
    if (usedPrompts.length === prompts.length) {
      alert("All prompts have been shown!");
      return;
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * prompts.length);
    } while (usedPrompts.includes(randomIndex));

    const randomPrompt = prompts[randomIndex];
    promptDisplay.textContent = randomPrompt;

    usedPrompts.push(randomIndex);
  }

  async function submitResponse() {
    const response = responseField.value.trim();
    if (response) {
      try {
        await db.collection('responses').add({
          response: response,
          timestamp: new Date()
        });
        responseField.value = '';
        alert('Your response has been submitted!');
      } catch (error) {
        alert('Error submitting response: ' + error.message);
      }
    } else {
      alert('Please enter a response before submitting.');
    }
  }

  getPromptButton.addEventListener('click', fetchPrompt);
  submitButton.addEventListener('click', submitResponse);
  fetchPrompt();

  const secretMessages = [
    "Hey, if no one told you today: you're doing great.",
    "Your smile could fix anything. Even a Monday.",

    "This app may joke, but I’m serious when I say: You are so special.",
    "The world is better because you’re in it."
  ];

  document.getElementById('secretTrigger').addEventListener('click', () => {
    const messageBox = document.getElementById('secretMessage');
    const message = secretMessages[Math.floor(Math.random() * secretMessages.length)];
    messageBox.innerText = message;
    messageBox.style.display = 'block';
  });
});
