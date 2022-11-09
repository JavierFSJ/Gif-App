import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar! : ElementRef<HTMLInputElement>;

  /*  */
  constructor(private gifsService : GifsService) {
    
  }

  buscar( ): void {
    if(this.txtBuscar.nativeElement.value === ''){
      return;
    }
    this.gifsService.buscarGifs(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
  }

}
