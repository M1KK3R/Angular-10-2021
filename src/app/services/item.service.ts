import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsInService: any[] = [
    {pealkiri: 'ese1', hind: 100}, // index - 0
    {pealkiri: 'ese2', hind: 200}, // index - 1
    {pealkiri: 'ese3', hind: 300}, // index - 2 
  ];

  constructor() { }
}
