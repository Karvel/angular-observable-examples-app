import {
  ChangeDetectionStrategy,
  Component,
}                     from '@angular/core';

import { RoutedLink } from '../../core/models/routed-link';

@Component({
  selector        : 'app-navigation',
  templateUrl     : './navigation.component.html',
  styleUrls       : ['./navigation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public linkList: RoutedLink[] = [
    {
      name  : 'Home',
      route : '',
    },
    {
      name  : 'About',
      route : '/about',
    },
    {
      name  : 'Examples',
      route : '/examples',
    },
    {
      name  : 'Resources',
      route : '/resources',
    },
    {
      name  : 'Register',
      route : '/register',
    },
  ];

  constructor() { }
}
