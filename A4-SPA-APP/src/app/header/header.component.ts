import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
/*Para poder emplear la clase fuera de este fichero e importarla*/
export class HeaderComponent implements OnInit {

  public color_seleccionado: string;
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.color_seleccionado = 'red';
  }


  /* Con las funcioines de callback tradicionales no puedo asignar el valor a parametro para afuera. Necesito de flecha
    ngOnInit() {
      this._route.params.forEach(function(params:Params){
          this.parametro = params['page'];
      })
    }
  */

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['color'];
      if (this.parametro != null){
        this.color_seleccionado = this.parametro;
      }
      console.log(params)
    })
  }

  logColorSeleccionado() {
    console.log(this.color_seleccionado)
  }

  redirigir(){
    this._router.navigate(['/pick-color','pink'])
  }

}
