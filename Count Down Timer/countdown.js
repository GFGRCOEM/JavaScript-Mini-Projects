let time = "";
let days = document.getElementById("days-input").value || "0";
let hours = document.getElementById("hours-input").value || "0";
let mins = document.getElementById("mins-input").value || "0";
let seconds = document.getElementById("seconds-input").value || "0";

let displaySec = document.getElementById("seconds");
let displayMin = document.getElementById("minutes");
let displayHour = document.getElementById("hours");
let displayDay = document.getElementById("days");

const start = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let totalSeconds = 0;

function countdown(total) {
	start.disabled = true;
	pauseBtn.disabled = false;
	let days = document.getElementById("days-input").value || "0";
	let hours = document.getElementById("hours-input").value || "0";
	let mins = document.getElementById("mins-input").value || "0";
	let seconds = document.getElementById("seconds-input").value || "0";

	displaySec.innerHTML = seconds;
	displayMin.innerHTML = mins;
	displayHour.innerHTML = hours;
	displayDay.innerHTML = days;

	totalSeconds =
		total ??
		+seconds + +mins * 60 + +hours * 60 * 60 + +days * 60 * 60 * 24 + 1;

	function tick() {
		totalSeconds--;
		days = Math.floor(totalSeconds / 86400);
		hours = Math.floor((totalSeconds % 86400) / 3600);
		mins = Math.floor(((totalSeconds % 86400) % 3600) / 60);
		seconds = ((totalSeconds % 86400) % 3600) % 60;

		if (totalSeconds !== -1) {
			displaySec.innerHTML = String(seconds);
			displayMin.innerHTML = String(mins);
			displayHour.innerHTML = String(hours);
			displayDay.innerHTML = String(days);
		}
		time = setTimeout(tick, 1000);
		if (totalSeconds == -1) {
			alert("Time's up!");
			start.disabled = false;
			pauseBtn.disabled = true;
			clearTimeout(time);
			time = "";
		}
	}
	tick();
}

function reset() {
	clearTimeout(time);
	time = "";

	start.disabled = false;
	pauseBtn.disabled = true;
	displaySec.innerHTML = "0";
	displayMin.innerHTML = "0";
	displayHour.innerHTML = "0";
	displayDay.innerHTML = "0";

	document.getElementById("days-input").value = "";
	document.getElementById("hours-input").value = "";
	document.getElementById("mins-input").value = "";
	document.getElementById("seconds-input").value = "";
}

function pause() {
	if (pauseBtn.innerText == "Pause") {
		clearTimeout(time);
		pauseBtn.innerText = "Resume";
	} else {
		pauseBtn.innerText = "Pause";
		countdown(totalSeconds + 1);
	}
}
