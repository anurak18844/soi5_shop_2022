import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: any;
  productForm!: FormGroup;
  currentProduct: any;
  constructor(private service: ProductService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      unit_in_stock: new FormControl()
    });

    this.activatedRouter.params.subscribe(params=>{
      this.id = params['id'];
    });
    
    this.service.getProductById(this.id).subscribe((res)=>{
      this.currentProduct = res.data;
      this.productForm.controls['name'].setValue(this.currentProduct.name);
      this.productForm.controls['price'].setValue(this.currentProduct.price);
      this.productForm.controls['unit_in_stock'].setValue(this.currentProduct.unit_in_stock);
    });
  }

  updateProduct(){
    let product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      unit_in_stock: this.productForm.value.unit_in_stock
    };

    this.service.updateProduct(product, this.id).subscribe((res)=>{
      window.alert("Edit Complete!");
      this.router.navigate(["/product"]);
    });
  }

}
