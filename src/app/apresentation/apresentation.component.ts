import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

declare const gsap: any;
type CardFace = 'FRONT' | 'BACK';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss']
})
export class ApresentationComponent implements OnInit {
  lottieOptions: AnimationOptions = {
    path: '/assets/json/notebook.json',
  }

  studyAnimation: AnimationOptions = {
    path: '/assets/json/study.json',
  }

  constructor() { }

  ngOnInit(): void { }

  
  rotateAnimation(card: CardFace): void {
    const deg = card === 'BACK' ? 180 : 0;

    gsap.to(".s-container", {
      rotateY: deg,
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
    });
  }
}
