import { Component, OnInit } from '@angular/core';
import { videoData } from '../../../data';
import { SiteContentApiService } from '../../../shared/services/site-content-api.service';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.html',
  styleUrl: './video.scss',
})
export class Video implements OnInit {
  data = videoData;

  constructor(private readonly siteContentApi: SiteContentApiService) {}

  ngOnInit(): void {
    this.siteContentApi.getContent().subscribe((content) => {
      this.data = content.video;
    });
  }
}
