function createCharacter() {
    
    return {
        name: 'Gandalf the White',
        Nickname: 'gandalf',
        Race: 'Wizard',
        Origin: 'Middle Earth',
        attack:10,
        Defense:6,
        describe: function () {
        console.log(`${this.name} is a ${this.Race} from ${this.rigin}.`);},
        evaluateFight: function(){
            
        }
    };
}
let cha1 = createCharacter();
//console.log(cha1);
console.log(cha1.describe());