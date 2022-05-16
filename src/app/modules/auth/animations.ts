import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const opacityTransition =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter', [
        style({ height: 0, overflow: 'hidden', opacity: 0 })
      ], {optional: true}),
      group([
        query(':leave', [
          animate('80ms ease-out', style({ opacity: 0 })),
          animate('1ms', style({height: 0, overflow: 'hidden'}))
        ], {optional: true}),
        query(':enter', [
          animate('1ms 81ms', style({height: '100%'})),
          animate('80ms 80ms ease-out', style({ opacity: 1 }))
        ], {optional: true})
      ])
    ])
  ]);