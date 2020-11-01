import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  @Input() line=2;
  @Input() head=true;
  constructor() { }

  ngOnInit(): void {
  }

}
