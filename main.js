// Set constant variable kelvin
const kelvin = 293

// converrt kelvin to celsius (-273)
var celsius = kelvin - 273

// convert celsius to fahrenheit with the equation F = C*(9/5) +32
var fahrenheit = celsius * (9/5) + 32

//round down to the greatest integer less than or equal to the fahrenheit calculated value

var TEMPERATURE = Math.floor(fahrenheit)

console.log(`The temperature is ${TEMPERATURE} degrees Fahrenheit.`);
