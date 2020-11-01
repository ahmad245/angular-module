import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SegmentComponent } from './segment/segment.component';
import { TimesDirective } from './times.directive';
import {SharedModule} from './../shared/shared.module';



@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, SegmentComponent, TimesDirective],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  
  ]
})
export class ElementsModule { }
