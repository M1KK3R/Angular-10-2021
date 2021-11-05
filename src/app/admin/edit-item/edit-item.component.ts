import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  editItemForm!: FormGroup;
  categories: string[] =[];
  item!: Item;
  

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("itemId");
        
    let itemFound = this.itemService.itemsInService.find(item => item.title == id);
    if (itemFound) {
      this.item = itemFound;
    }
    
    this.editItemForm = new FormGroup({
      title: new FormControl(this.item.title),
      imgSrc: new FormControl(this.item.imgSrc),
      price: new FormControl(this.item.price),
      category: new FormControl(this.item.category),
      isActive: new FormControl(this.item.isActive),
    })
    
    this.categories = this.categoryService.categoriesInService
  }

  onSubmit() {
    if (this.editItemForm.valid) {
    
    let index = this.itemService.itemsInService.indexOf(this.item);
    this.itemService.itemsInService[index] = this.editItemForm.value;
    }
  }

}