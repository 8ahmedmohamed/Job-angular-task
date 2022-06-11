import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Product } from "../_models/Products";
import * as ProductsService from "../_service/Products.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ProductDetailsResolver implements Resolve<Product>{
    constructor(private productService:ProductsService.ProductService){}
    resolve(route:ActivatedRouteSnapshot):Observable<Product>{
        return this.productService.getProductxById(route.params["id"]);
        console.log(route.params["id"]);
    }
}