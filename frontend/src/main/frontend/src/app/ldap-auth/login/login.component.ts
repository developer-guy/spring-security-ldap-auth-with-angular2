import {Component, OnInit} from '@angular/core';
import {LoginCredential} from "../domains/login/login-credential";
import {LoginService} from "../services/login/login.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredential: LoginCredential;
  message: string;

  constructor(private loginService: LoginService, private router: Router, private localStorageService: LocalStorageService) {
    this.loginCredential = new LoginCredential();
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.loginCredential).subscribe((data) => {
        console.log("Authorization is success :", this.localStorageService.get<string>("token") !== null)
        this.router.navigate(["/hello"]);
      }, err => {
        let error = err as HttpErrorResponse;
        if (error.status === 401) {
          this.message = "Kullanıcı bilgileri hatalı !!";
        }
      }
    )
  }

}
