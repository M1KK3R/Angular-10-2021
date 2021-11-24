import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // this.categories = this.categoryService.categoriesInService;
    this.categoryService.getCatFromDatabase().subscribe((categoriesFromDb) => {
      this.categories = categoriesFromDb;
      this.categoryService.categoriesInService = categoriesFromDb;
    });
  }
  onRemoveCategory(category: string) {
    let index = this.categoryService.categoriesInService.indexOf(category);
    this.categoryService.categoriesInService.splice(index, 1);
    this.categoryService.addCatToDatabase().subscribe();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.categoryService.categoriesInService.push(form.value.category);
      this.categoryService.addCatToDatabase().subscribe();
    }
  }

  onAddCatToDatabase() {
    this.categoryService.addCatToDatabase().subscribe();
  }
}
