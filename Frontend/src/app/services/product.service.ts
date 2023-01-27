import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../util/types/Producto';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/api'

  constructor( private http: HttpClient) { }

 getProduct():any {
    return this.http.get(this.url).pipe((products) => {
      return products;
    });
  }

  createProduct(product:Product) {
    return this.http.post(this.url, product).pipe((res) => {
      return res;
    });
  }
  updateProduct(id: String, product:Product) {
    return this.http.put(this.url + `/${id}`, product).pipe((res) => {
      return res;
    });
  }

  deleteProduct(id:String) {
    return this.http.delete(this.url + `/${id}`).pipe((res) => {
      return res;
    });
  }

}
