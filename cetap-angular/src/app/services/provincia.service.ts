import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private apiUrl = 'https://localhost:7292/api/Provincias/Lista';


  constructor(private http: HttpClient) { }

  public getProvincias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);    
  }

  public addProvincia(provincia: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, provincia);
  }

  public updateProvincia(id: number, provincia: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, provincia);
  }

  public deleteProvincia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
