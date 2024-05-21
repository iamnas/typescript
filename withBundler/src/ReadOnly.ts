
type PersonRead = {
    name: string
    age:number
}


type FinalTodo = Readonly<PersonRead>