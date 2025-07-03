const bmiResult = document.getElementById("bmi-result");
const bmiBtn = document.getElementById("bmi-btn");
const bmi = document.getElementById("bmi");

bmiBtn.addEventListener("click", function () {
  bmiResult.textContent = "Result: ";
  const weightIn = document.getElementById("weight-in");
  const weightInput = weightIn.querySelector(".weight-kg-in");
  const bmiCategory = bmi.querySelector("#bmi-category")
 const heightM = bmi.querySelector(".height-m")
  let weight;
  const bmiWeight = bmi.querySelector(".weight-unit");
  if (bmiWeight.value === "kg") {
    weight = parseFloat(weightInput.value);
  } else {
    weight = parseFloat(weightInput.value * 0.453592);
  }
  const bmiHeightUnit = bmi.querySelector(".height-unit");
  const bmiHeightCmInput = bmi.querySelector(".height-cm");
  const bmiHeightFtInput = bmi.querySelector(".height-ft");
  const bmiHeightInchInput = bmi.querySelector(".height-in");
  let height;
  if (bmiHeightUnit.value === "cm") {
    height = parseFloat(bmiHeightCmInput.value / 100);
  } else {
    height = parseFloat(bmiHeightFtInput.value * 0.3048);
    height += parseFloat(bmiHeightInchInput.value * 0.0254);
  }
  let ogResult = weight / (height * height);
  let result = ogResult.toFixed(2)
  heightM.textContent = "Height in Meter: " + height.toFixed(2)
  bmiResult.textContent += result
  if (result>= 40.00){
    bmiCategory.textContent = "Class III obesity"
    bmiCategory.style.backgroundColor = "#8B0000";
  }
  else if (result>=35.00 && result<40.00){
    bmiCategory.textContent= "Class II obesity"
    bmiCategory.style.backgroundColor = "#DC143C"
  }
  else if (result >=30.00 && result< 35.00){
    bmiCategory.textContent= "Class I obesity"
    bmiCategory.style.backgroundColor = "#FF4500"
  }
  else if (result>=25.00 && result<30.00){
    bmiCategory.textContent="Overweight"
    bmiCategory.style.backgroundColor = "#FFD700"
  }
  else if (result>=18.50 && result<25.00){
    bmiCategory.textContent ="Normal weight"
    bmiCategory.style.backgroundColor = "#4CAF50"
  }
  else {
    bmiCategory.textContent= "Underweight"
    bmiCategory.style.backgroundColor = "#87CEFA"
  }
  weightInput.value = "";
  bmiHeightCmInput.value = "";
  bmiHeightFtInput.value =""
  bmiHeightInchInput.value=""
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
