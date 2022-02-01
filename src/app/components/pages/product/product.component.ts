import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  constructor(private service: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe((res)=>{
      this.products = res.data;
    });
  }

  deleteProduct(id:any){
    if(confirm("Confirm Delete??")){
      this.service.deleteProduct(id).subscribe((res)=>{
        this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(()=> this.router.navigate(['/product']));
      });
    }
  }
}
