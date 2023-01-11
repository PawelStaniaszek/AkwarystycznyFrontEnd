import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSiteComponent } from './add-site/add-site.component';
import { HomeSiteComponent } from './home-site/home-site.component';
import { SzukajKategoriaSiteComponent } from './szukaj-kategoria-site/szukaj-kategoria-site.component';
import { SingleProductSiteComponent } from './single-product-site/single-product-site.component';
import { LoginSiteComponent } from './login-site/login-site.component';
import { ZalogowanyComponent } from './zalogowany/zalogowany.component';
import { RegisterSiteComponent } from './register-site/register-site.component';
import { CartSiteComponent } from './cart-site/cart-site.component';

const routes: Routes = [
  { path: '', component: HomeSiteComponent},
  { path: 'add', component: AddSiteComponent},
  { path: 'kategoria', component: SzukajKategoriaSiteComponent},
  { path: 'produkt', component: SingleProductSiteComponent},
  { path: 'login', component: LoginSiteComponent},
  { path: 'zalogowany', component: ZalogowanyComponent},
  { path: 'register', component: RegisterSiteComponent},
  { path: 'koszyk', component: CartSiteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
