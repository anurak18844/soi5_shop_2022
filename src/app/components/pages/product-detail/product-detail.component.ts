import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  currentProduct: any
  reviewForm!: FormGroup;
  constructor(private service: ProductService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      star: new FormControl(),
      comment: new FormControl(),
    });

    this.activatedRouter.params.subscribe(params=>{
      this.id = params['id'];
    });

    this.service.getProductById(this.id).subscribe((res)=>{
      this.currentProduct = res.data;
    });
  }

  createRange(item){
    if(item == null){
      item = 0;
    }
    let a = new Array(item);
    return a
  }

  createRangeBlack(item){
    if(item == null){
      item = 0;
    }
    item = 5-item;
    let a = new Array(item);
    return a
  }

  submitReview(id: any){
    let review = {
      star: this.reviewForm.value.star,
      comment: this.reviewForm.value.comment,
    }
    // alert(id + review.star + review.comment)
    // console.log(id);
    // console.log(review.star);
    // console.log(review.comment);
    this.service.updateReview(review, this.id).subscribe((res)=>{
      this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(()=> this.router.navigate(['/product/detail/'+this.id]));
    });
  }


}
