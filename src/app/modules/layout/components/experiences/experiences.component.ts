import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
