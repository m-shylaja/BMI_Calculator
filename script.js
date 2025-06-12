const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  const category = getBMICategory(bmi);
  bmiText.textContent = bmi.toFixed(2);
  descText.textContent = `You are ${category.label}`;
  descText.style.color = category.color;
});

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return { label: "Underweight", color: "orange" };
  } else if (bmi < 25) {
    return { label: "Normal", color: "green" };
  } else if (bmi < 30) {
    return { label: "Overweight", color: "lightcoral" };
  } else {
    return { label: "Obese", color: "crimson" };
  }
}

// Reset BMI and description on reset
resetBtn.addEventListener("click", () => {
  bmiText.textContent = "0";
  descText.textContent = "N/A";
  descText.style.color = "black";
});
