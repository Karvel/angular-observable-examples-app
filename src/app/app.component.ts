import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
}                       from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
}                       from '@angular/router';
import { Title }        from '@angular/platform-browser';

import {
  filter,
  map,
  mergeMap,
}                       from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector        : 'app-root',
  templateUrl     : './app.component.html',
  styleUrls       : ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'angular-observable-examples-app';

  private routerEventsSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.setPageTitle();
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  private setPageTitle(): void {
    this.routerEventsSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data),
      )
      .subscribe(event => this.titleService.setTitle(`${event['title']} - Angular Observable Examples`));
  }
}
