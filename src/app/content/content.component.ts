import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieResult } from '../datatype/movie';
import { MovieserviceService } from '../services/movieservice.service';
import { TvshowsService } from '../services/tvshows.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {

    items:any=[];
    contentType:any='';
    movieFlag:boolean=true;
    page:number=1;
    count:number=0;
    tableSize:number=20;

 
    
     constructor( private movieService:MovieserviceService,
     private tvshowService:TvshowsService,
     private router:Router)
     
     {
      this.contentType=this.router.url.split('/')[1];
      console.log(this.contentType)
     }

     ngOnInit(){

           
         if(this.contentType==='movies'){
            this.fetchmovieDetails(this.page);
          }

          else {
            this.fetchtvshowDetails(this.page)
          }     
     }

     fetchmovieDetails(page:number){
      this.movieService.getNowPlaying(page)
      .subscribe((data)=>{
        this.items=data.results;
        this.count=data.total_results;
      })
  
    }
  
  fetchtvshowDetails(page:number){
    this.movieFlag=false;
    this.tvshowService.getNowPlaying(page)
      .subscribe((data)=>{
        this.items=data.results
        this.count=data.total_results;

      })
  
    }

     onTableDataChange(event:any){
         this.page=event

         if(this.contentType==='movies'){
           this.fetchmovieDetails(this.page)
         }
         else{
          this.fetchtvshowDetails(this.page)
         }
     }

}
