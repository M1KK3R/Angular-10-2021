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
}
