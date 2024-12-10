import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

    constructor( ) {

    }
    
    saveToken(token: string, user: any){
        localStorage.setItem('auth-token', token);
        localStorage.setItem('auth-user', JSON.stringify(user));
    }

    getToken(){
        const token = localStorage.getItem('auth-token');
        return token;
    }
    getUser(){
        const userJson = localStorage.getItem('auth-user');
        
        return userJson;
    }

    deleteToken(){
        localStorage.removeItem('auth-token');
        localStorage.removeItem('auth-user');
    }


}
