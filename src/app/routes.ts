import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductResolver } from "./_resolver/Product.resolver";
import { ProductDetailsResolver } from "./_resolver/ProductDetails.resolver";

export const appRoutes: Routes = [
    { path: '', component: DashboardComponent, resolve: {
        Products: ProductResolver
      }
    },
    {
        path: 'Product/:id', component: ProductDetailsComponent, resolve: {
          Product: ProductDetailsResolver
        }
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
