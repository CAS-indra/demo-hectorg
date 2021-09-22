import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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

  private readonly url = environment.apiUrl + 'projects/';
  constructor(private http: HttpClient) {}

  public getProyectos(): any[] {
    return []; //this.proyectos;
  }

  public getProyectos$(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(this.url);
  }

  public getProjectById(id: string): Observable<any> {
    return this.http.get<any>(this.url + id).pipe(map(res => res.data));
  }

  public postProyecto$(proyecto: any): Observable<any> {
    return this.http.post<{ data: any }>(this.url, proyecto).pipe(map(res => res.data));
  }

  public putProyecto$(proyecto: any): Observable<any> {
    return this.http
      .put<{ data: any }>(this.url + proyecto.id, proyecto)
      .pipe(map(res => res.data));
  }

  public deleteProjectById(id: string): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }
}
