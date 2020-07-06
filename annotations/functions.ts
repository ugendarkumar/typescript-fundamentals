const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number) {
  return a + b;
}

const multiply = function (a: number, b: number): number {
  return a + b;
};

const logger = (message: string) => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'cloudy',
};

const showForecast = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

showForecast(todaysWeather);

// other syntax
// const add:(a:number,b:number) => number = (a,b) => {
//   return a+b;
// }
