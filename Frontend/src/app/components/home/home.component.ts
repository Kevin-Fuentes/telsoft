import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { open } from '../../store/modal/modal.actions';
import { getProduct, deleteProduct } from '../../store/Product/product.actions';
import { Product } from '../../util/types/Producto';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  product$:Observable<Product[]>;

  constructor(private store: Store<{ modal: Object , product: Product[] }>, private productService: ProductService) {
    this.product$ = store.select('product');
    this.loadData();
  }
  loadData() {
    this.productService.getProduct().subscribe((res:any) => {
      this.store.dispatch(getProduct({products: res.data}))
    })
  }

  deleteProduct(id:string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.store.dispatch(deleteProduct({ id }))
      alert('the product was deleted')
    })
  }

  openModal(id:string) {
    this.store.dispatch(open({modal:{display:'block', id}}));
  }
}
