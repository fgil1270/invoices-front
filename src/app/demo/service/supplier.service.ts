import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    constructor(
        private http: HttpClient
    ) { }

    private api = environment.API_URL;

    private apiSupplier = this.api + '/supplier';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    //subi un archivo para crear empleados
    getAllSupplier(): Observable<any> {
        return this.http.get<any>(this.apiSupplier, this.httpOptions);
        
    }
}