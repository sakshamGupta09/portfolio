import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [LayoutComponent, IntroComponent],
  imports: [CommonModule, FontAwesomeModule, LayoutRoutingModule],
})
export class LayoutModule {}
