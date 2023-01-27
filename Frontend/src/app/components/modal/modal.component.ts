import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { close, open } from '../../store/modal/modal.actions';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/util/types/Producto';
import {
  updateProduct,
  createProduct,
} from '../../store/Product/product.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  modal$: Observable<any>;
  modal!: any;
  productForm!: FormGroup;
  product$: Observable<Product[]>;
  myField = new FormControl();

  constructor(
    private store: Store<{ modal: Object; product: Product[] }>,
    private readonly fb: FormBuilder,
    private productService: ProductService
  ) {
    this.modal$ = store.select('modal');
    this.product$ = store.select('product');
  }

  ngOnInit(): void {
    this.productForm = this.initForm();
    this.modal$.subscribe((modal) => {
      if (modal.id) {
        this.modal = modal;
        this.product$.subscribe((products) => {
          const product = products.find((product) => product._id === modal.id);
          this.setValueProduct(product);
        });
      }
    });
  }
  onSubmit() {
    if (this.modal?.id) {
      console.log('entro')
      this.productService
        .updateProduct(this.modal.id, this.productForm.value)
        .subscribe((res) => {
          this.store.dispatch(
            updateProduct({
              product: { _id: this.modal.id, ...this.productForm.value },
            })
          );
          alert('the product was updated');
          this.close();
        });
      return;
    }

    this.productService
      .createProduct(this.productForm.value)
      .subscribe((res) => {
        this.store.dispatch(createProduct( { _id: 1, ...this.productForm.value }));
        alert('the product was created');
        this.close();
      });
  }

  initForm(): FormGroup {
    return this.fb.group({
      tipo: ['', [Validators.requiredTrue]],
      provedor: ['', [Validators.requiredTrue]],
      marca: ['', [Validators.requiredTrue]],
      color: ['', [Validators.requiredTrue]],
      modelo: ['', [Validators.requiredTrue]],
      precio: ['', [Validators.requiredTrue]],
      descripcion: ['', [Validators.requiredTrue]],
    });
  }

  setValueProduct(product: any) {
    const { _id, __v, ...resProduct } = product;
    this.productForm.setValue(resProduct);
  }
  open() {
    this.store.dispatch(open({ modal: { display: 'block' } }));
  }
  close() {
    this.productForm.reset();
    this.store.dispatch(close({ modal: { display: 'none' } }));
  }
}
