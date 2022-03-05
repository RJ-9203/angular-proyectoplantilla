import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { CraftComponent } from './component/craft/craft.component';
import { PriceComponent } from './component/price/price.component';
import { ContactComponent } from './component/contact/contact.component';
import { ActionComponent } from './component/action/action.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebSocketsService } from './service/websocket';
import { AdminComponent } from './component/admin/admin.component';
import { AmdContactComponent } from './component/amd-contact/amd-contact.component';
import { InitComponent } from './component/init/init.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ObserverComponent } from './observer/observer.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FutbolCreacionComponent } from './component/futbol-creacion/futbol-creacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CraftComponent,
    PriceComponent,
    ContactComponent,
    ActionComponent,
    AdminComponent,
    AmdContactComponent,
    InitComponent,
    LoginComponent,
    UploadComponent,
    ContabilidadComponent,
    InventarioComponent,
    ObserverComponent,
    UsuariosComponent,
    FutbolCreacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
