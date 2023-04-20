import { Component, OnInit } from '@angular/core';

import { faCoffee, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faYoutube, faLinkedin, faGithub, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faCoffee = faCoffee;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faDiscord = faDiscord;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
