import { PizzaWithExtra } from "./PizzaWithExtra";

export interface Order {
    pizzas: Array<PizzaWithExtra>,
    name: string,
    address: string,
    total: number,
}
