const drinkInfo = {
  color: 'brown',
  isCarbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

// type to maintain same position of values inside array
const pepsi: [string, boolean, number] = ['brown', true, 40];

const sprite: Drink = ['clear', true, 40];

const tea: Drink = ['brown', true, 0];

// able to change value position  causes error
// pepsi[0] = true;
// pepsi[1] = 'brown';

const carSpecs = [234, 2345];

const carStats = {
  horsePower: 234,
  weight: 3354,
};
