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

## (keyof) use for multi type aggregation >>>

type NewType =keyof PersonsType
