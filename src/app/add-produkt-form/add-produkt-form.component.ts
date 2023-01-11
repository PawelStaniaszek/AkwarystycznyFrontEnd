import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Models/Category';
import { ProductPost } from 'src/Models/ProductPost';
import { Product } from '../../Models/Product';
import { RequestService } from '../RequestService.service';

@Component({
  selector: 'app-add-produkt-form',
  templateUrl: './add-produkt-form.component.html',
  styleUrls: ['./add-produkt-form.component.css'],
})
export class AddProduktFormComponent implements OnInit{
  cities: Category[];
  selectedCity: Category;
  produkt: ProductPost;
  PhotoFileName:string;
  PhotoFilePath:string;

  constructor(private produktService: RequestService) {
    this.produkt = {
      name: "",
      price: 0,
      description: "",
      longDescription: "",
      picture: "",
      categoryId: undefined,
    }
    
  }
  ngOnInit(): void {
    this.produktService.getCategories().subscribe(val => {
      this.cities = val;
      this.selectedCity = this.cities[1];
    });
  }

  myUploader(event: { files: any[]; }) {
    this.produkt.picture = event.files[0].toString();
    var file = event.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.produkt.picture=reader.result.toString();
    };
  }
  submit() {
    this.produkt.categoryId = this.selectedCity.id;
    this.produktService.AddProdukt(this.produkt).subscribe(res=>{
      if(res.toString() == "1"){
        alert("Produkt został pomyślnie dodany");
      }else{
        alert("Nie udało się dodać produktu "+res.toString());
      }
      
    });
  }
}