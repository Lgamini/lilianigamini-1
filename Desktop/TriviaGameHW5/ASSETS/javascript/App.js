$(document).ready(function () {

	var winCounter = 0;
	var lossCounter = 0;


	var game = {

		time: 25,

		trivia: {
			q1: {
				question: "Capital of California?",
				a1: "Sacramento",
				a2: "Disneyland",
				a3: "Los Angeles",
				a4: "Napa Valley"
			},
			q2: {
				question: "Who is founder of Amazon",
				a1: "Bill Gates",
				a2: "Jeff Bezos",
				a3: "Mark Zuckerburg",
				a4: "Steve Jobs"
			},

			q3: {
				question: "Who is the founder of Patron tequila",
				a1: "Brian Fudge",
				a2: "Paul Mitchell",
				a3: "John Paul DeJoria",
				a4: "Stuart Weitzman"
			},
			q4: {
				question: "Capital of New York?",
				a1: "Time Square",
				a2: "Albany",
				a3: "Brooklyn",
				a4: "Queens"
			},
		},

		start: function () {
			var counter = setInterval(game.count, 1000);
			if (game.time < 0) {
				game.results();
				clearInterval(counter);

			}

		},
		stop: function () {
			var currentTime = game.timeConverter(game.time);
			if (game.time < 0) {
				game.results();
				clearInterval(currentTime);

			}

		},
		count: function () {
			game.time--;
			currentTime = game.timeConverter(game.time);
			$("#timer").html("<h3>" + currentTime + "</h3>");

			if (game.time < 0) {
				game.results();
				clearInterval(currentTime);
			}
		},

		timeConverter: function (t) {

			var minutes = Math.floor(t / 60);
			var seconds = t - (minutes * 60);
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			if (minutes === 0) {
				minutes = "00";
			} else if (minutes < 10) {
				minutes = "0" + minutes;
			}

			return minutes + ":" + seconds;
		},

		displayFirstQuestion: function () {
			$("#question").html("<h2>" + game.trivia.q1.question + "</h2>");
			$("#a1").html("<p id='a1'>" + game.trivia.q1.a1 + "</p>");
			$("#a2").html("<p id='a2'>" + game.trivia.q1.a2 + "</p>");
			$("#a3").html("<p id='a3'>" + game.trivia.q1.a3 + "</p>");
			$("#a4").html("<p id='a4'>" + game.trivia.q1.a4 + "</p>");
			console.log("firstquestion");

			$("#a1").click(function () {
				console.log("Clicked a1");
				$("#a1").data('clicked', true);
				winCounter++;

				game.nextQuestion();

			});

			$("#a2, #a3, #a4").click(function () {
				if (jQuery("#a1").data('clicked')) {
					game.nextQuestion();
				}
				else {

					lossCounter++;
					console.log("clicked anything wrong");
					game.nextQuestion();
				}
			});


		},

		nextQuestion: function () {
			$("#a1").data('clicked', null);
			$("#question").html("<h2>" + game.trivia.q2.question + "</h2>");
			$("#a1").html("<p id='a1'>" + game.trivia.q2.a1 + "</p>");
			$("#a2").html("<p id='a2'>" + game.trivia.q2.a2 + "</p>");
			$("#a3").html("<p id='a3'>" + game.trivia.q2.a3 + "</p>");
			$("#a4").html("<p id='a4'>" + game.trivia.q2.a4 + "</p>");
			console.log("nextquestion");

			$("#a3").click(function () {
				console.log("Clicked a3");
				$("#a3").data('clicked', true);

				winCounter++;

				game.thirdQuestion();

			});

			$("#a1, #a2, #a4").click(function () {

				lossCounter++;
				console.log("clicked anything wrong");
				game.thirdQuestion();
			});
		},

		thirdQuestion: function () {
			$("#a3").data('clicked', null);
			$("#question").html("<h2>" + game.trivia.q3.question + "</h2>");
			$("#a1").html("<p id='a1'>" + game.trivia.q3.a1 + "</p>");
			$("#a2").html("<p id='a2'>" + game.trivia.q3.a2 + "</p>");
			$("#a3").html("<p id='a3'>" + game.trivia.q3.a3 + "</p>");
			$("#a4").html("<p id='a4'>" + game.trivia.q3.a4 + "</p>");
			console.log("thirdquestion");

			$("#a2").click(function () {
				console.log("Clicked a2");
				$("#a2").data('clicked', true);

				winCounter++;

				game.lastQuestion();

			});

			$("#a1, #a3, #a4").click(function () {

				lossCounter++;
				console.log("clicked anything wrong");
				game.lastQuestion();
			});
		},

		lastQuestion: function () {
			$("#a2").data('clicked', null);
			$("#question").html("<h2>" + game.trivia.q4.question + "</h2>");
			$("#a1").html("<p id='a1'>" + game.trivia.q4.a1 + "</p>");
			$("#a2").html("<p id='a2'>" + game.trivia.q4.a2 + "</p>");
			$("#a3").html("<p id='a3'>" + game.trivia.q4.a3 + "</p>");
			$("#a4").html("<p id='a4'>" + game.trivia.q4.a4 + "</p>");
			console.log("thirdquestion");

			$("#a4").click(function () {
				console.log("Clicked a4");
				$("#a4").data('clicked', true);

				winCounter++;
				game.results();

			});

			$("#a1, #a2, #3").click(function () {

				lossCounter++;
				console.log("clicked anything wrong");
				game.results();
			});
		},

		results: function () {
			$("#timer").html(null);
			$("#question").html("<h2> Game Over! </h2>");
			$("#a1").html("<p id='a1'> Correct answers: " + winCounter + "</p>");
			$("#a2").html("<p id='a2'> Incorrect answers: " + lossCounter + "</p>");
			$("#a3").html("<p> To play again, refresh page. </p>");
			$("#a4").html(null);
			game.stop();
		},

	};
	$("#timer").on('click', game.start());
	$("#question").on('click', game.displayFirstQuestion());


}); 