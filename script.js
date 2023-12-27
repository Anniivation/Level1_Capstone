"use strict";
function calculateTotal() {
  // Get input values
  var hours = parseFloat(document.getElementById("hours").value) || 0;
  var hourlyRate = 16; // Fixed hourly rate

  // Call the calculateProjectRate function
  var total = calculateProjectRate(hours, hourlyRate);

  // Display total
  document.getElementById("total").value = total.toFixed(2);
}

// Function to calculate project rate
function calculateProjectRate(hours, hourlyRate) {
  return hours * hourlyRate;
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = new bootstrap.Carousel(
    document.querySelector(".slideshow-container"),
    {
      interval: 5000, // interval in milliseconds (5 second interval)
      pause: false, // Disable pausing on hover
      wrap: true, // Enable looping of the slideshow
    }
  );
});

const cursorRounded = document.querySelector(".rounded");
const cursorPointed = document.querySelector(".pointed");
// cursor
