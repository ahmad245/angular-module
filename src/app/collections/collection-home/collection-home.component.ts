import { Component, OnInit } from '@angular/core';
import { IUser, IHeader } from '../CollectionInterface';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {

  data:IUser[]=[
    {name:'ahmad',age:34,job:'dev'},
    {name:'jone',age:25,job:'en'},
    {name:'bassam',age:40,job:'teacher'},
  ];
  header:IHeader[]=[
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'job',label:'Job'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
