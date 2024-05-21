function checkLength(a:string,b:number){
    return a.length < b
}

type ReturnOflengthCheck  = ReturnType<typeof checkLength>
type Perams  = Parameters<typeof checkLength>