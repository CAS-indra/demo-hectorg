import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/data/global.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {
  public empresa = 'INDRA';
  public message = '';
  constructor(globalService: GlobalService) {
    // this.message = globalService.message;
    globalService.getMessage$().subscribe(data => (this.message = data));
  }

  ngOnInit(): void {}
}
