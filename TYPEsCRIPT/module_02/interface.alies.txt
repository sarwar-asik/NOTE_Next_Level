type User={
    name:string,
    age:number
}
interface IUser {
    name:string,
    age:number
}


interface ExtendUser extends IUser {
    role:string
}

const user5 :ExtendUser={
    name:"TInu",
    age:22,
    role:"admin"
}

type RollNoType = number[]
// or 
interface RollNoType2 {
    [index:number]:string
}


const UserRoll :RollNoType =[20,22,23,24,25]

const UserRoll2 :RollNoType2 =["10","20","30","30"]