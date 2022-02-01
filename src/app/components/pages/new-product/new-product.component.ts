import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private service: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      unit_in_stock: new FormControl()
    });
  }

  addProduct(){
    let product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      unit_in_stock: this.productForm.value.unit_in_stock
    };

    this.service.addProduct(product).subscribe(res=>{
      console.log(res);
      if(res.msg="Add a product complete."){
        window.alert("Add Complete");
        this.router.navigate(["/product"]);
      }else{
        window.alert("Add Not Complete!!!");
        this.router.navigate(["/product/new"]);
      }
    });
  }

}
