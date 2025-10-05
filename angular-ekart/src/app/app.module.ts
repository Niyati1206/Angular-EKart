import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TopMenuComponent } from './components/header/top-menu/top-menu.component';
import { MainMenuComponent } from './components/header/main-menu/main-menu.component';
import { ContainerComponent } from './components/container/container.component';
import { SearchComponent } from './components/container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/container/product-list/product-list.component';
import { ProductComponent } from './components/container/product-list/product/product.component';
import { FilterComponent } from './components/container/product-list/filter/filter.component';
import { ProductDetailComponent } from './components/container/product-list/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './components/container/featured-brands/featured-brands.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
