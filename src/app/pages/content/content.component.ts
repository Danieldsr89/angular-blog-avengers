import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFakeBigCard } from '../../data/dataFakeBigCard';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
}
)

export class ContentComponent implements OnInit{
  
phtoCover:string =""
contentTitle:string=""
contentDescription:string=""

private id: string | null ="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null ){
    const result = dataFakeBigCard.filter(article => article.id == id)[0]
      this.contentTitle = result.title
      this.phtoCover = result.phtotoCover
      this.contentDescription = result.description
  }
}
