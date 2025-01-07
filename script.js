// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all required elements
    const form = document.getElementById('riddleForm');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const tryAgainButton = document.getElementById('tryAgainButton');

    const correctPassword = 'spielberg';

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (passwordInput.value.toLowerCase() === correctPassword.toLowerCase()) {
            // Hide form and error message
            form.style.display = 'none';
            errorMessage.classList.add('hidden');
            
            // Show success message and try again button
            successMessage.classList.remove('hidden');
            tryAgainButton.classList.remove('hidden');
        } else {
            // Show error message
            errorMessage.classList.remove('hidden');
            successMessage.classList.add('hidden');
        }
    });

    // Handle try again button
    tryAgainButton.addEventListener('click', () => {
        // Reset form
        form.style.display = 'flex';
        passwordInput.value = '';
        
        // Hide messages and button
        errorMessage.classList.add('hidden');
        successMessage.classList.add('hidden');
        tryAgainButton.classList.add('hidden');
    });
});
