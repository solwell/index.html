const image = document.getElementById('shakeImage');

image.addEventListener('mouseover', function() {
    image.classList.add('shake');
});

image.addEventListener('mouseout', function() {
    image.classList.remove('shake');
});