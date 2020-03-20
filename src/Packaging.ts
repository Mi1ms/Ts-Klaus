import { Toy } from "./Toy";

export class Packaging {
    public isOpen: boolean = false;
    public toy: any = null;

    constructor() {
    }

    /**
     * open
     */
    public open() {
        this.isOpen = true;        
    }

    /**
     * insert
     */
    public insert(toy: Toy) {
        this.toy = toy;
        this.isOpen = false;
    }
}