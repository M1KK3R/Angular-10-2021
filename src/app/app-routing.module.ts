import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './home/view/view.component';

const routes: Routes = [
  // URLi, sellele vastavuses mingi Clehe
  // path = URL, component = leht
  // {path : "localhost:4200", component: home.component.html}

  { path: '', component: HomeComponent },
  { path: 'ostukorv', component: CartComponent },
  {
    path: 'admin',
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'lisa-ese', component: AddItemComponent },
      { path: 'muuda-ese/:itemId', component: EditItemComponent },
      { path: 'esemed', component: ViewItemsComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'registreeri', component: SignupComponent },
    ],
  },
  { path: 'ese/:itemId', component: ViewComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
