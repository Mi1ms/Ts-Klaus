import { Toy } from './Toy';

export class Pony extends Toy {
    public static _nb: number = 1;
    public id: number;
    
    constructor() {
        super();
        this.id = Pony._nb;
        this.toString();
        Pony._nb++;
    }

    public toString():void {
        
        console.log(
        `Pony ${ this.id } is singing -->
        Dou-double poney, j’fais izi money
        D’où tu m’connais ? Parle moi en billets violets
        Dou-double poney, j’fais izi money`
        );
    }

    public isMoved() {
        super.isMoved('Huuuuuuhu!');
    }
}