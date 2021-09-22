import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.scss'],
})
export class ProjectCreatorComponent {
  public formGroup: FormGroup;
  public message = '';

  constructor(public fb: FormBuilder, private proyectosService: ProyectosService) {
    this.formGroup = fb.group({
      //forma antigua
      name: [
        'Apagar un volcan',
        [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
      ],
      //forma actual
      budget: new FormControl(10, [
        Validators.required,
        Validators.min(10),
        Validators.max(100000),
      ]),
      startDate: new Date(),
    });
  }

  public submitProject(): void {
    console.log('Enviando....');
    console.log(this.formGroup.value);
    //TODO: llamar al servicio y hacer el post
    this.proyectosService.postProyecto$(this.formGroup.value).subscribe({
      error: err => (this.message = err.message),
    });
  }
}
