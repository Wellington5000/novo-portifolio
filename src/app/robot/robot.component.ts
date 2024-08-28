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
    this.robotAnimation();

  }

  robotAnimation(): void {
    const body = document.querySelector('body');
    const robot = document.querySelector('#robot');

    body?.addEventListener('mousemove', (dets) => {
      console.log(gsap)
      gsap.to(robot, {
        x: dets.x + 20,
        y: dets.y + 20,
        duration: 10,
        ease: "back.out",
      });
    });
  }
}
