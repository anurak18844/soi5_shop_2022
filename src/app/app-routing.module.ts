import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { MainComponent } from './components/pages/main/main.component';
import { NewProductComponent } from './components/pages/new-product/new-product.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { ProductComponent } from './components/pages/product/product.component';

const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "product",  component: ProductComponent },
    { path: "product/detail/:id", component: ProductDetailComponent },
    { path: "product/new", component: NewProductComponent },
    { path: "product/edit/:id", component: EditProductComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
