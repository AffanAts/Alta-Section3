//pembulatan nilai pada value didalam array
let arr = [1.5, 2.56, 5.1, 12.33];
const newArr = arr.map((array) => Math.round(array));

console.log(newArr);