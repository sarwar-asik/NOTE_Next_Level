class Counter {
    static counter:number ;

    // constructor(counter:number){
    //     this.counter =counter
    // }
   static increment():number{
        return (Counter.counter ++)
    }
  static  decrement ():number{
        return (Counter.counter--)
    }
}

const instance1 =new Counter()
const instance2 = new Counter()
// console.log(instance1.increment());
console.log(Counter.increment());


