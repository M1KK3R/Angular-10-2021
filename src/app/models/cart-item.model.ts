import { Item } from './item.model';

export class CartItem {
  constructor(public cartItem: Item, public quantity: number) {}
}
