import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private proyectos = [
    {
      id: 'aprender-angular',
      name: 'Aprender Angular',
      budget: 500,
      status: 1,
    },
    {
      id: 'tener-un-buen-trabajo',
      name: 'Tener un buen trabajo',
      budget: 100,
      status: 0,
    },
  ];
  constructor() {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getProyectos(): any[] {
    return this.proyectos;
  }
}
