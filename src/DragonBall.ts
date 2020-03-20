import { Figurine } from './Figurine';
import { Toy } from './Toy';

const enum DBHeroe {
    SANGOKU = "Sangoku",
    BEJITA = "Bejita",
    BEERUS = "Beerus",
    KAMESENNIN = "Kamesennin"
}

class DragonBall extends Figurine {
    private static _character: DBHeroe ;

    constructor(character: DBHeroe) {
        super();
        console.log(`
        ${character} is singing -->
            CHA-LA HEAD CHA-LA
            Nani ga okite mo kibun wa heno-heno kappa
            CHA-LA HEAD CHA-LA
            Mune ga pachi-pachi suru hodo
            Sawagu Genki-Dama --Sparking !
        `);
    }

    public isMoved() {
        super.isMoved('Kamé Hamé Ha!');
    }
}
const toy: Toy = new Toy('eco');

export {
    DragonBall,
    DBHeroe
}