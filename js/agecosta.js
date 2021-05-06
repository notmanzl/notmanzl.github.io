
let agecostaEl = document.getElementById("agecosta");

setInterval(() => {
	let time = (new Date() - new Date('May 7, 2000 00:00:00')) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	agecostaEl.innerText = time.toString().substring(0, 12);
}, 50);