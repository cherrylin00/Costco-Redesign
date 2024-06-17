document.getElementById('search-icon').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('search-bar-container').style.display = 'flex';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('search-bar-container').style.display = 'none';
});

