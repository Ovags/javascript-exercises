const ftoc = function(tempInFahrenheit) {
  let tempInCelsius=(tempInFahrenheit-32)/1.8;
  if (!Number.isInteger(tempInCelsius)){
    return parseFloat((tempInCelsius).toFixed(1));
  }return tempInCelsius;
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
