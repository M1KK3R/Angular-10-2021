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
  // images = [700, 533, 807, 124].map(
  //   (n) => `https://picsum.photos/id/${n}/900/500`
  // );
  images = [
    {
      url: 'https://picsum.photos/id/700/900/502',
      header: 'header1',
      text: 'text1',
      alt: 'alt1',
    },
    {
      url: 'https://picsum.photos/id/700/900/503',
      header: 'header2',
      text: 'text2',
      alt: 'alt2',
    },
    {
      url: 'https://picsum.photos/id/700/900/504',
      header: 'header3',
      text: 'text3',
      alt: 'alt2',
    },
    {
      url: 'https://picsum.photos/id/700/900/505',
      header: 'header4',
      text: 'text4',
      alt: 'alt2',
    },
  ];

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
      this.itemService.updateItems(itemsFromDb);
    });
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
