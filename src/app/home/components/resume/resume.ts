import { Component, OnInit } from '@angular/core';
import { resumeData } from '../../../data';
import { CommonModule } from '@angular/common';
import { SiteContentApiService } from '../../../shared/services/site-content-api.service';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume implements OnInit {
  data = resumeData;
  dots = Array.from({ length: 5 });

  constructor(private readonly siteContentApi: SiteContentApiService) {}

  ngOnInit(): void {
    this.siteContentApi.getContent().subscribe((content) => {
      this.data = content.resume;
    });
  }

  getSkillLabel(level: number): string {
    if (level >= 85) {
      return 'Elite';
    }
    if (level >= 75) {
      return 'Solide';
    }
    if (level >= 60) {
      return 'Operationnel';
    }
    return 'En progression';
  }

  getSkillDots(level: number): number {
    if (level >= 85) {
      return 5;
    }
    if (level >= 75) {
      return 4;
    }
    if (level >= 60) {
      return 3;
    }
    if (level >= 45) {
      return 2;
    }
    return 1;
  }
}
