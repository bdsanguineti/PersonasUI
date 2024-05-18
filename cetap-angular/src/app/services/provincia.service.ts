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
    console.log("PROVINCIA SERVICE");

    return this.http.get<any[]>(this.apiUrl);    
  }
}
