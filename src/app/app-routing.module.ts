import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './component/action/action.component';
import { ContactComponent } from './component/contact/contact.component';
import { CraftComponent } from './component/craft/craft.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { PriceComponent } from './component/price/price.component';
import { AdminComponent } from './component/admin/admin.component';
import { InitComponent } from './component/init/init.component';
import { AmdContactComponent } from './component/amd-contact/amd-contact.component';
import { UploadComponent } from './upload/upload.component';
import { AuthGuard } from './guards/auth.guards';
import { LoginComponent } from './login/login.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { InventarioComponent } from './inventario/inventario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ObserverComponent } from './observer/observer.component';
import { FutbolCreacionComponent } from './component/futbol-creacion/futbol-creacion.component';

const routes: Routes = [
  { path: "manu", component: MenuComponent },
  { path: "craft", component: CraftComponent},
  { path: "action", component: ActionComponent },
  { path: "contact", component: ContactComponent },
  { path: "price", component: PriceComponent },
  { path: "footer", component: FooterComponent },
  { path: "login", component: LoginComponent },
  { path: "futbol-creacion", component: FutbolCreacionComponent },
  { path: 'observador', component: ObserverComponent },
  {
    path:'admin', component: AdminComponent,
    children:[
      { path:'contactos', component: AmdContactComponent },
      { path:'contabilidad', component: ContabilidadComponent },
      { path:'inventario', component: InventarioComponent },
      { path:'usuarios', component: UsuariosComponent }
    ]
  },{ path: 'inicio', component: InitComponent },
  {
    path: '**',
    redirectTo: 'inicio'
  },
  { 
    path: 'upload', component: UploadComponent, canActivate: [ AuthGuard ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
