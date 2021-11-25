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
      this.itemService.updateItems(itemsFromDb);
    });
  }

  onDeleteItem(item: Item) {
    this.itemService.deleteItem(item);
    this.itemService.addItemsToDatabase().subscribe();
  }

  onAddItemToDatabase() {
    this.itemService.addItemsToDatabase().subscribe();
  }

  onChangeActive(item: Item) {
    // let index = this.itemService.itemsInService.indexOf(item);
    // let itemChange = this.itemService.itemsInService[index];
    item.isActive = !item.isActive;
    this.itemService.addItemsToDatabase().subscribe();
  }
}
