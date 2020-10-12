// The forecast today is 293 Kelvin
const kelvin = 293;
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
var celsius = kelvin - 273;

// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;

//rounding down
fahrenheit = Math.floor(fahrenheit);

console.log("The temperature is " + fahrenheit + " degrees fahrenheit.");
