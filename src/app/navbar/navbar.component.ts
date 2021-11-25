import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sumOfCart = 0;

  constructor(
    private translate: TranslateService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.cartChanged.subscribe(() => {
      this.sumOfCart = 0;
      this.cartService.cartItemsInService.forEach(
        (item) => (this.sumOfCart = this.sumOfCart + item.price)
      );
      console.log('ostukorvi sisu');
    });
    let language = localStorage.getItem('language');
    if (language) {
      this.translate.use(language);
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
