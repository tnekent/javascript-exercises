const convertToCelsius = function(tempF) {
  let tempC = 5 / 9 * (tempF - 32);
  return roundToOneDecimal(tempC);
};

const convertToFahrenheit = function(tempC) {
  let tempF = (9 / 5 * tempC) + 32;
  return roundToOneDecimal(tempF);
};

const roundToOneDecimal = function(num) {
  return Number(num.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
