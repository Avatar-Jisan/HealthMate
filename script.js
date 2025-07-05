const bmiResult = document.getElementById("bmi-result");
const bmiBtn = document.getElementById("bmi-btn");
const bmi = document.getElementById("bmi");
const calorie = document.getElementById("calorie");
const calBtn = document.getElementById("cal-btn");

bmiBtn.addEventListener("click", function () {
  bmiResult.textContent = "Result: ";
  const weightIn = document.getElementById("weight-in");
  const weightInput = weightIn.querySelector(".weight-kg-in");
  const bmiCategory = bmi.querySelector("#bmi-category");
  const heightM = bmi.querySelector(".height-m");
  let weight;
  const bmiWeight = bmi.querySelector(".weight-unit");
  if (bmiWeight.value === "kg") {
    weight = parseFloat(weightInput.value);
  } else {
    weight = parseFloat(weightInput.value * 0.453592);
  }
  const HeightUnit = bmi.querySelector(".height-unit");
  const HeightCmInput = bmi.querySelector(".height-cm");
  const HeightFtInput = bmi.querySelector(".height-ft");
  const HeightInchInput = bmi.querySelector(".height-in");
  let height;
  if (HeightUnit.value === "cm") {
    height = parseFloat(HeightCmInput.value / 100);
  } else {
    height = parseFloat(HeightFtInput.value * 0.3048);
    height += parseFloat(HeightInchInput.value * 0.0254);
  }
  let ogResult = weight / (height * height);
  let result = ogResult.toFixed(2);
  
  heightM.textContent = "Height in Meter: " + height.toFixed(2);
  bmiResult.textContent += result;
  if (result >= 40.0) {
    bmiCategory.textContent = "Class III obesity";
    bmiCategory.style.backgroundColor = "#8B0000";
  } else if (result >= 35.0 && result < 40.0) {
    bmiCategory.textContent = "Class II obesity";
    bmiCategory.style.backgroundColor = "#DC143C";
  } else if (result >= 30.0 && result < 35.0) {
    bmiCategory.textContent = "Class I obesity";
    bmiCategory.style.backgroundColor = "#FF4500";
  } else if (result >= 25.0 && result < 30.0) {
    bmiCategory.textContent = "Overweight";
    bmiCategory.style.backgroundColor = "#FFD700";
  } else if (result >= 18.5 && result < 25.0) {
    bmiCategory.textContent = "Normal weight";
    bmiCategory.style.backgroundColor = "#4CAF50";
  } else if (result === "NaN") {
    bmiCategory.textContent = "";
  } else {
    bmiCategory.textContent = "Underweight";
    bmiCategory.style.backgroundColor = "#87CEFA";
  }
  weightInput.value = "";
  HeightCmInput.value = "";
  HeightFtInput.value = "";
  HeightInchInput.value = "";
});

calBtn.addEventListener("click", function () {
  let weight, height;
  const weightUnit = calorie.querySelector(".weight-unit");
  const weightInput = calorie.querySelector(".weight-kg-in");
  const HeightFtInput = calorie.querySelector(".height-ft");
  const HeightInchInput = calorie.querySelector(".height-in");
  if (weightUnit.value === "kg") {
    weight = parseFloat(weightInput.value);
  } else {
    weight = parseFloat(weightInput.value * 0.453592);
  }
  const HeightUnit = calorie.querySelector(".height-unit");
  const HeightCm = calorie.querySelector(".height-cm");
  if (HeightUnit.value === "cm") {
    height = parseFloat(HeightCm.value / 100);
  } else {
    height = parseFloat(HeightFtInput.value * 0.3048);
    height += parseFloat(HeightInchInput.value * 0.0254);
  }
  const ageInput = document.getElementById("cal-age");
  let age = ageInput.value
  
  let gender = document.getElementById("cal-gender");
  let BMR, result, ogResult;
  if (gender.value === "male") {
    BMR = 10 * weight + 625 * height - 5 * age + 5;
  } else if (gender.value === "female") {
    BMR = 10 * weight + 625 * height(m) - 5 * age - 161;
  }
  const activity = document.getElementById("cal-activity").value;
  ogResult = BMR * activity;
  result = ogResult.toFixed(0);
  const calorieREsult = document.getElementById("cal-result");
  calorieREsult.textContent = "Daily Calorie Needs: " + result + " " + "kcal";
// ✅ Reset after calculation
ageInput.value = "";             
gender.value = "";               
weightInput.value = "";         
HeightFtInput.value = "";        
HeightInchInput.value = "";      
HeightCm.value = "";             
        
document.getElementById("cal-activity").value = "";

});

document.querySelectorAll(".height-unit").forEach((select) => {
  select.addEventListener("change", function () {
    const card = this.closest(".card");
    const cmInput = card.querySelector(".height-cm-input");
    const ftInInput = card.querySelector(".height-ftin-input");

    if (this.value === "cm") {
      cmInput.style.display = "block";
      ftInInput.style.display = "none";
    } else {
      cmInput.style.display = "none";
      ftInInput.style.display = "flex";
      ftInInput.style.gap = "0.5rem";
    }
  });
});

document.querySelectorAll(".weight-unit").forEach((select) => {
  select.addEventListener("change", function () {
    const card = this.closest(".card");
    const weightKgIn = card.querySelector(".weight-kg-in");

    if (this.value === "kg") {
      weightKgIn.placeholder = "Weight (kg)";
    } else {
      weightKgIn.placeholder = "Weight (lb)";
    }
  });
});
