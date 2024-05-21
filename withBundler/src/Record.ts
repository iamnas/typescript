

type PersonRecord = {
    name: string
    age:number
}


type PersonGroupByName = {
    [index: string]: PersonRecord[]
}


type PersonGroupByName2 = Record<PersonRecord["name"],PersonRecord[]>