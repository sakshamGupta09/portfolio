import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { IntroComponent } from './components/intro/intro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProficiencyComponent } from './components/proficiency/proficiency.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

@NgModule({
  declarations: [LayoutComponent, IntroComponent, SkillsComponent, ExperiencesComponent, ProficiencyComponent, ContactMeComponent],
  imports: [CommonModule, FontAwesomeModule, LayoutRoutingModule],
})
export class LayoutModule {}
