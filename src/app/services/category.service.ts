import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesInService: string[] = ["philips", "sony", "dell", "LG"];

  constructor() { }
}
