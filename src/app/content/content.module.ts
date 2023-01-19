import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { ContentCardComponent } from './content-card/content-card.component';




@NgModule({
  declarations: [
    ContentComponent,
    ContentCardComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgxPaginationModule,
  ]
})
export class ContentModule { }
