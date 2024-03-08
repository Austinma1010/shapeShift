// User Dashboard Section

// Personal stats section

const getBmr = (e) => {
  e.preventDefault();
  fetch("/api/stats/bmr/:id", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

document.querySelector("#bmr").addEventListener("click", getBmr);
const tdeeBtn = document.querySelector("#tdee");
const caloricNeedsBtn = document.querySelector("#caloric-needs");
const idealWeightBtn = document.querySelector("#ideal-weight");

// basal metabolic rate

// New Workout Button and Form

// Past-Workouts Section
