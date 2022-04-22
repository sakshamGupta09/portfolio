import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class LayoutService {
  constructor(@Inject(DOCUMENT) private _document: Document) {}
  public jumpToSection(el: string) {
    this._document
      .getElementById(el)
      ?.scrollIntoView({ block: 'start', inline: 'start' });
  }
}
