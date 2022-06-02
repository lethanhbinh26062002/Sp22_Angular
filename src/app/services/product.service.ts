import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../type/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Khai báo http để có đối tượng HttpClient tương tác với các phương thức của API
  constructor(private http:HttpClient) { }

  // Kiểu dữ liệu Observable sẽ giúp lắng nghe API trả về kq
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products);
  }

  getProduct (id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${id}`);
  }
}