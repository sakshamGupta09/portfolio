import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMeComponent implements OnInit {
  icons = {
    phone: faPhone,
    mail: faEnvelope,
    linkedin: faLinkedinIn,
    github: faGithub,
  };
  constructor() {}

  ngOnInit(): void {}
}
