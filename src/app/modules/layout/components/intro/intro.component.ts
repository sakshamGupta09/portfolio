import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SocialLinks } from '../../constants/social-links';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent implements OnInit {
  socialLinks = SocialLinks;
  constructor(private service: LayoutService) {}

  ngOnInit(): void {}

  public jumpTo(el: string): void {
    this.service.jumpToSection(el);
  }
}
