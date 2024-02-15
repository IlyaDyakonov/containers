export class Character {
    constructor(squad) {
        this.squad = squad;
    }
}

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(player) {
        if (Array.from(this.members).some(member => member.squad === player)) {
            throw new Error(`Игрок ${player} уже есть в команде!`);
        } else {
            const character = new Character(player);
            this.members.add(character);
        }
    }

    addAll (...players) {
        for (let player of players) {
            let playerExists = false;
            for (let member of this.members) {
                if (member.squad === player) {
                    playerExists = true;
                    break;
                }
            }
            if (!playerExists) {
                const character = new Character(player);
                this.members.add(character);
                }
            }
        }

    toArray () {
        const arrayName = Array.from(this.members, charact => charact.squad);
        return arrayName;
    }
}

// module.exports = Team;
// const one = new Team();
// one.addAll("Silverhend", "Si", "Si", "Sil");
// one.add("Silver");
// one.add("Silver");
// one.toArray();
// console.log(one);
