import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css'],
})
export class ViewItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // this.items = this.itemService.itemsInService;
    this.itemService.getItemsFromDatabase().subscribe((itemsFromDb) => {
      this.items = itemsFromDb;
      this.itemService.itemsInService = itemsFromDb;
    });
  }

  onDeleteItem(item: Item) {
    let index = this.itemService.itemsInService.indexOf(item);
    this.itemService.itemsInService.splice(index, 1);
    this.itemService.addItemsToDatabase().subscribe();
  }

  onAddItemToDatabase() {
    this.itemService.addItemsToDatabase().subscribe();
  }
}
