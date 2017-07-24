import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
/*Para poder emplear la clase fuera de este fichero e importarla*/
export class HeaderComponent implements OnInit {

  public color_seleccionado:string;

  constructor() {
    this.color_seleccionado = 'red';
  }

  ngOnInit() {
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado)
  }

}
