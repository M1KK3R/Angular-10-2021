import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(
    private cartService: CartService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    if (this.cookieService.get('products')) {
      this.cartItems = JSON.parse(this.cookieService.get('products'));
    } else {
      this.cartItems = this.cartService.cartItemsInService;
    }
    this.sumOfCart = this.cartService.calculateSumOfCart();
  }

  onDeleteItemFromCart(cartItem: CartItem) {
    let index = this.cartService.cartItemsInService.indexOf(cartItem);
    this.cartService.cartItemsInService.splice(index, 1);
    this.sumOfCart = this.cartService.calculateSumOfCart();
    this.cookieService.set(
      'products',
      JSON.stringify(this.cartService.cartItemsInService)
    );
  }

  onDeleteOneFromCart(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      let index = this.cartService.cartItemsInService.findIndex(
        (item) => item.cartItem.id == cartItem.cartItem.id
      );
      this.cartService.cartItemsInService[index].quantity--;
      this.cartItems = this.cartService.cartItemsInService;
      this.sumOfCart = this.cartService.calculateSumOfCart();
    } else {
      this.onDeleteItemFromCart(cartItem);
    }
    this.cookieService.set(
      'products',
      JSON.stringify(this.cartService.cartItemsInService)
    );
  }

  onAddOneFromCart(cartItem: CartItem) {
    let index = this.cartService.cartItemsInService.findIndex(
      (item) => item.cartItem.id == cartItem.cartItem.id
    );
    this.cartService.cartItemsInService[index].quantity++;
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = this.cartService.calculateSumOfCart();
    this.cookieService.set(
      'products',
      JSON.stringify(this.cartService.cartItemsInService)
    );
  }

  emptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.cartService.calculateSumOfCart();
    this.cookieService.set(
      'products',
      JSON.stringify(this.cartService.cartItemsInService)
    );
  }
}
