// 1. Setup Variables
const myButton = document.querySelector('button');
const welcomeText = document.querySelector('#welcome-text');

// Track state
let isChanged = false;

// 2. Button Click Toggle Feature
myButton.addEventListener('click', function() {
    if (!isChanged) {
        welcomeText.textContent = 'Welcome! You are here to make a difference!';
        welcomeText.style.color = '#f70662';
        myButton.textContent = 'Reset Text';
        isChanged = true;
    } else {
        welcomeText.textContent = 'My name is Mussie, and I am learning web development.';
        welcomeText.style.color = '#f8fafc';
        myButton.textContent = 'Click Me!';
        isChanged = false;
    }
});
// 3. Live API Fetch Feature (Funny Jokes!)
const fetchBtn = document.querySelector('#fetch-btn');
const factDisplay = document.querySelector('#fact-display');

fetchBtn.addEventListener('click', async () => {
    factDisplay.textContent = 'Loading a funny joke... 😂';
    
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        
        // This combines the setup and punchline into the paragraph
        factDisplay.textContent = `${data.setup} — ${data.punchline}`;
    } catch (error) {
        factDisplay.textContent = 'Oops! Could not load jokes. Check your internet connection.';
        console.error('Fetch error:', error);
    }
});