const profile = {
  age: 27,
  nameVal: 'ugi',
  classVal: '2',
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const {
  classVal,
  age,
  nameVal,
}: { age: number; nameVal: string; classVal: string } = profile;

const { coords }: { coords: { lat: number; lng: number } } = profile;
