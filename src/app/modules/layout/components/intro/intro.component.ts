import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent implements OnInit {
  icons = {
    linkedin: faLinkedinIn,
    github: faGithub,
  };
  profileLinks = {
    in: 'https://www.linkedin.com/in/saksham-gupta-6523aa193/',
    github: 'https://github.com/sakshamGupta09',
  };
  constructor() {}
  ngOnInit(): void {}
}
