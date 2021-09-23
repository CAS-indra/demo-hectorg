import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../data/global.service';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush, // Al activar esto ciertas cosas dejan de pasar y el programador tiene que trabajar mas
})
export class ProjectCreatorComponent {
  public formGroup: FormGroup;

  constructor(
    public fb: FormBuilder,
    private proyectosService: ProyectosService,
    private globalService: GlobalService,
  ) {
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

    this.proyectosService.postProyecto$(this.formGroup.value).subscribe({
      error: err => {
        console.log(err.message);
        // this.globalService.message = err.message;
        this.globalService.setMessage(err.message);
      },
    });
  }
}
