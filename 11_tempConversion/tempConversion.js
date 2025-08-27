const convertToCelsius = function(fahrenheit) {
  // INIT param fahrenheit
  const celcius = (fahrenheit - 32) / 1.8;
  // INIT const celsius with the value (fahrenheit - 32) / (1.8)
  // ROUND celsius
  return celcius;
  // RETURN celsius
};

const convertToFahrenheit = function() {
  // INIT param celsius
  // INIT const fahrenheit with the value (celcius * 1.8) + 32
  // ROUND fahrenheit
  // RETURN fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
