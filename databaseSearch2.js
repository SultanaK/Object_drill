const Database = {
    store: {
        heroes: [{
                id: 1,
                name: 'Captain America',
                squad: 'Avengers'
            },
            {
                id: 2,
                name: 'Iron Man',
                squad: 'Avengers'
            },
            {
                id: 3,
                name: 'Spiderman',
                squad: 'Avengers'
            },
            {
                id: 4,
                name: 'Superman',
                squad: 'Justice League'
            },
            {
                id: 5,
                name: 'Wonder Woman',
                squad: 'Justice League'
            },
            {
                id: 6,
                name: 'Aquaman',
                squad: 'Justice League'
            },
            {
                id: 7,
                name: 'Hulk',
                squad: 'Avengers'
            },
        ]
    }
};
Database.findOne = function findOne(query) {
    return this.store.heroes.find(one => Object.keys(query).every(key=>query[key]===one[key]));
    
}
console.log(Database.findOne({
    id: 7}));