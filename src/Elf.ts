import { Packaging } from "./Packaging";
import { Toy } from "./Toy";

export class Elf {
    private _nickname: string;

    constructor(_nickname: string) {
        this._nickname = _nickname;
    }

    pack(packaging: Packaging, toy: Toy) {
        if (!packaging.isOpen) {
            console.log("Sorry this package is not open");
        } else if (typeof packaging.toy == "string") {
            console.log("Sorry this package already filled");
            
        } else {
            packaging.insert(toy)
            console.log(`Yeaaaah! Just packing the toy ${toy.getType()}`);   
        }
    }

    unpack(packaging: Packaging) : Toy {
        if (packaging.isOpen || packaging.toy == null) {
            console.log('Sorry this package is already empty');
        } else {
            console.log(`Ooooooh! Just unpacking the toy ${packaging.toy.getType()}`);
        }
        return packaging.toy;
    }

    getNickname(): string {
        return this._nickname;
    }

    setNickname(nickname: string) {
        this._nickname = nickname
    }
}