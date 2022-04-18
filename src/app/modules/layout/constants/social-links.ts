import ISocialLinks from '../models/social-links';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const SocialLinks: ISocialLinks[] = [
  {
    url: 'https://github.com/sakshamGupta09',
    icon: faGithub,
    class: 'icon icon--github',
  },
  {
    url: 'https://www.linkedin.com/in/saksham-gupta-6523aa193/',
    icon: faLinkedinIn,
    class: 'icon icon--linkedin margin-left-xsmall',
  },
  {
    url: 'mailto:saksham.09.gupta@gmail.com',
    icon: faEnvelope,
    class: 'icon icon--mail margin-left-xsmall',
  },
];
