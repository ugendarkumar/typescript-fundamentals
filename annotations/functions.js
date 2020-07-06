var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
function divide(a, b) {
    return a + b;
}
var multiply = function (a, b) {
    return a + b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
var forecast = {
    date: new Date(),
    weather: 'cloudy'
};
var showForecast = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.weather);
};
showForecast(forecast);
// other syntax
// const add:(a:number,b:number) => number = (a,b) => {
//   return a+b;
// }
