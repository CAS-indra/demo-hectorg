import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'App demo de Hector';

  public get cantidad(): number {
    return 2;
  }

  public get precio(): number {
    return 9;
  }
}
