let people = [
    {'name': 'jon', 'jobTitle': 'Manager', 'boss': true},
    {'name': 'sasha', 'jobTitle': 'IT Manager', 'boss': true},
    {'name': 'bill', 'jobTitle': 'Business Manager', 'owner': true},

]
for(let key in people){
    console.log(people[key]);
}

//additional to drill 

// const findBoss = people.some(person => person.boss === true);
// console.log(`${.jobTitle} ${people.name} reports to ${people.boss}`); // true

people.forEach((element, index, array) => {
    if(element.boss === true && element.owner === true){
        let nameofOwner = element.owner === true;
        console.log(`${element.jobTitle} ${element.name} reports to ${nameOfOwner}`)
        // console.log(element.name); // 100, 200, 300
        // console.log(element.jobTitle); // 0, 1, 2
        // console.log(element.boss); // same myArray object 3 times
    }
});