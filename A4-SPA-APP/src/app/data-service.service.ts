import { Injectable } from '@angular/core';


//método que nos añada algún dato, peticiones http, etc.

@Injectable()
export class DataServiceService {

  public nombre_prenda:string;
  public coleccion_ropa: Array<string>;

  constructor() {
    this.nombre_prenda = "Pantalón corto";
    this.coleccion_ropa = ["pantalones negros", "camiseta roja"];
   }


  getPrenda(){
    return this.nombre_prenda;
  }

  addRopa(nombre){
    this.coleccion_ropa.push(nombre);
    return this.getColeccion();
  }

  getColeccion(){
    return this.coleccion_ropa;
  }

  eliminarRopa(index:number){
    this.coleccion_ropa.splice(index, 1);
  }

}
