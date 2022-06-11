import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/Products';
import { ProductService } from '../_service/Products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() Products:Product;
  @Output() synccunction=new EventEmitter<number>();
  constructor(private route:ActivatedRoute) {

   }
   public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = 'https://static-01.daraz.com.bd/p/ec92da1bf24b8ed14d916430bb367ff1.jpg';
  }
  ngOnInit(): void {

  }
  onClick(id:any){
    this.synccunction.emit(id);
  }
}
