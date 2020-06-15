import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    ProductsComponent,
    SearchComponent,
    FooterComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
