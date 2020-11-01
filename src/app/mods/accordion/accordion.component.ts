import { Component, OnInit, Input } from '@angular/core';
import { IAccordion } from '../AcordionInterface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  accordionIndex=0;
  @Input() accordions:IAccordion[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onClick(index:number){
    if(this.accordionIndex==index){
      this.accordionIndex=-1;
    }
    else{
      this.accordionIndex=index;
    }
    
  }
}
