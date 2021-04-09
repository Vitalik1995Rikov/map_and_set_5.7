let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // Переделал строку на Array. from

keys.push("more");
console.log(keys);