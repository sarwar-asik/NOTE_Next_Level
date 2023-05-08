class Parents {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: string): string {
    return ` This  ${this.name} will sleep for ${hours}`;
  }
}

// class Student {

//   name: string;
//   age: string;
//   address: string;
//   constructor(name: string, age: string, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   makeSleep(hours: string): string {
//     return ` This  ${this.name} will sleep for ${hours}`;
//   }
// }

class Student extends Parents {
    constructor (name:string,age:number,address:string){
        super(name,age,address)
    }
}

const Student1 = new Student("Asims",20,"Dhaka 2201")

// class Teacher {
//   name: string;
//   age: string;
//   address: string;
//   designation: string; /// different
//   constructor(name: string, age: string, address: string, designation: string) {
//     this.address = address;
//     this.age = age;
//     this.name = name;
//     this.designation = designation;
//   }
//   makeSleep(hours: string): string {
//     return ` This  ${this.name} will sleep for ${hours}`;
//   }
//   takeCLass(classes: number): string {
//     return `The  ${this.name} take class ${classes} in a day`;
//   } // different//
// }



class Teacher extends Parents {
 
  designation: string; /// different

  constructor(name: string, age: number, address: string, designation: string) {
    super(name,age,address)
    this.designation = designation;
  }
  makeSleep(hours: string): string {
    return ` This  ${this.name} will sleep for ${hours}`;
  }
  takeCLass(classes: number): string {
    return `The  ${this.name} take class ${classes} in a day`;
  } // different//
}

const Teacher1 = new Teacher("Asim sir",33,"Dhaka","Noakhali")



