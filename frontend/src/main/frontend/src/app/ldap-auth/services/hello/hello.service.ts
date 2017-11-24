import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {LocalStorageService} from "angular-2-local-storage";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';


@Injectable()
export class HelloService {

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
  }

  hello(): Observable<any> {
    let token = this.localStorageService.get("token") as string;
    let headers = new HttpHeaders();
    headers.set("Authorization", token);
    return this.httpClient.get(environment.baseUrl + "/api/hello/", {
      observe: 'body',
      responseType: 'text',
      headers: headers
    }).map(resp => resp).catch(err => Observable.throw(err));
  }

}
