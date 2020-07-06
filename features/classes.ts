class Vehicle {
  // color: string = 'red';
  // color: string;
  constructor(protected color: string) {}

  public drive(): void {
    console.log('chugga chugga', this.color);
  }
  protected honk(): void {
    console.log('beep');
  }
}

// protected can't be called anywhere except at sub classes

const bike = new Vehicle('blue');
//bike.honk()
bike.drive();
//console.log(bike.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  superDrive(): void {
    this.drive();
    this.honk();
    console.log('hello ', this.color);
  }
}

const car = new Car(4, 'orange');

car.superDrive();
//car.honk();
