var correct = 0;
var incorrect = 0;
var unanswered = 0;



$(document).ready(function () {
	$(".btn").click(function () {
		$(".btn").css("display", "none")


		var number = 181;
		var intervalId;


		function timeConverter() {

			var minutes = Math.floor(number / 60);
			// var seconds = number - (minutes * 60); OR
			var seconds = number % 60;

			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			if (minutes === 0) {
				minutes = "00";
			}
			else if (minutes < 10) {
				minutes = "0" + minutes;
			}

			return minutes + ":" + seconds;
		}



		function run() {
			clearInterval(intervalId);
			intervalId = setInterval(decrement, 1000);
		};


		function decrement() {


			number--;


			$(".timer").html(timeConverter("<h2>" + number + "</h2>"));
			if (number === 0) {

				$("#questions").hide("display");
				stop();
				$(".timer").hide("display");


				$("#time").text("Time's Up!!!");

				$("#correct").text("Correct :" + correct);
				$("#incorrect").text("Incorrect :" + incorrect);
				$("#unanswered").text("Unanswered :" + unanswered);
			}
		}
		function stop() {
			clearInterval(intervalId);
		}
		run();

		$("#questions").show("display");

		$(".btn-primary").click(function () {

			var val = $('input[name=1]:checked').val();

			if (val === "0") {
				correct++;
			}
			else if (val === "1") {
				incorrect++;
			}
			else {
				unanswered++;
			}

			var val = $('input[name=2]:checked').val();

			if (val === "0") {
				correct++;
			}
			else if (val === "2") {
				incorrect++;
			}
			else {
				unanswered++;
			}
			var val = $('input[name=3]:checked').val();

			if (val === "0") {
				correct++;
			}
			else if (val === "3") {
				incorrect++;
			}
			else {
				unanswered++;
			}
			var val = $('input[name=4]:checked').val();

			if (val === "0") {
				correct++;
			}
			else if (val === "4") {
				incorrect++;
			}
			else {
				unanswered++;
			}
			var val = $('input[name=5]:checked').val();

			if (val === "0") {
				correct++;
			}
			else if (val === "5") {
				incorrect++;
			}
			else {
				unanswered++;
			}
			var val = $('input[name=6]:checked').val();

			if (val === "0") {
				correct++;
			}
			else if (val === "6") {
				incorrect++;
			}
			else {
				unanswered++;
			}
			var val = $('input[name=7]:checked').val();

			if (val === "0") {
				correct++;
			}
			else if (val === "7") {
				incorrect++;
			}
			else {
				unanswered++;
			}

			$("#questions").hide("display");
			stop();
			$(".timer").hide("display");

			$("#correct").text("Correct :" + correct);
			$("#incorrect").text("Incorrect :" + incorrect);
			$("#unanswered").text("Unanswered :" + unanswered);



		});



	});

});





