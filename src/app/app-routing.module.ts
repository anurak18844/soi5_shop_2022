import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { NewProductComponent } from './components/pages/new-product/new-product.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { ProductComponent } from './components/pages/product/product.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "product",  component: ProductComponent, canActivate: [ AuthGuard ] },
    { path: "product/detail/:id", component: ProductDetailComponent ,canActivate: [ AuthGuard ]},
    { path: "product/new", component: NewProductComponent ,canActivate: [ AuthGuard ]},
    { path: "product/edit/:id", component: EditProductComponent ,canActivate: [ AuthGuard ]},
    {path : "login", component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
