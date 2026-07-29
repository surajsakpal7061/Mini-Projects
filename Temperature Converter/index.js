let from = document.getElementById('from');
let to = document.getElementById('to');
let inputValue = document.getElementById('input');
let btn = document.getElementById('btn');
let convertValue = document.getElementById('convertedValue');

btn.addEventListener('click', () => {
    Calculate()
    console.log("ok")
    convertValue.textContent = convertedValue;
    console.log(convertedValue)
})

let convertedValue;


function CelsiusToFahrenheit(input) {
    console.log("fcall")
    return (input * 9 / 5) + 32
}
function CelsiusToKelvin(input) {
    console.log("fcall")
    return input + 273.15
}

function FahrenheitToCelsius(input) {
    console.log("fcall")
    return (input - 32) * 5 / 9
}

function FahrenheitToKelvin(input) {
    console.log("fcall")
    return (input - 32) * 5 / 9 + 273.15;
}

function KelvinToFahrenheit(input) {
    console.log("fcall")
    return input - 273.15
}

function KelvinToCelsius(input) {
    console.log("fcall")
    return input * (9 / 5) - 459.67
}

function Calculate() {

    let fromValue = from.value;
    let toValue = to.value;
    let input = parseInt(inputValue.value)

    switch (true) {
        case fromValue === "Celsius" && toValue === "Fahrenheit":
            console.log("cmatch")
            convertedValue = CelsiusToFahrenheit(input)
            break;

        case fromValue === "Celsius" && toValue === "Kelvin":
            convertedValue = CelsiusToKelvin(input)
            break;

        case fromValue === "Fahrenheit" && toValue === "Celsius":
            convertedValue = FahrenheitToCelsius(input)
            break;

        case fromValue === "Fahrenheit" && toValue === "Kelvin":
            convertedValue = FahrenheitToKelvin(input)
            break;

        case fromValue === "Kelvin" && toValue === "Celsius":
            convertedValue = KelvinToCelsius(input)
            break;

        case fromValue === "Kelvin" && toValue === "Fahrenheit":
            convertedValue = KelvinToFahrenheit(input)
            break;
    }

}



// Celsius → Fahrenheit  Kelvin

