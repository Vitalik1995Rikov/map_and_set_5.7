// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let map = new Map();
//   for (let value of arr) {
//     let dif = value.toLowerCase().split('').sort().join('');
//     map.set(dif, value);
//   }
//   return Array.from(map.values());
// }

// alert(aclean(arr));

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (let value of arr) {
    let dif = value.toLowerCase().split('').sort().join('');
    map.set(dif, value);
  }
  return Array.from(map.values);
}

alert(aclean(arr)); 

// Сложная задача, несколько раз прогнал, смысл понял, полезно