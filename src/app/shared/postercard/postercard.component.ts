import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postercard',
  templateUrl: './postercard.component.html',
  styleUrls: ['./postercard.component.scss']
})
export class PostercardComponent {
  
  @Input() item:any
  @Input() isMovie:any;

  constructor(){}
}
