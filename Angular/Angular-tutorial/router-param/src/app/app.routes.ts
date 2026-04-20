import { Routes } from '@angular/router';
import { ProductComp } from './product-comp/product-comp';

export const routes: Routes = [
    {path:'product/:id',component:ProductComp},
    {path:'products',component:ProductComp}
];
