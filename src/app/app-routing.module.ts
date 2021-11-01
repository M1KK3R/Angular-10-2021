import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './home/view/view.component';

const routes: Routes = [
  
  // URLi, sellele vastavuses mingi Clehe
  // path = URL, component = leht
  // {path : "localhost:4200", component: home.component.html}


  {path: "", component: HomeComponent},
  {path: "ostukorv", component: CartComponent},
  {path: "admin", component: AdminHomeComponent},
  {path: "admin/lisa-ese", component: AddItemComponent},
  {path: "admin/muuda-ese/:itemId", component: EditItemComponent},
  {path: "admin/esemed", component: ViewItemsComponent},
  {path: "admin/category", component: CategoryComponent},
  {path: "ese/:itemId", component: ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
