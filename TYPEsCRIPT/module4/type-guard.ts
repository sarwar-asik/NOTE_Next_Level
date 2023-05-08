// const colors2 = require("colors");
// colors2.enable()
import "colors";
type Alphaneumeric = string | number;

function add(
  para1: Alphaneumeric,
  para2: Alphaneumeric
): Alphaneumeric | undefined {
  if (typeof para1 === "number" && typeof para2 === "number") {
    return para1 + para2;
  } else {
    return para1.toString() + para2.toString();
  }
}

type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: "admin";
};
add("Zanku","admin")

function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    return ` I am admin my role is ${user.name}`;
  } else {
    return ` I am a normal use ${user.name}`;
  }
}

const normalUser1: NormalUserType = { name: "Mr Gillu" };
const adminUser1: AdminUserType = { name: "Mr Tillu", role: "admin" };

console.log(getUser(normalUser1).green.bold);
console.log(getUser(adminUser1).green.bold);

class Animal2 {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(` `);
  }
}

class Dog2 extends Animal2 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(` Kutta is barking`);
  }
}

class Cat2 extends Animal2 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMew() {
    console.log(`Bilai is Mew `);
  }
}


function getAnimals2(obj:Animal2){
        if(obj instanceof Dog2 ){
            obj.makeBark()
        }
        else if(obj instanceof Cat2){
            obj.makeMew()
        }
        else{
            obj.makeSound()
        }

}

const animal = new Dog2("German", "Dog");
console.log(getAnimals2(animal))


// console.log(colors2);
