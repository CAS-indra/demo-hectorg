import { Component } from '@angular/core';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private projectService: ProyectosService) {}

  public proyectos = this.projectService.getProyectos();
  public color = 'blueviolet';
  public value = 50;

  public incrementar(): void {
    this.value++;
    console.log('value --> ', this.value);
  }

  public reducir(): void {
    this.value--;
    console.log('value --> ', this.value);
  }

  public multiplo(cantidad: number): number {
    return cantidad * this.value;
  }

  title = 'App demo de Hector';
}
