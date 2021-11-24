import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoriesInService: string[] = [];

  // categoriesInService: string[] = ['sony', 'electronics', 'LG'];

  constructor(private http: HttpClient) {}

  addCatToDatabase() {
    return this.http.put(
      'https://webshop-10-2021-8005c-default-rtdb.europe-west1.firebasedatabase.app/categories.json',
      this.categoriesInService
    );
  }

  getCatFromDatabase() {
    return this.http.get<string[]>(
      'https://webshop-10-2021-8005c-default-rtdb.europe-west1.firebasedatabase.app/categories.json'
    );
  }
}
