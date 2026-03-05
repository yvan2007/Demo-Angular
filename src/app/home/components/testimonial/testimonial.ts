import { Component, OnInit } from '@angular/core';
import { testimonialData } from '../../../data';
import { CommonModule } from '@angular/common';
import { SiteContentApiService } from '../../../shared/services/site-content-api.service';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
})
export class Testimonial implements OnInit {
  data = testimonialData;

  constructor(private readonly siteContentApi: SiteContentApiService) {}

  ngOnInit(): void {
    this.siteContentApi.getContent().subscribe((content) => {
      this.data = content.testimonial;
    });
  }
}
