import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';
import { CartItem } from '../models/cart-item.model';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sumOfCart = 0;
  isLoggedIn = false;

  constructor(
    private translate: TranslateService,
    private cartService: CartService,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem('userData') != null;
    this.authService.loggedInChanged.subscribe(
      (loggedIn) => (this.isLoggedIn = loggedIn)
    );

    if (this.cookieService.get('products')) {
      this.cartService.cartItemsInService = JSON.parse(
        this.cookieService.get('products')
      );
      this.sumOfCart = this.cartService.calculateSumOfCart();
    }
    this.cartService.cartChanged.subscribe(() => {
      this.sumOfCart = 0;
      this.cartService.cartItemsInService.forEach(
        (item) =>
          (this.sumOfCart =
            this.sumOfCart + item.cartItem.price * item.quantity)
      );
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

  onLogout() {
    this.authService.logout();
  }
}
