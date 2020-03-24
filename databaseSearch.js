const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
];
//console.log(Object.values(HEROES));
function findOne(arr, query) {
    
 /*  for(let i=0; i<arr.length; i++){
      //console.log(arr[i].id)
      //console.log(Object.values(query))
      if(arr[i].id === Object.values(query)){
          return arr[i];
       } else return null; 
  }  */
  return (
      arr.find(hero =>Object.keys(query).every(
        key=> hero[key] === query[key]))
        );
  
}
let result = findOne(HEROES, { id: 2 });
console.log(result)
