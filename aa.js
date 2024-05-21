function aToO(arr) {
    const obj = {};

    console.log(arr);
    arr.forEach(([key, value,value2]) =>{
        obj[key] = value;
    });
    console.log(obj);
  }
  
  const arr = [
    ["keyOne", 1,100],
    ["keyTwo", 2],
    ["keyThree", 3],
  ];
  
  aToO(arr)