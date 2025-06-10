function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    alert("Please enter valid values for height and weight.");
    return;
  }

  const heightM = heightCm / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  document.getElementById("resultBox").style.display = "block";
  document.getElementById("bmiValue").textContent = `BMI: ${bmi}`;
  document.getElementById("bmiCategory").textContent = category;
}

function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("resultBox").style.display = "none";
}
