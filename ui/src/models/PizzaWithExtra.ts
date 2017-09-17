import { Pizza } from "./Pizza";
import { Extra } from "./Extra";

export interface PizzaWithExtra {
    pizza: Pizza,
    extras: Array<Extra>,
    total: number,
}
