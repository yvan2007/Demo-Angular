import { Component, OnInit } from '@angular/core';
import { servicesData } from '../../../data';
import { CommonModule } from '@angular/common';
import { SiteContentApiService } from '../../../shared/services/site-content-api.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.html',
  styleUrl: './offer.scss',
})
export class Offer implements OnInit {
  data = servicesData;

  constructor(private readonly siteContentApi: SiteContentApiService) {}

  ngOnInit(): void {
    this.siteContentApi.getContent().subscribe((content) => {
      this.data = content.services;
    });
  }
}
