import { Product } from './_models/Products';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './_service/Products.service';
import { ProductResolver } from './_resolver/Product.resolver';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ProductDetailsResolver } from './_resolver/ProductDetails.resolver';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    ProductResolver,
    ProductDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
