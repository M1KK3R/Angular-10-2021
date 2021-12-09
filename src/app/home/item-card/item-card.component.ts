import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent implements OnInit {
  @Input('itemInCard') item!: Item;
  @Input() wordCount = 0;

  constructor(
    private cartService: CartService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  onAddToCart(item: Item) {
    let cartIndex = this.cartService.cartItemsInService.findIndex(
      (cartItem) => cartItem.cartItem.id == item.id
    );
    if (cartIndex > -1) {
      this.cartService.cartItemsInService[cartIndex].quantity++;
    } else {
      this.cartService.cartItemsInService.push({ cartItem: item, quantity: 1 });
    }

    this.cartService.cartChanged.next();
    this.cookieService.set(
      'products',
      JSON.stringify(this.cartService.cartItemsInService)
    );
  }
}
