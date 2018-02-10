function celsiusToFahrenheit(celsiusInput) {
    let celsius = parseFloat(celsiusInput);
    let fahrenheit = (celsius * 1.8 + 32).toFixed(2);
    console.log(fahrenheit);
}

celsiusToFahrenheit(25);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-5.5);
celsiusToFahrenheit(32.3);