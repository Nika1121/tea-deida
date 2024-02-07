var nobtn = document.querySelector('.nobtn');

nobtn.addEventListener('mouseover', function () {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Adjust these values based on the size of your button
    var buttonWidth = nobtn.offsetWidth;
    var buttonHeight = nobtn.offsetHeight;

    var maxX = windowWidth - buttonWidth;
    var maxY = windowHeight - buttonHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    nobtn.style.left = randomX + 'px';
    nobtn.style.top = randomY + 'px';
});
