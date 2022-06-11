import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../_models/Products';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterContentInit {
  Products: Product[];
  simpleProduct: Product[];
  ComplexProduce: Product[];
  syncbtn: Product[];
  ComplexTool: number;
  simpleTool: number;
  flagforfillterall: boolean = true;
  flagforfillterComplex: boolean = false;
  flagforfilltersample: boolean = false;
  syncone: boolean = false;

  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    $('.btn-expand-collapse').on('click', function (e) {
      $('.navbar-primary').toggleClass('collapsed');
    });
    if (!(localStorage.getItem('productslocal') === null)) {
      this.router.data.subscribe((data) => {
        this.Products = data['Products'];
      });
      localStorage.setItem('productslocal', JSON.stringify(this.Products));
    } else {
      this.Products = JSON.parse(localStorage.getItem('productslocal') || '');
    }
    localStorage.setItem('productslocal', JSON.stringify(this.Products));
    this.ComplexTool = this.Products.filter(
      (obj) => obj.category === 'complex'
    ).length;
    this.simpleTool = this.Products.filter(
      (obj) => obj.category === 'simple'
    ).length;
  }
  ngAfterContentInit() {}

  allCatogy() {
    this.Products = this.Products;
    this.flagforfillterall = true;
    this.flagforfillterComplex = false;
    this.flagforfilltersample = false;
    this.syncone = false;
  }
  ComplexCatogy() {
    this.ComplexProduce = this.Products.filter(
      (obj) => obj.category === 'complex'
    );
    this.flagforfillterall = false;
    this.flagforfillterComplex = true;
    this.flagforfilltersample = false;
    this.syncone = false;
  }
  sempleCatogy() {
    this.simpleProduct = this.Products.filter(
      (obj) => obj.category === 'simple'
    );
    this.flagforfillterall = false;
    this.flagforfillterComplex = false;
    this.flagforfilltersample = true;
    this.syncone = false;
  }

  items: number;

  addItem(newItem: number) {
    this.items = newItem;
    console.log(this.items);
    if (this.items != null) {
      this.syncbtn = this.Products.filter((obj) => obj.id === this.items);
      this.flagforfillterall = false;
      this.flagforfillterComplex = false;
      this.flagforfilltersample = false;
      this.syncone = true;
    }
  }
}
