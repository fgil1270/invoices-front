import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";

import { environment } from "./environment/environment";
import { TokenService } from "./token.service";

export interface User {
    id: number,
    name?: string,
    password?: string,
    token?: string,
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}`;
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router : Router
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('auth-user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }
  

  validatelogin() {
    const token = this.tokenService.getToken();
    const user = this.tokenService.getUser();
    if (token && user) {
      
    }
  }
  

  /**
   * FUNCION PARA INICAR SESSION
   * @param data 
   * @returns 
   */
  login(data: {name: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth`, data);
      /* tap(response => {
        console.log("respuesta: ",response);
        this.tokenService.saveToken(response.user.access_token, response.user.user);
        this.userSubject.next(response.user.user);
        return response;
      }),
      
      
    ); */
  }
  /**
   * FUNCION PARA CERRAR SESSION
   */
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('auth-user');
    this.userSubject.next(null);
    this.router.navigate(['/']);
  } 

  
}
