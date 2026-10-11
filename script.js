// Target the button and the paragraph by their tags or IDs
const myButton = document.querySelector('button');
const welcomeText = document.querySelector('#welcome-text');

// Track state
let isChanged = false;

myButton.addEventListener('click', function() {
    if (!isChanged) {
        welcomeText.textContent = ' Welcome! You are here to make a difference!';
        welcomeText.style.color = '#38bdf8';
        myButton.textContent = 'Reset Text';
        isChanged = true;
    } else {
        welcomeText.textContent = 'My name is Mussie, and I am learning web development.';
        welcomeText.style.color = '#f8fafc';
        myButton.textContent = 'Click Me!';
        isChanged = false;
    }
});