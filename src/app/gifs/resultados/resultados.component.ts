import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gifs.interaface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get resultados(){
    return this.gifsService.resultados;
  }



  constructor(private gifsService: GifsService) { }


}
