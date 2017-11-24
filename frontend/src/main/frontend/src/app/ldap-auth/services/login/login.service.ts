import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginCredential} from "../../domains/login/login-credential";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";
import {environment} from "../../../../environments/environment";
import {LocalStorageService} from 'angular-2-local-storage';
import {Token} from "../../login/Token";


@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
  }

  login(loginCredential: LoginCredential): Observable<any> {
    var body = JSON.stringify(loginCredential);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.baseUrl + '/login', body, {
      headers: headers,
      responseType: 'json',
      observe: 'body'
    }).map(response => {
      let token = response as Token;
      this.localStorageService.set("token", token.token);
      return token;
    }).catch(err => {
      return Observable.throw(err);
    });
  }
}
