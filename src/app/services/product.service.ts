import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7043/api/product';

  getProducts(name?: string): Observable<Product[]> {
    let params = new HttpParams();
    if (name && name.trim().length > 0) {
      params = params.set('name', name.trim());
    }

    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}