"# NOTE_Next_Level"

## **\*\*\*\*** install node version manager(nvm) **\***

        >> https://github.com/coreybutler/nvm-windows
        >> download expo file
        >> nvm --version (check nvm in terminal)
        >> nvm --list (check node version)
        >> use 16.17.0 (use this node version)

## **\*\***\*\*\*\***\*\*** setup typeScript \***\*\*\*\*\*\***

install typeScript >>
npm i -g typeScript

index.ts >>
const Name : string = "This is first TS File"
console.log(Name);
terminal >>
tsc ./index.ts

        start typeScript : npx  ts-node-dev --respawn ./src/index.ts

## null | unknown | never type

## ?? (nulish coeslancing operaor ) >>

[ const userCheck1 = isAuthentic ?? "Not user"]

## ( as or <> ) >>>>>
 [roll as number]
 [<number> roll]

## use (interface ) for object|function|Array type data 
## use  (type ) for primetive type data  
### Example >>>>>
type UserType1 ={name:string}

interface UserType2 extend UserType1{
     age:number, country:string
}