document.addEventListener("DOMContentLoaded", function(){
const words = ["Creativity, ", "Passion, ", "and Excellency "];
const typingSpeed = 45; // Adjust the speed of typing (in milliseconds)

function typeText(word, index, textElement) {
    if (index < word.length) {
        textElement.innerHTML += word.charAt(index);
        setTimeout(() => typeText(word, index + 1, textElement), typingSpeed);
    }
}

function typeWords() {
    const textElement = document.querySelector('.typing-text');
    textElement.innerHTML = ""; // Clear existing text

    let currentIndex = 0;
    const typeNextWord = () => {
        if (currentIndex < words.length) {
            typeText(words[currentIndex], 0, textElement);
            currentIndex++;
            setTimeout(typeNextWord, (words[currentIndex - 1].length + 1) * typingSpeed);
        } else {
            // All words have been typed, wait for the repeatInterval and start again
            setTimeout(() => {
                currentIndex = 0;
                textElement.innerHTML = "";
                typeNextWord();
            }, repeatInterval);
        }
    };

    typeNextWord();
}

// Start the typing animation on page load
typeWords();

// Function to start the typing animation every repeatInterval
function startTypingAnimation() {
    typeWords();
}

// Repeat the typing animation every repeatInterval
setInterval(startTypingAnimation, 5000);

})
