import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './Product/product.component';
import { RouterModule, Routes} from '@angular/router';
import { ProductDetailComponent } from './Product-details/product-details.component';
import { ProductCreateComponent } from './Product-create/product-create.component';
import { ProductEditComponent } from './Product-edit/product-edit.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductComponent, data: { title: 'Product List'}},
  { path: 'product-details/:id', component: ProductDetailComponent, data: { title: 'Product List'}},
  { path: 'product-create', component: ProductCreateComponent, data: { title: 'Create product'}},
  { path: 'product-edit/:id', component: ProductEditComponent, data: { title: 'Edit product'}},
  {path: '', redirectTo:'/products', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
