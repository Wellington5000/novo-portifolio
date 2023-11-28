import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

declare const gsap: any;

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {
  lottieOptions: AnimationOptions = {
    path: '/assets/json/robot.json',
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ repeat: -1 })
    const robot = document.querySelector('.r-guide');

    gsap.fromTo(robot,
      { x: -500, y: 0 },
      { x: 200, y: 60, duration: 3 },
    )

    tl.fromTo(robot,
      { x: 200, y: 60 },
      { x: 700, y: 350, duration: 3 },
      '+=20'
    ).fromTo(robot,
      { x: 700, y: 350 },
      { x: 200, y: 300, rotate: -25, duration: 3 },
      '+=5'
    ).fromTo(robot,
      { x: 200, y: 300 },
      { x: 200, y: 60, rotate: 360, duration: 3 },
      '+=5'
    )
  }
}
