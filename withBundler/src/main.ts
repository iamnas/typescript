console.log("HELLO");

let a: number = 20;

const b = 4;

// literral type

type Person = { name: string; age: number; isProgrammer?: boolean };

const person: Person = {
  name: "ajax",
  age: 55,
};

// isProgrammer "?" means it's optional

interface Person2 {
  name: string;
  age: number;
}

const person2: Person2 = {
  name: "ajax",
  age: 55,
};

/////////////////////////////

function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}
sumWithCallback(1, 3, (sum) => {
  console.log(sum);
});

/////
// UNION

type Todo = {
  name: string;
  status: "COMPLEATE" | "INCOMPLEATE";
};

const todo: Todo = { name: "todo", status: "COMPLEATE" };

///Intersections

type Person3 = { name: string; age: number };

type PersonWithId = Person3 & { id: string };

const personWithId: PersonWithId = { name: "bala", age: 22, id: "adjkadak" };

interface PersonInertface {
  name: string;
  age: number;
}

interface PersonWithIdInterface extends PersonInertface {
  id: number;
}

// readonly

type NumberArray = readonly number[];

const newNumber: NumberArray = [1, 2, 3, 4];

// typeOF

const age = getValue("age", { name: "bala", age: 25 });

function getValue(key: keyof Person3, person: Person3) {
  return person[key];
}


// as Const 

const SKILL_LEVELS = ['Beginner','Intermediate','Expert'] as const;

type PersonSkill = {
  skillLevel: (typeof SKILL_LEVELS)[number]
}

