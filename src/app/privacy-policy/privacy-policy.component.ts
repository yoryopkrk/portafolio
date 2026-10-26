import { Component, OnInit } from '@angular/core';

import { SeoService } from '../core/services/seo.service';

@Component({
  standalone: false,
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.setCanonicalUrl('https://www.yoryopkrk.cl/politica-privacidad');
  }
}
