import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suscribir',
  templateUrl: './suscribir.component.html',
  styleUrls: ['./suscribir.component.scss'],
})
export class SuscribirComponent {
  @Output()
  public subscribe = new EventEmitter<void>();
  constructor() {}

  public onSubscribeClick(): void {
    console.log('quiero suscribirme');
    this.subscribe.next();
  }
}
