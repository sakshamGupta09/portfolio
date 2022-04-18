import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SocialLinks } from '../../constants/social-links';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent implements OnInit {
  socialLinks = SocialLinks;
  constructor() {}

  ngOnInit(): void {}
}
