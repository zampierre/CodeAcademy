const kelvin = 300
// kelvin up here
let celsius = kelvin - 273.15
// kelvin to celsius
let fahrenheit = celsius * (9 / 5) + 32
// celsius to fahrenheit
let newton = celsius * (33 / 100)
// celsius into newton

celsius = Math.floor(celsius)
fahrenheit = Math.floor(fahrenheit)
newton = Math.floor(newton)
//round number

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} newton.`)
