const booking = document.getElementById("booking");
const availableRides = document.getElementById("available-rides");
const confirmation = document.getElementById("confirmation");
const saveBtn = document.getElementById("save-btn");
const abortButton = document.getElementById("abort-btn");
const selectButtons = document.querySelectorAll(".select-btn");
const sendSmsButton = document.getElementById("send-sms-btn");


saveBtn.addEventListener("click", () => {
    booking.classList.remove("hidden");
    availableRides.classList.remove("hidden");
});

selectButtons.forEach((button) => {
    button.addEventListener("click", () => {
        confirmation.classList.remove("hidden");
    });
});

abortButton.addEventListener("click", () => {
    booking.classList.add("hidden");
    availableRides.classList.add("hidden");
    confirmation.classList.add("hidden");
});

sendSmsButton.addEventListener("click", () => {
    booking.classList.add("hidden");
    availableRides.classList.add("hidden");
    confirmation.classList.add("hidden");
});

