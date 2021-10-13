import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  

  cartItems: any[] = [];
  sumOfCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    this.cartItems.forEach(item => this.sumOfCart = this.sumOfCart + item.hind)
  }
  deleteItemFromCart(cartItem: any) {    
    let index = this.cartService.cartItemsInService.indexOf(cartItem);
    this.cartService.cartItemsInService.splice(index,1);
    this.sumOfCart = 0;
    this.cartItems.forEach(item => this.sumOfCart = this.sumOfCart + item.hind)
  }
  emptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    this.cartItems.forEach(item => this.sumOfCart = this.sumOfCart + item.hind)

  }



}
