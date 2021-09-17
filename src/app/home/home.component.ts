import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  public proyectos = [
    {
      name: 'Aprender Angular',
      status: 1,
    },
    {
      name: 'Tener un buen trabajo',
      status: 0,
    },
  ];
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
