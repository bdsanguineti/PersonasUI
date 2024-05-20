import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'https://localhost:7292/api/Personas/Lista';

  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<any[]> {
    return this.http.get<{ mensaje: String, response: Persona[] }>(this.apiUrl).pipe(
      map(res => res.response)
    );    
  }

  getPersona(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  public addPersona(persona: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, persona);
  }

  public updatePersona(id: number, persona: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, persona);
  }

  public deletePersona(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
