function generate() {
    let age = document.getElementById("item1-2-2").value;
    let gender = document.getElementById("item01-3-2").value;
    let height = document.getElementById("item01-4-2").value;
    let weight = document.getElementById("item01-5-2").value;
    let display = document.querySelector(".display");
    height = parseFloat(height);
    weight = parseFloat(weight);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        display.innerHTML = "Please enter valid height and weight!";
        display.style.color = "red";
        return;
    }
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); 
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    display.innerHTML = `Age: ${age} <br> Gender: ${gender} <br> BMI: ${bmi} (${category})`;
    display.style.color = "white";
}
