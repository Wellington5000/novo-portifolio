import { Component, OnInit } from '@angular/core';

declare const gsap: any;

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mainTextAnimation();
  }

  mainTextAnimation(): void {
    const tl = gsap.timeline();

    gsap.fromTo(".n-container .first-name", {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15,
      delay: 0.5
    });

    tl.fromTo(".n-container .last-name", {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: -0.15,
      delay: 0.5
    })
    .fromTo("h2", {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.25
    });
  }
}
