import { Component, OnInit } from '@angular/core';
import { IStatistic } from '../statistics';


@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  statistics:IStatistic[]=[
    {value:20,label:'Faves'},
    {value:40,label:'Views'},
    {value:203,label:'Members'},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
