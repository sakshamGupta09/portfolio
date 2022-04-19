import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISkills } from '../../models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
  skills: ISkills[] = [
    {
      imagePath: '/assets/images/html-icon.svg',
      name: 'HTML',
      alt: 'Html Icon',
    },
    {
      imagePath: '/assets/images/css-icon.svg',
      name: 'CSS',
      alt: 'Css Icon',
    },
    {
      imagePath: '/assets/images/sass-icon.svg',
      name: 'SASS',
      alt: 'Sass Icon',
    },
    {
      imagePath: '/assets/images/js-icon.svg',
      name: 'Javascript',
      alt: 'Javascript Icon',
    },
    {
      imagePath: '/assets/images/ts-icon.svg',
      name: 'Typescript',
      alt: 'Typescript Icon',
    },
    {
      imagePath: '/assets/images/angular-icon.svg',
      name: 'Angular',
      alt: 'Angular Icon',
    },
    {
      imagePath: '/assets/images/react-icon.svg',
      name: 'React',
      alt: 'React Icon',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
