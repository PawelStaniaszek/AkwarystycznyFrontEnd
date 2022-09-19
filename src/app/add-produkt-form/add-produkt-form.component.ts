import { Component } from '@angular/core';
import { Produkt } from '../produkt/produkt';
import { TestServiceService } from '../test-service.service';

interface City {
  name: string;
}

@Component({
  selector: 'app-add-produkt-form',
  templateUrl: './add-produkt-form.component.html',
  styleUrls: ['./add-produkt-form.component.css'],
})
export class AddProduktFormComponent {
  cities: City[];
  selectedCity: City;
  produkt: Produkt;
  PhotoFileName:string;
  PhotoFilePath:string;

  constructor(private produktService: TestServiceService) {
    this.cities = [
      { name: 'Akcesoria' },
      { name: 'Akwaria' },
      { name: 'Rośliny' },
      { name: 'Oświetlenie' },
      { name: 'Filtracja' },
      { name: 'Napowietrzenie' },
      { name: 'Pokarmy' },
      { name: 'Podłoża' },
      { name: 'Testy' },
      { name: 'Preparaty' },
    ];
    this.selectedCity = this.cities[1];
    this.produkt = {
      Nazwa: '',
      Cena: 0,
      Opis: undefined,
      Opis_dlugi: undefined,
      obrazek: undefined,
      kategoria: this.selectedCity.name,
      file: undefined
    };
  }

  myUploader(event) {
    console.log(event.files[0].name);
    this.produkt.obrazek = event.files[0].name;
    var file = event.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.produktService.UploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.produktService.PhotoUrl + this.PhotoFileName;
    });
  }
  submit() {
    this.produkt.kategoria = this.selectedCity.name
    this.produktService.AddProdukt(this.produkt).subscribe(res=>{
      alert(res.toString());
    });;
  }
}
