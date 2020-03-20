export class Toy {
    public type: string;

    constructor(kind?: any) {
        this.type = kind;
    }

    getType() : string {
        return this.type;
    }

    setType(toy: string) {
        this.type = toy;
    }

    isMoved(sound: string) {
        console.log(sound);
    }
}

// const toy: Toy = new Toy('eco');