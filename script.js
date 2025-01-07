window.onload = function() {
    // Get elements
    var form = document.getElementById('riddleForm');
    var input = document.getElementById('password');
    var error = document.getElementById('errorMessage');
    var success = document.getElementById('successMessage');
    var tryAgain = document.getElementById('tryAgainButton');

    // Handle form submit
    form.onsubmit = function(e) {
        e.preventDefault();
        
        if (input.value.toLowerCase() === 'spielberg') {
            form.style.display = 'none';
            error.classList.add('hidden');
            success.classList.remove('hidden');
            tryAgain.classList.remove('hidden');
        } else {
            error.classList.remove('hidden');
            success.classList.add('hidden');
        }
    };

    // Handle try again button
    tryAgain.onclick = function() {
        form.style.display = 'flex';
        input.value = '';
        error.classList.add('hidden');
        success.classList.add('hidden');
        tryAgain.classList.add('hidden');
    };
};
