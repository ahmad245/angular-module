import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {DividerComponent} from './divider/divider.component';


@NgModule({
  declarations: [NavbarComponent,DividerComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[NavbarComponent,DividerComponent]
})
export class SharedModule { }
