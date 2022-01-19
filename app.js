
// solution 1
// function killer(suspectInfo, dead) {
//   return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
//  }

// solution 2
// function killer(suspectInfo, dead) {
  
//   for (let name in suspectInfo) {
//     if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
//       return name;
//     }
//   }
// }

// solution 3
// function killer(obj, arr) {
//   for (const key in obj){
//     let same = 0;
//     for(let i = 0;i<arr.length;i++){
//       if(obj[key].includes(arr[i])){
//         same++
//       }
//        if(same === arr.length){
//          return key
//        }
//     }
//   }
//   }

// solution 4
  // function killer(obj, dead) {
  //   for (let i in obj) 
  //     if (obj[i].filter(i => dead.includes(i)).length == dead.length) return i
  // }

// solution 5
  // const killer = (suspectInfo, dead) =>
  // Object.keys(suspectInfo).find(val => dead.every(v => suspectInfo[val].includes(v)));

 // solution 6
  function killer(suspectInfo, dead) {
    return  Object.entries(suspectInfo).find(([key, value]) => value.filter(num => dead.includes(num)).length==dead.length )[0]
  }

  
  console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']},['Lucas', 'Bill']));

  document.writeln(killer({'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']},['Lucas', 'Bill']))
 