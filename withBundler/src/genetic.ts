function getSecond<ArrayType>(array: ArrayType[]) {
  return array[1];
}

const num = [1, 2, 3, 4, 5];
const char = ["a", "b", "c", "d", "e"];

const retA = getSecond(num);
const retB = getSecond(char);

type APIResponse<TData extends object = { status: number }> = {
  data: TData;
  isError: boolean;
};

const apiData: APIResponse = {
  data: {
    status: 200,
  },
  isError: false,
};

// Example
// array to object
function aToO<T>(arr: [string, T][]) {
  const obj: {
    [index:string]:T
  } = {};

  arr.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

const arr:[string,number | boolean][] = [
  ["keyOne", 1],
  ["keyTwo", 2],
  ["keyThree", true],
];


console.log(aToO(arr));
