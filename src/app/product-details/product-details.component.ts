import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      data=>{this.product=data['Product']}
    )
    console.log(this.product);
  }
  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = 'https://static-01.daraz.com.bd/p/ec92da1bf24b8ed14d916430bb367ff1.jpg';
  }


}
