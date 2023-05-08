"# NOTE_Next_Level"

## **\*\*\*\*** install node version manager(nvm) **\***

        >> https://github.com/coreybutler/nvm-windows
        >> download expo file
        >> nvm --version (check nvm in terminal)
        >> nvm --list (check node version)
        >> use 16.17.0 (use this node version)

## **\*\***\*\*\*\***\*\*** setup typeScript \***\*\*\*\*\*\***

install typeScript >>

<!-- npm i -g typeScript -->

         [] index.ts >>
          const Name : string = "This is first TS File"
          console.log(Name);
         [] terminal >>
          tsc ./index.ts

         [] npm install typescript --save-dev  || npm i -g typescript
         [] tsc --init
         [] npm i ts-node-dev (for run tsc)
     ** after change tsconfig.ts
        [] tsc


         []  "start": "ts-node-dev --respawn --transpile-only ./src/index.ts",

### change in tsconfig.ts >>>

         create src and dist folders >>
          "rootDir": "./src",
           "outDir": "./dist",

## run folder

    [] start typeScript : npx  ts-node-dev --respawn ./src/index.ts

## Type or interface >>>

     string,object or {} ,[],boolean

## null | unknown | never type

## ?? (nulish coeslancing operaor ) >>

     [ const userCheck1 = isAuthentic ?? "Not user"]

## ( as or <> ) >>>>>

     [roll as number]
     [<number> roll]

## use (interface ) for object|function|Array type data

## use (type ) for primetive type data

### Example >>>>>

     type UserType1 ={name:string}

     interface UserType2 extend UserType1{
     age:number, country:string
     }

## (generic types) >>>

     type GenericTypes<X,Y> = [X,Y]
     const user3 :GenericTypes <string,{title:string,role:string}> = [
     "Sonia",
     {title:"developer",role:"admin"}
     ]

** can change generic parameter number **

## we can use generic interface ,function with multi paraMitre

           <T,K>

## (key of) use for multi type aggregation >>>

          type NewType =key of PersonsType

### (is ) and (instanceof) in function and type

### we can use (public ) and (private) (readonly (protector)) in class constructor

     *** public is default
     but private cannot access from out of class
     read only can not redeclare value
     protector like publice but have some special

### (get) and (set) (static)

          class account {
                 get balance2() {
                     return this.balance;
                 }
               set deposit(amount: number) {
               this.balance = this.balance + amount;
               }
                static  decrement ():number{
        return (Counter.counter--)
    }
          }

          *** we can access any function without call by get and set
          ** set must be a parametre
          ** get must return a value
          ** static can access by class name

### (implements) for using an interface in class

     interface IVehicle2{
          startEngine():void;
      }

     class Vehicle implements IVehicle2{
          test(){
               console.log("")
          }
          startEngine():void{
               console.log("this is startEngine function")
          }
     }

### (abstract) using before a class and using for definite shape

     abstract class VehicleClass {
          constructor(
                    public names: string,
           ) {}
          abstract startEngine():void ;
          abstract  stopEngine(): void ;
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

###