function unique(arr) {
    let set = new Set();
    return arr.map(item => set.add(item));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log(unique(values));  // получил не то, что хотел
  // получился массив из 9 set, потому что map - возвращает массив.
  // правильное решение посмотрел, понял в чем суть

 

//   function unique(arr) {
//     return Array.from(new Set(arr));
//   }