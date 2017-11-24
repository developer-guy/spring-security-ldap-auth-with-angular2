import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./services/login/login.service";
import {FormsModule} from "@angular/forms";
import {HelloService} from "./services/hello/hello.service";
import {HelloComponent} from './hello/hello.component';
import {LocalStorageModule} from "angular-2-local-storage";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'hello', component: HelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,CommonModule, LocalStorageModule.withConfig({
    prefix: 'my-app',
    storageType: 'localStorage'
  })],
  exports: [RouterModule],
  declarations: [LoginComponent, HelloComponent],
  providers: [LoginService, HelloService]
})
export class AppRouteModule {
}
