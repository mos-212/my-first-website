// 1. Setup Variables
const myButton = document.querySelector('#click-btn');
const welcomeText = document.querySelector('#welcome-text');

// Track state
let isChanged = false;

// 2. Button Click Toggle Feature
myButton.addEventListener('click', function() {
    if (!isChanged) {
        welcomeText.textContent = 'Welcome! You are here to make a difference!';
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

// 3. Live API Fetch Feature
const fetchBtn = document.querySelector('#fetch-btn');
const factDisplay = document.querySelector('#fact-display');

fetchBtn.addEventListener('click', async () => {
    factDisplay.textContent = 'Loading a fresh fact from the web... 🌐';
    
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        
        factDisplay.textContent = `"${data.text}"`;
    } catch (error) {
        factDisplay.textContent = 'Oops! Could not load data. Check your internet connection.';
        console.error('Fetch error:', error);
    }
});

// 4. Dynamic User Input & Local Storage (Goal Tracker with Delete)
const goalInput = document.querySelector('#goal-input');
const addGoalBtn = document.querySelector('#add-goal-btn');
const goalList = document.querySelector('#goal-list');

// Load any previously saved goals from browser localStorage
let savedGoals = JSON.parse(localStorage.getItem('myGoals')) || [];

// Render existing goals onto the screen with a delete button
function renderGoals() {
    goalList.innerHTML = ''; // Clear list first so it doesn't duplicate items
    
    savedGoals.forEach((goalText, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${goalText} `;

        // Create a Delete button for each goal
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.padding = '2px 6px';
        deleteBtn.style.fontSize = '12px';
        
        // Add delete event listener
        deleteBtn.addEventListener('click', () => {
            deleteGoal(index);
        });

        li.appendChild(deleteBtn);
        goalList.appendChild(li);
    });
}

// Function to remove a goal by its index and update storage
function deleteGoal(index) {
    savedGoals.splice(index, 1); // Remove 1 item from the array at that index
    localStorage.setItem('myGoals', JSON.stringify(savedGoals)); // Update storage
    renderGoals(); // Refresh the screen
}

// Initial render on page load
renderGoals();

// Add new goal on button click
addGoalBtn.addEventListener('click', () => {
    const text = goalInput.value.trim();
    
    if (text !== '') {
        savedGoals.push(text);
        localStorage.setItem('myGoals', JSON.stringify(savedGoals)); // Save to browser storage
        renderGoals(); // Refresh the screen list
        goalInput.value = ''; // Instantly clears the input text box!
    }
});