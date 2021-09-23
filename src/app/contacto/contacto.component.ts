import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  public subscriptores = 0;
  constructor() {}

  public addSubscriptor(): void {
    this.subscriptores++;
  }
}
