import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  sortTitleAsc = true;
  sortPriceAsc = true;
  wordCount = 3;

  constructor(
    private cartService: CartService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    // this.items = this.itemService.itemsInService
    this.itemService.getItemsFromDatabase().subscribe((itemsFromDb) => {
      this.items = itemsFromDb;
      this.itemService.itemsInService = itemsFromDb;
    });
  }

  onAddToCart(item: Item) {
    this.cartService.cartItemsInService.push(item);
  }

  onSortByTitle() {
    if (this.sortTitleAsc) {
      this.items.sort((currentItem, nextItem) =>
        currentItem.title.localeCompare(nextItem.title)
      );
      this.sortTitleAsc = false;
    } else {
      this.items.sort((currentItem, nextItem) =>
        nextItem.title.localeCompare(currentItem.title)
      );
      this.sortTitleAsc = true;
    }
  }

  onSortByPrice() {
    if (this.sortPriceAsc) {
      this.items.sort(
        (currentItem, nextItem) => currentItem.price - nextItem.price
      );
      this.sortPriceAsc = false;
    } else {
      this.items.sort(
        (currentItem, nextItem) => nextItem.price - currentItem.price
      );
      this.sortPriceAsc = true;
    }
  }

  wordCountSlider() {}
}
