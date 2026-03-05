import { Component, OnInit } from '@angular/core';
import { portfolioData } from '../../../data';
import { CommonModule } from '@angular/common';
import { SiteContentApiService } from '../../../shared/services/site-content-api.service';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  data = portfolioData;

  constructor(private readonly siteContentApi: SiteContentApiService) {}

  ngOnInit(): void {
    this.siteContentApi.getContent().subscribe((content) => {
      this.data = content.portfolio;
    });
  }

  getCategoryLabel(category: string): string {
    const normalized = (category || '').toLowerCase();

    if (normalized.includes('web')) {
      return 'Web';
    }
    if (normalized.includes('mobile')) {
      return 'Mobile';
    }
    if (normalized.includes('data')) {
      return 'Data';
    }
    if (normalized.includes('iot')) {
      return 'IoT';
    }
    return 'Produit';
  }
}
