import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  // URLi, sellele vastavuses mingi Clehe
  // path = URL, component = leht
  // {path : "localhost:4200", component: home.component.html}


  {path: "", component: HomeComponent},
  {path: "ShoppingCart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
