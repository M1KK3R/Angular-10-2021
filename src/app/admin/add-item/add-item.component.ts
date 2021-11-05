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
  categories: string[] =[];

  constructor(private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
    console.log(form.value);
    console.log(form);

    this.itemService.itemsInService.push(form.value);   
    
    }
  }

}
