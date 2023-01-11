import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduktComponent } from './produkt/produkt.component';
import { AddProduktFormComponent } from './add-produkt-form/add-produkt-form.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddSiteComponent } from './add-site/add-site.component';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';
import { HomeSiteComponent } from './home-site/home-site.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { SzukajKategoriaComponent } from './szukaj-kategoria/szukaj-kategoria.component';
import { SingleProductSiteComponent } from './single-product-site/single-product-site.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SzukajKategoriaSiteComponent } from './szukaj-kategoria-site/szukaj-kategoria-site.component';
import { HeaderLoggedComponent } from './header-logged/header-logged.component';
import { LoginComponent } from './login/login.component';
import { LoginSiteComponent } from './login-site/login-site.component';
import { ZalogowanyComponent } from './zalogowany/zalogowany.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSiteComponent } from './register-site/register-site.component';
import { CartComponent } from './cart/cart.component';
import { CartSiteComponent } from './cart-site/cart-site.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduktComponent,
    AddProduktFormComponent,
    AddSiteComponent,
    HomeSiteComponent,
    HeaderComponent,
    LeftMenuComponent,
    SzukajKategoriaComponent,
    SingleProductSiteComponent,
    SingleProductComponent,
    SzukajKategoriaSiteComponent,
    HeaderLoggedComponent,
    LoginComponent,
    LoginSiteComponent,
    ZalogowanyComponent,
    RegisterComponent,
    RegisterSiteComponent,
    CartComponent,
    CartSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    FormsModule,
    MenubarModule,
    PanelMenuModule,
    CardModule,
    DataViewModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FileUploadModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
