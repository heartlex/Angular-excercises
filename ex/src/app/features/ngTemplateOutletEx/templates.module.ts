import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { MainComponent } from "./main/main.component";
import { ContainerComponent } from "./components/container/container.component";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    ContainerComponent
  ]
})
export class TemplatesModule { }
