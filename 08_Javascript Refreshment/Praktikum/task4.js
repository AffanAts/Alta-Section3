//mengubah tanda (-) menjadi (/)
let bdays = ['10-17','05-19','20-19'];
let newDays = bdays.map(birthDay => birthDay.replace('-','/'));

console.log(newDays);