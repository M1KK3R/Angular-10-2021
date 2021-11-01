import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesInService: any[] = ["philips", "sony", "dell", "LG"];

  constructor() { }
}
