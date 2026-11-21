
// Suba's Pricing Cards

// Get billing toggle
const billingToggle = document.getElementById("billingToggle");

// Get all price elements
const prices = document.querySelectorAll(".price");

// Get all period elements
const periods = document.querySelectorAll(".period");

// Change prices when toggle is clicked
billingToggle.addEventListener("change", function () {

    // Check billing type
    const isYearly = billingToggle.checked;

    prices.forEach((price, index) => {

        if (isYearly) {

            // Yearly price
            price.textContent = "$" + price.dataset.yearly;

            periods[index].textContent = "per year";

        } else {

            // Monthly price
            price.textContent = "$" + price.dataset.monthly;

            periods[index].textContent = "per month";

        }

    });

});

// Choose Plan button functionality
const buttons = document.querySelectorAll(".pricing-card button");

buttons.forEach((button, index) => {

    button.addEventListener("click", function () {

        const planNames = ["Basic", "Pro", "Premium"];

        alert("Suba selected the " + planNames[index] + " plan!");

    });

});

