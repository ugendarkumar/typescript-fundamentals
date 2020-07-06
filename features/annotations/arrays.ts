const bikeMakers: string[] = ['royal enfield', 'yamaha', 'hero'];

const dates: Date[] = [new Date(), new Date()];

const bikesByMake = [['classic 350'], ['fz15'], ['splendor +']];

// help with inference when extracting values

const bike = bikeMakers[0];
const myBike = bikeMakers.pop();

// prevents incompatible values

//bikeMakers.push(100);

// help with 'map'

bikeMakers.map((bike: string): string => {
  return bike;
});

// flexible array types

const importantDates: (Date | string)[] = [];
importantDates.push('2020-11-11');
importantDates.push(new Date());
//importantDates.push(23)
