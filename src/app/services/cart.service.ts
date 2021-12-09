import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemsInService: CartItem[] = [];
  cartChanged = new Subject();

  constructor() {}

  calculateSumOfCart() {
    let sumOfCart = 0;
    this.cartItemsInService.forEach(
      (item) => (sumOfCart = sumOfCart + item.cartItem.price * item.quantity)
    );
    this.cartChanged.next();
    return sumOfCart;
  }
}
