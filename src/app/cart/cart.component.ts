import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  sumOfCart = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    this.cartItems.forEach(
      (item) => (this.sumOfCart = this.sumOfCart + item.cartItem.price)
    );
  }
  onDeleteItemFromCart(cartItem: CartItem) {
    let index = this.cartService.cartItemsInService.indexOf(cartItem);
    this.cartService.cartItemsInService.splice(index, 1);
    this.calculateSumOfCart();
  }

  onDeleteOneFromCart(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.calculateSumOfCart();
    } else {
      this.onDeleteItemFromCart(cartItem);
    }
  }

  onAddOneFromCart(cartItem: CartItem) {
    cartItem.quantity++;
    this.calculateSumOfCart();
  }

  emptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.calculateSumOfCart();
  }

  private calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartItems.forEach(
      (item) =>
        (this.sumOfCart = this.sumOfCart + item.cartItem.price * item.quantity)
    );
    this.cartService.cartChanged.next();
  }
}
