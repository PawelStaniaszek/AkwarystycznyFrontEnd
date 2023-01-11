import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';
import { Token } from '../Models/Token';
import { Observable } from 'rxjs';
import { ProductPost } from 'src/Models/ProductPost';
import { User } from 'src/Models/User';
import { ProductCart } from 'src/Models/ProductCart';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  

  getProdukt() : Observable<Product[]>{
    return this.http
      .get<Product[]>('https://localhost:53535/api/Product')
  }

  login(login: string, password: string) : Observable<Token>{
    return this.http
      .post<Token>('https://localhost:53535/api/Account/Login',{
          "email": login,
          "password": password
      });
  }
  getOneProdukt(id: String){
    return this.http
      .get<Product>('https://localhost:53535/api/Product/SingleProduct?id=' + id,{});
  }

  getProduktByCategory(categoryId: String) : Observable<Product[]>{
    return this.http
      .get<Product[]>('https://localhost:53535/Category?categoryId=' + categoryId, {
      });
  }

  getProduktByCategoryName(name: String) : Observable<Product[]>{
    return this.http
      .get<Product[]>('https://localhost:53535/CategoryName?categoryName=' + name, {
      });
  }
  register(user: User) :Observable<any>{
    return this.http.post<any>('https://localhost:53535/api/Account/Login',{
      user
    });
  }

  addProductToCart(productId: String) : Observable<any>{
    let headers = new HttpHeaders({
      'Authorization' : sessionStorage.getItem('token').toString() });
  let options = { headers: headers };
    
    return this.http.post<any>('https://localhost:53535/api/Cart',{
      userId: "null",
      productId: productId.toString(),
      quantity: 1
    }, options);
  }

  getUserCart() : Observable<ProductCart[]>{
    let headers = new HttpHeaders({
      'Authorization' : sessionStorage.getItem('token').toString() });
    let options = { headers: headers };

  return this.http.get<ProductCart[]>('https://localhost:53535/api/Cart', options);
  }

  DeleteProductFromCart(id: String) : Observable<any>{
    let headers = new HttpHeaders({
      'Authorization' : sessionStorage.getItem('token').toString() });
    let options = { headers: headers };

  return this.http.delete<any>('https://localhost:53535/api/Cart?productId='+id, options);
  }
  

  getCategories() : Observable<Category[]>{
    return this.http
      .get<Category[]>('https://localhost:53535/api/Category');
  }
  
  AddProdukt(val: ProductPost) {
    var headers= new HttpHeaders({ 'accept': 'text/plain','Content-Type': 'application/json' });
    return this.http.post('https://localhost:53535/api/Product', JSON.stringify(val), {headers: headers})
  }
}
