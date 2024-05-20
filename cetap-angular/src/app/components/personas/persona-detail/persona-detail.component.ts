import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../../services/persona.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-persona-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './persona-detail.component.html',
  styleUrl: './persona-detail.component.css'
})
export class PersonaDetailComponent implements OnInit {
  persona: any;

  constructor(
    private route: ActivatedRoute, 
    private personaService: PersonaService) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) 
    {
      this.personaService.getPersona(+id).subscribe((data: any) => {
        this.persona = data;
      });
    }
  }

}
