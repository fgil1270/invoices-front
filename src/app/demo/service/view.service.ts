import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ViewService {

    constructor(
        private http: HttpClient
    ) { }

    private api = environment.API_URL;

    private apiView = this.api + '/view';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    httpUploadFile = {
        headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
      };

    //subi un archivo para crear empleados
    getAllView(): Observable<any> {
        return this.http.get<any>(this.apiView, this.httpOptions);
        
    } 

    //subi un archivo para crear empleados
    postForeignInvocie(data: any, file: any): Observable<any> {
        return this.http.post<any>(this.apiView + '/foreign', data);
        
    }
}