import { Component } from '@angular/core';
import { movieResult } from '../datatype/movie';
import { tvResult } from '../datatype/tvshow';
import { MovieserviceService } from '../services/movieservice.service';
import { TvshowsService } from '../services/tvshows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movieList:movieResult[]=[];
  tvshowList:tvResult[]=[];

  constructor(private movies:MovieserviceService, private tvshows:TvshowsService){}

   


   ngOnInit():void{

    this.getallMovies();
    this.getallTvShows();

   }

   getallMovies(){
    this.movies.getMovies().subscribe((data)=>{
      this.movieList=data.results;
    })
   }

   getallTvShows(){
    this.tvshows.tvshows().subscribe((data)=>{
      this.tvshowList=data.results;
    })
   }

}
