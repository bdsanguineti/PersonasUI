import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'https://localhost:7292/api/Personas/Lista';

  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<any[]> {
    console.log("PERSONA SERVICE");

    return this.http.get<any[]>(this.apiUrl);    
  }
}
