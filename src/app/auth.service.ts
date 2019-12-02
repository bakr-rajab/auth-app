import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule) {
  }

  login(credentials: any) {
    console.log(credentials);
    return true;
  }
}
