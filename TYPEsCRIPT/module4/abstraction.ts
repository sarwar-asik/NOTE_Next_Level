interface IVehicle {
  name: string;
  model: string;
}

const vehicle: IVehicle = {
  name: "car",
  model: "BMW 220",
};

interface IVehicle2 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle2 {
  constructor(
    public names: string,
    public brand: string,
    public model: string
  ) {
    // this.names=names
    // this.brand =brand;
    // this.model =model
  }
  test() {
    console.log("");
  }
  startEngine(): void {
    console.log("Start engine ");
  }
  stopEngine(): void {
    console.log("stop engine");
  }
  move(): void {
    console.log("move purpose");
  }
}

const vehicle5 = new Vehicle("car", "Toyota", "333");

console.log(vehicle5);

// another example ////
 
abstract class VehicleClass {
  constructor(
    public names: string,
    public brand: string,
    public model: string
  ) {
    // this.names=names
    // this.brand =brand;
    // this.model =model
  }
  test() {
    console.log("");
  }
 abstract startEngine():void ;

 abstract  stopEngine(): void
  move(): void {
    console.log("move purpose");
  }
}

class Car3 extends VehicleClass {
    startEngine(): void {
        console.log('this is start engine');
    }
    stopEngine(): void {
        console.log('this is stop engine')
    }
}
