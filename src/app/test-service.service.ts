import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produkt } from './produkt/produkt';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  readonly PhotoUrl = 'http://localhost:53535/Photos/';
  constructor(private http: HttpClient) {}

  getProdukt() {
    return this.http
      .get<any>('http://localhost:53535/api/produkt')
      .toPromise()
      .then((res) => <Produkt[]>res)
      .then((data) => {
        return data;
      });
  }
  getProduktByCategory(category: string) {
    return this.http
      .get<any>('http://localhost:53535/api/produkt/Category', {
        params: {
          kategoria: category,
        },
      })
      .toPromise()
      .then((res) => <Produkt[]>res)
      .then((data) => {
        return data;
      });
  }
  UploadPhoto(val: any) {
    return this.http.post('http://localhost:53535/api/produkt/SaveFile', val);
  }
  GetPhoto(obrazek: any){
    return this.http.get('http://localhost:53535/api/produkt/SaveFile', {
      params: {
        obrazek: obrazek,
      },
    })
    .toPromise()
      .then((res) => <any[]>res)
      .then((data) => {
        return data;
      });
  }
  AddProdukt(val: any) {
    return this.http.post('http://localhost:53535/api/produkt', val)
  }
}
