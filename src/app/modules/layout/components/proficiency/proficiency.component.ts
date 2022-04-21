import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProficiencyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
