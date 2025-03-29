window.onload = function() {
    let title = document.querySelector('h1');
    let titles = [
        "Welcome Annika Fredbord", 
        "You're the love of my life, Annika!"
    ];
    let index = 0;

    setInterval(function() {
        title.innerText = titles[index]; // Change the text
        index = (index + 1) % titles.length; // Toggle between the two titles
    }, 5000); // Every 5 seconds, change the title text
};
