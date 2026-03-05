import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

import {
  aboutData,
  blogData,
  contactData,
  factsData,
  introductionData,
  portfolioData,
  projectCtaData,
  resumeData,
  servicesData,
  socialLinks,
  testimonialData,
  videoData
} from '../../data';
import { environment } from '../../../environments/environment';
import { PartialSiteContentPayload, SiteContentPayload } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SiteContentApiService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private content$?: Observable<SiteContentPayload>;

  private readonly defaultContent: SiteContentPayload = {
    introduction: introductionData,
    about: aboutData,
    socialLinks,
    facts: factsData,
    services: servicesData,
    portfolio: portfolioData,
    resume: resumeData,
    testimonial: testimonialData,
    contact: contactData,
    blog: blogData,
    video: videoData,
    projectCta: projectCtaData
  };

  getContent(): Observable<SiteContentPayload> {
    if (this.content$) {
      return this.content$;
    }

    if (!isPlatformBrowser(this.platformId)) {
      this.content$ = of(this.defaultContent);
      return this.content$;
    }

    const endpoint = this.resolveEndpoint();
    this.content$ = this.http.get<PartialSiteContentPayload>(endpoint).pipe(
      map((remoteContent) => this.mergeWithDefaults(remoteContent)),
      catchError(() => of(this.defaultContent)),
      shareReplay(1)
    );

    return this.content$;
  }

  private resolveEndpoint(): string {
    const host = window.location.hostname;
    const isLocal = host === 'localhost' || host === '127.0.0.1';
    if (isLocal && environment.wampApiUrl) {
      return environment.wampApiUrl;
    }
    return '/api/site-content.php';
  }

  private mergeWithDefaults(remote: PartialSiteContentPayload | null | undefined): SiteContentPayload {
    if (!remote) {
      return this.defaultContent;
    }

    const safeRemote = remote as PartialSiteContentPayload;
    return {
      ...this.defaultContent,
      ...safeRemote,
      about: {
        ...this.defaultContent.about,
        ...safeRemote.about,
        info: {
          ...this.defaultContent.about.info,
          ...(safeRemote.about?.info ?? {})
        }
      },
      socialLinks: {
        ...this.defaultContent.socialLinks,
        ...(safeRemote.socialLinks ?? {})
      },
      projectCta: {
        ...this.defaultContent.projectCta,
        ...(safeRemote.projectCta ?? {})
      }
    };
  }
}
