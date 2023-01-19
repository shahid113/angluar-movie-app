import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/apiconfig';
import { movies } from '../datatype/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http:HttpClient) { }


  getMovies(){
    return this.http.get<movies>(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.api_key}&language=en-US&page=1`)
   }

   getNowPlaying(page: number){
    return this.http.get<movies>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${environment.api_key}&page=${page}&language=en-US&region=US`)
  }

   getMovieDetailsById(id:number){
    return this.http.get<movies>(`https://api.themoviedb.org/3/movie/${id}?api_key=${environment.api_key}&language=en-US`);
   }

}
