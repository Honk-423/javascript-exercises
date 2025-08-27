const convertToCelsius = function(fahrenheit) {
  // INIT param fahrenheit
  const celcius = (fahrenheit - 32) / 1.8;
  // INIT const celsius with the value (fahrenheit - 32) / (1.8)
  return +celcius.toFixed(1);
  // RETURN and ROUND celcius to the tenths' place
};

const convertToFahrenheit = function() {
  // INIT param celsius
  // INIT const fahrenheit with the value (celcius * 1.8) + 32
  // RETURN and ROUND fahrenheit to the tenths' place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
