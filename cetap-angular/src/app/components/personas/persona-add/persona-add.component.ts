import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../../../services/persona.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-persona-add',
  standalone: true,
  imports: [],
  templateUrl: './persona-add.component.html',
  styleUrl: './persona-add.component.css'
})
export class PersonaAddComponent implements OnInit{

  personaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private router: Router
  ) 
  {
    this.personaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: [''],
      provinciaId: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.personaForm.valid) {
      this.personaService.addPersona(this.personaForm.value).subscribe(() => {
        this.router.navigate(['/personas']);
      });
    }
  }

}
