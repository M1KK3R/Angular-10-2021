import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  editItemForm!: FormGroup;
  categories: string[] = [];
  item!: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemService.getItemsFromDatabase().subscribe((itemsFromDb) => {
      this.itemService.updateItems(itemsFromDb);

      let itemId = Number(this.route.snapshot.paramMap.get('itemId'));

      let itemFound = this.itemService.findItem(itemId);
      if (itemFound) {
        this.item = itemFound;
      }

      this.editItemForm = new FormGroup({
        id: new FormControl(this.item.id),
        title: new FormControl(this.item.title),
        imgSrc: new FormControl(this.item.imgSrc),
        price: new FormControl(this.item.price),
        category: new FormControl(this.item.category),
        isActive: new FormControl(this.item.isActive),
      });
      this.categoryService
        .getCatFromDatabase()
        .subscribe((categoriesFromDb) => {
          this.categories = categoriesFromDb;
          this.categoryService.categoriesInService = categoriesFromDb;
        });
    });
  }

  onSubmit() {
    if (this.editItemForm.valid) {
      this.itemService.editItem(this.item, this.editItemForm.value);
      this.itemService.addItemsToDatabase().subscribe(() => {
        this.router.navigateByUrl('/admin/esemed');
      });
    }
  }
}
