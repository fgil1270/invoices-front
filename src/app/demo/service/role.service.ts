import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(
        private http: HttpClient
    ) { }

    private api = environment.API_URL;

    private apiRole = this.api + '/role';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    httpUploadFile = {
        headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
      };

    //subi un archivo para crear empleados
    getAllRole(): Observable<any> {
        return this.http.get<any>(this.apiRole, this.httpOptions);
        
    } 

    //subi un archivo para crear empleados
    postForeignInvocie(data: any, file: any): Observable<any> {
        return this.http.post<any>(this.apiRole + '/foreign', data);
        
    }
}