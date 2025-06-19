// Function to check palindrome iteratively
function isPalindromeIterative(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0, right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return "No";
        left++;
        right--;
    }
    return "Yes";
}

// Function to check palindrome recursively
function isPalindromeRecursive(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    function helper(left, right) {
        if (left >= right) return true;
        if (cleaned[left] !== cleaned[right]) return false;
        return helper(left + 1, right - 1);
    }
    return helper(0, cleaned.length - 1) ? "Yes" : "No";
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', () => {
        document.getElementById('welcomeSection').classList.add('hidden');
        document.getElementById('checkerSection').classList.remove('hidden');
    });

    document.getElementById('checkButton').addEventListener('click', () => {
        const inputText = document.getElementById('inputText').value;
        const resultElement = document.getElementById('palindromeResult');
        
        if (inputText.trim() === '') {
            alert('Please enter a word or phrase!');
            return;
        }
        
        const isPalindrome = isPalindromeIterative(inputText);
        
        // Simple single-line result with quotes around input
        const resultMessage = isPalindrome === "Yes" 
            ? `"${inputText}" is a Palindrome` 
            : `"${inputText}" is not a Palindrome`;
        
        resultElement.textContent = resultMessage;
        resultElement.className = 'result-display';
        
        // Trigger reflow for animation
        void resultElement.offsetWidth;
        
        resultElement.classList.add('show');
        resultElement.classList.add(isPalindrome === "Yes" ? 'success' : 'error');
        
        // Clear input
        document.getElementById('inputText').value = '';
    });

    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            document.getElementById('checkerSection').classList.add('hidden');
            document.getElementById('welcomeSection').classList.remove('hidden');
            
            // Reset the input and result
            document.getElementById('inputText').value = '';
            const resultElement = document.getElementById('palindromeResult');
            resultElement.textContent = '';
            resultElement.className = 'result-display';
        });
    }
});