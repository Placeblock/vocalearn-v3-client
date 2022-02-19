import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const opacityTransition =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
        })
      ]),
      query(':enter', [
        style({ height: 0, overflow: 'hidden', opacity: 0 })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('80ms ease-out', style({ opacity: 0 })),
          animate('1ms', style({height: 0, overflow: 'hidden'}))
        ]),
        query(':enter', [
          animate('1ms 81ms', style({height: '100%'})),
          animate('80ms 80ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);