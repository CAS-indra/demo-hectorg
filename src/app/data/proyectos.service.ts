import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  // private proyectos = [
  //   {
  //     id: 'aprender-angular',
  //     name: 'Aprender Angular',
  //     budget: 500,
  //     status: 1,
  //   },
  //   {
  //     id: 'tener-un-buen-trabajo',
  //     name: 'Tener un buen trabajo',
  //     budget: 100,
  //     status: 0,
  //   },
  // ];
  constructor(private http: HttpClient) {}

  public getProyectos(): any[] {
    return []; //this.proyectos;
  }

  public getProyectos$(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(
      'https://proton-angular-builders.herokuapp.com/v1/projects',
    );
  }

  public getProjectById(id: string): Observable<any> {
    return this.http
      .get<any>('https://proton-angular-builders.herokuapp.com/v1/projects/' + id)
      .pipe(map(res => res.data));
  }
}
