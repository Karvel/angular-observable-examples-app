import {
  Component,
  ChangeDetectionStrategy,
}                       from '@angular/core';

import { ExternalLink } from '../../core/models/routed-link';

@Component({
  selector        : 'app-footer',
  templateUrl     : './footer.component.html',
  styleUrls       : ['./footer.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public contactList: ExternalLink[] = [
    {
      linkPath : 'http://hapax-legomenon.net/',
      name     : 'Hapax Legomenon',
      icon     : 'fa fa-link',
    },
    {
      linkPath : 'https://github.com/Karvel',
      name     : 'GitHub',
      icon     : 'fa fa-github-square',
    },
    {
      linkPath : 'https://medium.com/@elanna.grossman',
      name     : 'Medium',
      icon     : 'fa fa-medium',
    },
    {
      linkPath : 'https://www.linkedin.com/in/elannagrossman',
      name     : 'LinkedIn',
      icon     : 'fa fa-linkedin',
    },
    {
      linkPath : 'https://www.flickr.com/photos/jadeilyn/',
      name     : 'Flickr',
      icon     : 'fa fa-flickr',
    },
  ];
  public dateYear: number = new Date().getFullYear();

  constructor() { }

  public trackByName(index: number, item: ExternalLink): string {
    return item.name;
  }
}
