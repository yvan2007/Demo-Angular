import { AfterViewInit, Component, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Header } from '../header/header';
import { Preloader } from '../preloader/preloader';
import { Introduction } from './components/introduction/introduction';
import { About } from './components/about/about';
import { Offer } from './components/offer/offer';
import { Portfolio } from './components/portfolio/portfolio';
import { Resume } from './components/resume/resume';
import { Video } from './components/video/video';
import { Testimonial } from './components/testimonial/testimonial';
import { Blog } from './components/blog/blog';
import { Contact } from './components/contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Preloader,
    Header,
    Introduction,
    About,
    Offer,
    Portfolio,
    Resume,
    Video,
    Testimonial,
    Blog,
    Contact,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private revealObserver?: IntersectionObserver;
  private cleanupListeners: Array<() => void> = [];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.setupRevealOnScroll();
    this.setupTiltCards();
    this.setupMagneticButtons();
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.cleanupListeners.forEach((cleanup) => cleanup());
    this.cleanupListeners = [];
  }

  private setupRevealOnScroll(): void {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.section-title, .service-single, .portfolio-item .item-box, .resume-list li, .skill-card, .fact-single, .project .box, .news-item, .contact-rhumb .contact-aside, .faq-wrap'
      )
    );

    const sectionCounters = new Map<string, number>();

    revealTargets.forEach((element) => {
      element.classList.add('mana-reveal');

      const sectionKey = this.getSectionKey(element);
      const counter = sectionCounters.get(sectionKey) ?? 0;
      const baseDelay = this.getSectionBaseDelay(sectionKey);
      const staggerDelay = Math.min(counter, 8) * 70;

      element.style.setProperty('--mana-reveal-delay', `${baseDelay + staggerDelay}ms`);
      sectionCounters.set(sectionKey, counter + 1);
    });

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: '0px 0px -8% 0px' }
    );

    revealTargets.forEach((element) => this.revealObserver?.observe(element));
  }

  private setupTiltCards(): void {
    const tiltTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.service-single, .portfolio-item .item-box, .resume-list li, .skill-card, .news-item, .fact-single, .project .box'
      )
    );

    tiltTargets.forEach((card) => {
      card.classList.add('mana-tilt-card');

      const onPointerMove = (event: PointerEvent): void => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 8;
        const rotateX = (0.5 - y) * 7;

        card.classList.add('is-tilting');
        card.style.setProperty('--mana-rotate-x', `${rotateX.toFixed(2)}deg`);
        card.style.setProperty('--mana-rotate-y', `${rotateY.toFixed(2)}deg`);
        card.style.setProperty(
          'transform',
          `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-7px)`
        );
      };

      const resetTilt = (): void => {
        card.classList.remove('is-tilting');
        card.style.removeProperty('--mana-rotate-x');
        card.style.removeProperty('--mana-rotate-y');
        card.style.removeProperty('transform');
      };

      card.addEventListener('pointermove', onPointerMove);
      card.addEventListener('pointerleave', resetTilt);
      card.addEventListener('pointercancel', resetTilt);

      this.cleanupListeners.push(() => card.removeEventListener('pointermove', onPointerMove));
      this.cleanupListeners.push(() => card.removeEventListener('pointerleave', resetTilt));
      this.cleanupListeners.push(() => card.removeEventListener('pointercancel', resetTilt));
    });
  }

  private setupMagneticButtons(): void {
    const magneticButtons = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.hero-action-row .btn, .navigation .nav-cta .btn, .project .btn, .contact .btn, .readMore .btn'
      )
    );

    magneticButtons.forEach((button) => {
      button.classList.add('mana-magnetic');

      const onPointerMove = (event: PointerEvent): void => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        const shiftX = Math.max(-8, Math.min(8, x * 0.16));
        const shiftY = Math.max(-6, Math.min(6, y * 0.16));

        button.classList.add('is-magnetic');
        button.style.translate = `${shiftX.toFixed(1)}px ${shiftY.toFixed(1)}px`;
      };

      const resetMagnetic = (): void => {
        button.classList.remove('is-magnetic');
        button.style.translate = '0 0';
      };

      button.addEventListener('pointermove', onPointerMove);
      button.addEventListener('pointerleave', resetMagnetic);
      button.addEventListener('pointercancel', resetMagnetic);

      this.cleanupListeners.push(() => button.removeEventListener('pointermove', onPointerMove));
      this.cleanupListeners.push(() => button.removeEventListener('pointerleave', resetMagnetic));
      this.cleanupListeners.push(() => button.removeEventListener('pointercancel', resetMagnetic));
    });
  }

  private getSectionKey(element: HTMLElement): string {
    const parentSection = element.closest('section, .section') as HTMLElement | null;
    if (!parentSection) {
      return 'global';
    }

    return parentSection.id || parentSection.className || 'global';
  }

  private getSectionBaseDelay(sectionKey: string): number {
    if (sectionKey.includes('home')) {
      return 0;
    }
    if (sectionKey.includes('about')) {
      return 80;
    }
    if (sectionKey.includes('service')) {
      return 120;
    }
    if (sectionKey.includes('portfolio')) {
      return 140;
    }
    if (sectionKey.includes('resume')) {
      return 120;
    }
    if (sectionKey.includes('blog')) {
      return 160;
    }
    if (sectionKey.includes('contact')) {
      return 120;
    }

    return 90;
  }
}
