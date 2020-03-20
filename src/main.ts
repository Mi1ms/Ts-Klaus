import { Toy } from './Toy';
import { Pony } from './Pony';
import { DragonBall, DBHeroe } from './DragonBall';

// import { Elf } from './Elf';

console.log("--- STEP #1 ---");

const pony: Pony = new Pony();
const goku: DragonBall = new DragonBall(DBHeroe.SANGOKU);

pony.isMoved();
goku.isMoved();

// console.log("--- STEP #2 ---")

// const majdi: Elf = new Elf("makiboto")
// const box: Packaging = new Box()
// majdi.pack(box, goku)
// box.open()
// majdi.pack(box, goku)

// const paper: Packaging = new GiftWrap()
// majdi.pack(paper, pony)
// majdi.pack(paper, pony)

// const toy: Toy = majdi.unpack(paper)
// console.log(toy === pony)
// try {
//   majdi.unpack(paper);
// } catch (e) {
//   console.log(e.message);
// }