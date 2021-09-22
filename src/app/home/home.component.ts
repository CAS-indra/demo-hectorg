import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public proyectos?: any[]; //= this.projectService.getProyectos();
  public color = 'blueviolet';
  public value = 50;

  constructor(projectService: ProyectosService) {
    const proyectos$: Observable<{ data: any[] }> = projectService.getProyectos$();
    proyectos$.subscribe(
      res => (this.proyectos = res.data),
      err => console.error(err),
      () => console.log('THE END'),
    );
    // Esto es lo mismo que lo de arriba pero mas moderno
    //   proyectos$.subscribe({
    //     next: data => console.log(data),
    //     error: err => console.log(err),
    //     complete: () => console.log('THE END'),
    //   });
  }

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
