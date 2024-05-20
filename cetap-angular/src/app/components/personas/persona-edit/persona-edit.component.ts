import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-persona-edit',
  standalone: true,
  imports: [],
  templateUrl: './persona-edit.component.html',
  styleUrl: './persona-edit.component.css'
})
export class PersonaEditComponent implements OnInit {
  
  personaForm: FormGroup;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private personaService: PersonaService,
    private router: Router
  )
  {
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: [''],
      provinciaId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.paramMap.get('id');

    this.personaService.getPersona(this.id).subscribe(data => {
      this.personaForm.patchValue(data);
    });
  }

  onSubmit(): void{
    if (this.personaForm.valid) {
      this.personaService.updatePersona(this.id, this.personaForm.value).subscribe(() => {
        this.router.navigate(['/personas']);
      });
    }
  }

}
