import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from 'src/app/services/movieservice.service';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent {
   
   contentType='';
   item:any;
   nill='No Data'

  constructor(
    private movieService:MovieserviceService,
    private tvshowService:TvshowsService,
    private activeRoute:ActivatedRoute,
    private router:Router
  ){
    this.contentType=this.router.url.split('/')[1];
  }

  ngOnInit(){

    this.activeRoute.params.subscribe(
      params=>{
        const id=params['id'];

        if(this.contentType==='movies'){
          this.getMovieDetails(id);
        }
        else {
          this.getTvShowDetails(id)
        }
      }
    )
    
  }

  getMovieDetails(id:number){

    this.movieService.getMovieDetailsById(id)
    .subscribe((data)=>{
      this.item=data;
      console.log(this.item)
    })

  }

  getTvShowDetails(id:number){
    
    this.tvshowService.getTvShowbyId(id)
    .subscribe((data)=>{
      this.item=data
    })

  }
    
}
