function createCharacter(name, nickname, race, origin, attack, defense) {
    console.log(name, nickname, race, origin, attack, defense);
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function () 
        {
            console.log(name, nickname, race, origin, attack, defense);
    
            return `${this.name} is a ${this.race} from ${this.origin}.`
            
        },
        evaluateFight: function (opponent) {
            return `Your opponent takes ${opponent.defence > this.attack ? 0 : this.attack - opponent.defense} 
            damage and you receive ${opponent.attack < this. defense ? 0 : oponent.attack - this.defense} damage"`
        }
    }

}
let cha1 = createCharacter('Gandal the White', 'gandalf', 'Wizard ', 'Middle Earth', 10, 6);;
console.log(cha1);
//createCharacter('Gandal the White', 'gandalf',  'Wizard ', 'Middle Earth' , 10 , 6);