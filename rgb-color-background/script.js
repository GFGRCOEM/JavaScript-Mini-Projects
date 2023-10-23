const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const body = document.body;

red.addEventListener("input", updateValue);
green.addEventListener("input", updateValue);
blue.addEventListener("input", updateValue);

function updateValue() {
	const r = Math.min(red.value, 255);
	const g = Math.min(green.value, 255);
	const b = Math.min(blue.value, 255);
	red.value = r;
	green.value = g;
	blue.value = b;

	const color = `rgb(${r}, ${g}, ${b})`;
	body.style.backgroundColor = color;
}
