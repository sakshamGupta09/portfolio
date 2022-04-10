import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

@NgModule({
  declarations: [LayoutComponent, IntroComponent, AboutComponent, ExperiencesComponent],
  imports: [CommonModule, FontAwesomeModule, LayoutRoutingModule],
})
export class LayoutModule {}
