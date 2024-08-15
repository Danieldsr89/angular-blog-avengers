import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent{
  @Input()
  BigphotoCover:string = ""
  @Input()
  Bigtitle:string = ""
  @Input()
  Bigdescription = ""
  @Input()
  id:string="0"

  constructor(){ } 

  ngOnit(): void{}
}

