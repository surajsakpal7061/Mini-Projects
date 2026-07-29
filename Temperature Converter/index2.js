const from = document.getElementById("from");
const to = document.getElementById("to");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("convertedValue");

btn.addEventListener("click", convertTemperature);

function convertTemperature() {

    let value = Number(input.value);

    if (isNaN(value)) {
        result.innerText = "Please enter a valid number.";
        return;
    }

    let converted;

    switch (`${from.value}-${to.value}`) {

        case "celsius-celsius":
            converted = value;
            break;

        case "celsius-fahrenheit":
            converted = (value * 9 / 5) + 32;
            break;

        case "celsius-kelvin":
            converted = value + 273.15;
            break;

        case "fahrenheit-celsius":
            converted = (value - 32) * 5 / 9;
            break;

        case "fahrenheit-fahrenheit":
            converted = value;
            break;

        case "fahrenheit-kelvin":
            converted = (value - 32) * 5 / 9 + 273.15;
            break;

        case "kelvin-celsius":
            converted = value - 273.15;
            break;

        case "kelvin-fahrenheit":
            converted = (value - 273.15) * 9 / 5 + 32;
            break;

        case "kelvin-kelvin":
            converted = value;
            break;

        default:
            result.innerText = "Invalid Conversion";
            return;
    }

    result.innerText = `Result: ${converted.toFixed(2)} ${to.value}`;
}