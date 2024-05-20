import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
import { NgFor } from '@angular/common';
import { Persona } from '../../../models/persona.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personas-list',
  standalone: true,
  imports: [NgFor, RouterModule],
  providers: [PersonaService],
  templateUrl: './personas-list.component.html',
  styleUrl: './personas-list.component.css'
})
export class PersonasListComponent implements OnInit {
  
  personas: Persona[] = []; 
  
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((data: Persona[]) => {
      console.log("personas list Component", data);
      this.personas = data;
    });
  }

  deletePersona(id: number): void {
    this.personaService.deletePersona(id).subscribe(() => {
      this.personas = this.personas.filter(p => p.id !== id);
    });
  }
}
