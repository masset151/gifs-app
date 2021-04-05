import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { BuscarGIFResponse, Gif } from '../interfaces/gifs.interaface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'OeJStRV5vEVZh61iXTJwqkev5jiMkgQZ'
  private _historial: string[] = [];

  public resultados:Gif[] = []


  get historial(){
    return [...this._historial]

  }

  constructor(private http: HttpClient){

    
      this._historial = JSON.parse(localStorage.getItem('historial')!) || []
      this.resultados = JSON.parse(localStorage.getItem('gif')!) || []    
    
  }

  buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase()
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial =  this._historial.splice(0,10)

      localStorage.setItem('historial',JSON.stringify(this._historial));
      
    }
  
      this.http.get<BuscarGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=OeJStRV5vEVZh61iXTJwqkev5jiMkgQZ&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data)
        this.resultados = resp.data
        localStorage.setItem('gif',JSON.stringify(this.resultados))
      })
      console.log(this._historial)

    
    
  }
}
