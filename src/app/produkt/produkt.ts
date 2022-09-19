import { Kategoria } from '../category';
export interface Produkt {
  Nazwa: String;
  Cena: number;
  Opis: String;
  Opis_dlugi: String;
  obrazek: String;
  kategoria: String;
  file: any
}
