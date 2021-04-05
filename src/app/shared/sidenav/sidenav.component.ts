import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interaface';
import { GifsService } from 'src/app/gifs/services/gifs.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  public gif:Gif[] = []
  get historial(){
    return this.gifsService.historial
  }
 
  buscar(termino:string){
    console.log(termino)
    this.gifsService.buscarGifs(termino);
    
    
    
  }

  constructor(private gifsService:GifsService) { }

  

}
