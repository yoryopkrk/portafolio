import { Component, OnInit } from '@angular/core';

import { SeoService } from '../core/services/seo.service';

@Component({
  standalone: false,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.setCanonicalUrl('https://www.yoryopkrk.cl/');
  }

}
