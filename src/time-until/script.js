const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const dateInput = document.querySelector("#date-input");
const timeUntilDescripton = document.querySelector(".time-until");
const timeEvent = document.querySelector(".event");

let dateUntil = new Date(dateInput.value);

const significantDates = [
	{ date: { day: 25, month: 12 }, description: "Christmas" },
	{ date: { day: 32, month: 12 }, description: "New Years" },
];

const setDate = (date) => {
	const now = new Date();
	const milliUntilDate = dateUntil - now;
	const dateUntilDate = {
		day: dateUntil.getDate() + 1,
		month: dateUntil.getMonth() + 1,
	};

	const dateInSignificatDates = significantDates.find(
		(sigDate) =>
			sigDate.date.day == dateUntilDate.day &&
			sigDate.date.month == dateUntilDate.month
	);

	if (dateInSignificatDates) {
		timeEvent.textContent = dateInSignificatDates.description;
	} else {
		timeEvent.textContent = dateUntil.toDateString();
	}

	if (milliUntilDate > 0) {
		timeUntilDescripton.textContent = "Time Until:";
	} else {
		timeUntilDescripton.textContent = "Time Since:";
	}

	let daysUntilRaw = milliUntilDate / 1000 / 3600 / 24;
	let daysUntil = Math.trunc(daysUntilRaw);
	let hoursUntilRaw = (daysUntilRaw - daysUntil) * 24;
	let hoursUntil = Math.trunc(hoursUntilRaw);
	let minutesUntilRaw = (hoursUntilRaw - hoursUntil) * 60;
	let minutesUntil = Math.trunc(minutesUntilRaw);
	let secondsUntilRaw = (minutesUntilRaw - minutesUntil) * 60;
	let secondsUntil = Math.trunc(secondsUntilRaw);

	days.textContent = daysUntil;
	hours.textContent = hoursUntil;
	minutes.textContent = minutesUntil;
	seconds.textContent = secondsUntil;
};

dateInput.addEventListener("change", (event) => {
	dateUntil = new Date(dateInput.value);
});

setInterval(setDate, 1000);
