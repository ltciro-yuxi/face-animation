import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';

export const animationFace = trigger('faceAnimated', [
  state('round', style({ borderRadius: '100%' })),

  transition('* => rotate', [
    animate(4500, keyframes([
      style({ transform: 'rotateX(180deg)', offset: 0.3}),
      style({ transform: 'rotateX(0deg)',  offset: 0.7})
    ])
    )
  ]),

  transition('* => crazy', [
    animate(4000,
      style({ transform: 'rotate(1000deg) scale3d(0.8, 2, 1)'})
    )
  ]),
  transition('* => hinge', [
    animate(3000, keyframes([
      style({ transform: 'rotate(0deg)', transformOrigin: 'top left' , offset: 0.1}),
      style({ transform: 'rotate(80deg)', transformOrigin: 'top left', offset: 0.3}),
      style({ transform: 'rotate(40deg)', transformOrigin: 'top left', offset: 0.4}),
      style({ transform: 'rotate(80deg) ', transformOrigin: 'top left', offset: 0.6}),
      style({ opacity: 0, offset: 0.8}),
      ])
    )
  ]),
]);

export const animationBye = trigger('container', [
  state('bye', style({  opacity: 0  })),
  transition('* => bye',
    query('.bye', [
     stagger(500, [
      animate('0.5s', style({ opacity: 0 }))
     ]),
  ])),
]);
