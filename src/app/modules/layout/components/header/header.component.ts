import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  menuIcon = faBars;
  isMenuOpen: boolean = false;
  constructor(private service: LayoutService) {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public jumpTo(el: string): void {
    this.service.jumpToSection(el);
    this.isMenuOpen = false;
  }
}
