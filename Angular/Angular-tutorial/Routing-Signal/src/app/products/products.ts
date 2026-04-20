import { Component,signal,effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  search = signal('');
  products = signal<string[]>(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);

  filteredProducts = signal<string[]>(this.products());

   route = inject(ActivatedRoute);
   router = inject(Router);
   
  constructor() {

  this.route.queryParams.subscribe(params => {
    this.search.set(params['search'] || '');
  });

  effect(() => {
    const searchTerm = this.search().toLowerCase();
    this.filteredProducts.set(
      this.products().filter(product =>
        product.toLowerCase().includes(searchTerm)
      )
    );
  });
}

updateUrl() {
  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: { search: this.search() || null }, // Để null sẽ xóa query param nếu trống
    queryParamsHandling: 'merge',
    replaceUrl: true // Thay thế URL hiện tại, không tạo history mới
  });
}
}
