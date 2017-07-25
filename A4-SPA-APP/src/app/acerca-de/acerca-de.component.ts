import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public listado_ropa: Array<string>;
  public prenda_a_guardar: string;
  public prenda_a_eliminar: string;

  constructor(
    private _dataService: DataServiceService
  ) { }

  ngOnInit() {
    this.listado_ropa = this._dataService.getColeccion();
    console.log(this._dataService.getPrenda());
    console.log(this.listado_ropa);

  }

  guardarPrenda() {
    if (this.prenda_a_guardar != null && this.prenda_a_guardar.toString) {
      this._dataService.addRopa(this.prenda_a_guardar);
      this.prenda_a_guardar = null;
    }
  }


  eliminarPrenda(index:number) {
      this._dataService.eliminarRopa(index);
  }


}
