import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }

  buscar (query : string): void{
    this.gifsService.buscarGifs(query);
  }

  constructor(private gifsService: GifsService) { }
  
}
