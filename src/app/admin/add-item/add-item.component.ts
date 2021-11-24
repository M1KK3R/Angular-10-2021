import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  categories: string[] = [];

  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.itemService.getItemsFromDatabase().subscribe((itemsFromDb) => {
      this.itemService.itemsInService = itemsFromDb;
    });
    this.categories = this.categoryService.categoriesInService;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.itemService.itemsInService.push(form.value);
      this.itemService.addItemsToDatabase().subscribe();
    }
  }
}
