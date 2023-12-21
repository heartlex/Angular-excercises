import { Component, ContentChild, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  /*
  This way i access to content projected from the father to the container
  and that's a template which will be referred by the ngTemplateOutlet
  */
  @ContentChild('routed') routed!: TemplateRef<any>;


  containerContext = {
    $implicit: 'BOO',
    boo: 'boo'
  }
}
