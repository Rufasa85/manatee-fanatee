console.log("hello")

var jokeBtn = $('#joke-btn');

function renderRandomJoke() {
    fetch('http://manateejokesapi.herokuapp.com/manatees/random')
        .then(function (response) {
            response.json().then(function (data) {
                $('#joke-holder').removeClass("hidden");

                var responseObj = data;
                $('#joke-setup').children('h3').text(`Setup: ${responseObj.setup}`)
                $('#joke-punchline').children('h4').text(`Punchline: ${responseObj.punchline}`)
            })
        })
}

jokeBtn.on('click', renderRandomJoke)