import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/apiconfig';
import { tvshows } from '../datatype/tvshow';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor(private http:HttpClient) { }

  


  tvshows(){
    return this.http.get<tvshows>(`https://api.themoviedb.org/3/tv/popular?api_key=${environment.api_key}&language=en-US&page=1`)
   }

   getTvShowbyId(id:number){
    return this.http.get<tvshows>(`https://api.themoviedb.org/3/tv/${id}?api_key=${environment.api_key}&language=en-US`);
   }

   getNowPlaying(page: number){
    return this.http.get<tvshows>(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${environment.api_key}&page=${page}&language=en-US&region=US`)
  }


}
