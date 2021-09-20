import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.scss'],
})
export class ProjectEditorComponent implements OnInit {
  public projectId = '';
  public project = { name: '', budget: 0 };

  constructor(private route: ActivatedRoute, private proyectosService: ProyectosService) {
    // const projectId = route.snapshot.params['id'];
    // this.projectId = projectId;
    // console.log('project Id ---> ', projectId);
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    const proyectos = this.proyectosService.getProyectos();
    this.project = proyectos.find(p => p.id === this.projectId);
  }
}

class Alumno {
  // public nombre = '';
  public edad = 0;

  constructor(public nombre: string) {
    // this.nombre = nombre;
    this.imprimir();
  }

  imprimir() {
    console.log(this.nombre);
  }
}

const manuel = new Alumno('Manuel Ruiz');
// manuel.nombre = 'Manuel Ruiz';
manuel.edad = 25;
