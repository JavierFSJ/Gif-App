import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { SearchGIFResponse, Gif } from './../interface/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private _apiKey: string = 'lw0hFM6Yfp42i63pOnNiTZncrsivAi6b';
  private _endPoint: string = 'api.giphy.com/v1/gifs/search';
  private _base = 'https://api.giphy.com/v1/gifs';

  // TODO Cambiar el tipo
  public resultados: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    }
    if (localStorage.getItem('res')) {
      this.resultados = JSON.parse(localStorage.getItem('res')!) || [];
    }
  }

  buscarGifs(query: string) {
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 5);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }


    const params = new HttpParams()
    .set('api_key' , this._apiKey)
    .set('limit' , 10)
    .set('q', query);

    console.log({params});

    this.http
      .get<SearchGIFResponse>(
        `${this._base}/search`,{params}
      )
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('res', JSON.stringify(this.resultados));
    });
  }
}
