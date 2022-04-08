import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [LayoutComponent, IntroComponent, AboutComponent],
  imports: [CommonModule, FontAwesomeModule, LayoutRoutingModule],
})
export class LayoutModule {}
