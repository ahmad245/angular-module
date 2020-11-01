import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private viewContainerRef:ViewContainerRef,private templteRef:TemplateRef<any>) { }
  @Input('appTimes') set render(times:number){
    for (let i = 0; i < times; i++) {
     this.viewContainerRef.createEmbeddedView(this.templteRef,{});
    }
  }

}
