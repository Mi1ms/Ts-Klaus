export class Toy {
    type: string;

    constructor(kind?: any) {
        this.type = kind;
    }

    getType() : string {
        return this.type;
    }

    isMoved(sound: string) {
        console.log(sound);
    }
}

const toy: Toy = new Toy('eco');