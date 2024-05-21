type TodoP = {
    title: string
    compleated?: boolean
    address?:{
        street?: string
    }
}





type RequiredPick<T,key extends keyof T > = Required<Pick<T,key>> & T

type PrarialPick<T, key extends keyof T > = Partial<Pick<T,key>> & Omit<T,key>



type FormTodoOptioname = Partial<TodoP>
type FormTodo = Required<Pick<TodoP,"title">> & Omit<TodoP,"title">

type FormTodoRP = RequiredPick<TodoP,"title">
type FormTodoPP = PrarialPick<TodoP,"title">


const formTodo :FormTodoPP = {
    title:"baba",
    compleated: true,

}