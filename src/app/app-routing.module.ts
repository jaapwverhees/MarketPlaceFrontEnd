import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { CreateAccountComponent} from './components/create-account/create-account.component';
import {ProductsComponent} from './components/products/products.component';


const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'createAccount', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
