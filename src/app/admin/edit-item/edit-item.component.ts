import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  editItemForm: any;
  categories: any[] =[];
  item: any;
  

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("itemId");
    console.log(id);

    this.item = this.itemService.itemsInService.find(item => item.title == id);
    console.log(this.item)

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
    console.log(this.editItemForm);
    console.log(this.editItemForm.value)

    let index = this.itemService.itemsInService.indexOf(this.item);
    this.itemService.itemsInService[index] = this.editItemForm.value;

    // this.itemService.itemsInService.push(form.value);
    
    }
  }

}