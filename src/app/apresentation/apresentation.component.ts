import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss']
})
export class ApresentationComponent implements OnInit {
  lottieOptions: AnimationOptions = {
    path: '/assets/json/notebook.json',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
