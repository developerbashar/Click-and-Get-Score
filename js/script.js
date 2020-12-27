function scoreEarn() {
    var counter = 5;
    var timer = setInterval(function () {

        if (counter < 0) {
            clearTimeout(timer);
            var currentScore = document.getElementById('score').innerText;
            var currentScoreNumber = Number(currentScore);
            var randomScore = Math.random() * 10;
            var visitScore = Math.ceil(randomScore);
            var total = currentScoreNumber + visitScore;
            document.getElementById('score').innerText = total;
            document.querySelector('.timer-show').style.display = "none";
            return;
        } else {
            document.querySelector('.timer-show').innerText = "Your score will add after " + counter + " seconds !";
            counter--;
        }

    }, 1000);

    document.querySelector('.timer-show').style.display = "block";
}