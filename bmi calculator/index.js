let bmi = document.getElementById('BMI')

let height = parseInt(prompt("Enter Your Height"));
let weight = parseInt(prompt("Enter Your Weight"));


console.log(height, weight)
const meterHeight = height / 100

const SquareHeight = meterHeight * meterHeight

const BMI = weight / SquareHeight
bmi.textContent = BMI

console.log(BMI)


