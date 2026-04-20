import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-comp',
  imports: [],
  templateUrl: './product-comp.html',
  styleUrl: './product-comp.css',
})
export class ProductComp {
  productId!: string;

  category :string | null = null;
  sort :string | null = null;

  constructor(private route: ActivatedRoute) {
    // this.productId = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id') || '';
    });

    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.sort = params.get('sort');
    });
  }
}
