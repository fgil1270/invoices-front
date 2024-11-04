import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private api = environment.API_URL;

  private apiEmployee = this.api + '/employee';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //subi un archivo para crear empleados
  createEmployees(data: FormData): Observable<any> {
    return this.http.post<any>(this.apiEmployee, data, {responseType: 'blob' as 'json', observe: 'response' as 'body' });
    
  }
}
