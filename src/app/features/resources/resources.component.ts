import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector        : 'app-resources',
  templateUrl     : './resources.component.html',
  styleUrls       : ['./resources.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent {
  public introductionLinks = [
    {
      path  : 'https://github.com/ReactiveX/rxjs/blob/master/doc/introduction.md',
      title : '',
    },
    {
      path  : 'https://gist.github.com/staltz/868e7e9bc2a7b8c1f754',
      title : `The introduction to Reactive Programming you've been missing`,
    },
    {
      path  : 'https://toddmotto.com/rxjs-observables-observers-operators',
      title : 'RxJS: Observables, Observers and Operators Introduction ',
    },
    {
      path  : 'https://blog.angularindepth.com/the-extensive-guide-to-creating-streams-in-rxjs-aaa02baaff9a',
      title : 'The Extensive Guide to Creating Streams in RxJS',
    },
  ];
  public hotVColdLinks = [
    {
      path  : 'https://blog.thoughtram.io/angular/2016/06/16/cold-vs-hot-observables.html',
      title : 'Cold vs Hot Observables',
    },
    {
      path  : 'https://blog.strongbrew.io/my-favorite-metaphor-for-hot-vs-cold-observables/',
      title : 'My favorite metaphor for hot vs cold observables',
    },
    {
      path  : 'https://jaredforsyth.com/posts/visualizing-reactive-streams-hot-and-cold/',
      title : 'Visualizing Reactive Streams: Hot and Cold Observables',
    },
    {
      path  : 'https://blog.strongbrew.io/multicasting-operators-in-rxjs/',
      title : 'Multicasting operators in RxJS',
    },
    {
      path  : 'https://codingthesmartway.com/getting-started-with-rxjs-part-3-hot-and-cold-observables/',
      title : 'Getting Started With RxJS – Part 3: Hot And Cold Observables',
    },
  ];
  public bestPracticesLinks = [
    {
      path  : 'https://blog.strongbrew.io/rxjs-best-practices-in-angular/',
      title : 'RxJS best practices in Angular',
    },
  ];
  public higherOrderLinks = [
    {
      path  : 'https://blog.angular-university.io/rxjs-higher-order-mapping/',
      title : 'Comprehensive Guide to Higher-Order RxJs Mapping Operators: switchMap, mergeMap, concatMap (and exhaustMap)',
    },
    {
      path  : 'https://medium.com/@shairez/a-super-ninja-trick-to-learn-rxjss-switchmap-mergemap-concatmap-and-exhaustmap-forever-88e178a75f1b',
      title : 'A Super Ninja Trick To Learn RxJS’s “switchMap”, “mergeMap”, “concatMap” and “exhaustMap”, FOREVER!',
    },
    {
      path  : 'https://blog.strongbrew.io/building-a-safe-autocomplete-operator-with-rxjs/',
      title : 'Building a safe autocomplete operator in RxJS',
    },
  ];
  public pitfallsLinks = [
    {
      path  : 'https://blog.angular-university.io/angular-2-rxjs-common-pitfalls/',
      title : '3 Common Rxjs Pitfalls that you might find while building Angular Applications',
    },
    {
      path  : 'https://brianflove.com/2017/11/01/ngrx-anti-patterns/',
      title : 'RxJS Antipatterns',
    },
    {
      path  : 'https://blog.novanet.no/angular-pitfall-multiple-http-requests-with-rxjs-and-observable-async/',
      title : 'Angular pitfall: Multiple HTTP requests with RxJS and observable$ | async',
    },
    {
      path  : 'https://medium.com/@paynoattn/3-common-mistakes-i-see-people-use-in-rx-and-the-observable-pattern-ba55fee3d031',
      title : '3 Common Mistakes I see people use in Rx and the Observable Pattern',
    },
  ];
  public subscribingLinks = [
    {
      path  : 'https://toddmotto.com/angular-ngif-async-pipe',
      title : 'Handling Observables with NgIf and the Async Pipe ',
    },
    {
      path  : 'https://netbasal.com/why-its-important-to-unsubscribe-from-rxjs-subscription-a7a6455d6a02',
      title : 'The Ultimate Answer To The Very Common Angular Question: subscribe() vs | async Pipe',
    },
    {
      path  : 'https://blog.angularindepth.com/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794',
      title : 'Why It’s Important to Unsubscribe from RxJS Subscription',
    },
  ];
  public errorHandlingLinks = [
    {
      path  : 'https://blog.angular-university.io/rxjs-error-handling/',
      title : 'RxJs Error Handling: Complete Practical Guide',
    },
  ];
  public angularInternalLinks = [
    {
      path  : 'https://dzone.com/articles/how-to-do-conditional-validation-on-valuechanges-m',
      title : 'Perform Conditional Validation With the valueChanges Method in Angular Reactive Forms ',
    },
    {
      path  : 'https://toddmotto.com/dynamic-page-titles-angular-2-router-events',
      title : 'Dynamic page titles in Angular 2 with router events ',
    },
  ];
  public advancedStructuresLinks = [
    {
      path  : 'https://blog.strongbrew.io/what-are-schedulers-in-rxjs/',
      title : 'What are schedulers in RxJS',
    },
    {
      path  : 'https://xgrommx.github.io/rx-book/content/guidelines/introduction/index.html',
      title : 'Rx Book',
    },
  ];
  constructor() { }
}
