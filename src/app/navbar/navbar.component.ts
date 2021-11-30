import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth/auth.service';
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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem('userData') != null;
    this.authService.loggedInChanged.subscribe(
      (loggedIn) => (this.isLoggedIn = loggedIn)
    );

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

  onLogout() {
    this.authService.logout();
  }
}
