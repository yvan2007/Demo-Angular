import { Component, OnInit } from '@angular/core';
import { aboutData, socialLinks } from '../../../data';
import { CommonModule } from '@angular/common';
import { SiteContentApiService } from '../../../shared/services/site-content-api.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  data = aboutData;
  social = socialLinks;

  constructor(private readonly siteContentApi: SiteContentApiService) {}

  ngOnInit(): void {
    this.siteContentApi.getContent().subscribe((content) => {
      this.data = content.about;
      this.social = content.socialLinks;
    });
  }
}
