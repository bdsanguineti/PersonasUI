import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit {

  personas: any[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.personaService.getPersonas().subscribe((data: any) => {
      this.personas = data['response'];
      console.log("persona component fetch data", this.personas);
    });
  }  
}
