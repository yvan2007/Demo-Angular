import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { introductionData, factsData, projectCtaData } from '../../../data';
import { CommonModule } from '@angular/common';
import { SiteContentApiService } from '../../../shared/services/site-content-api.service';

@Component({
  selector: 'app-introduction',
  imports: [CommonModule],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroWebglCanvas') heroWebglCanvas?: ElementRef<HTMLCanvasElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly hostElement = inject(ElementRef<HTMLElement>);
  private lenisInstance: any;
  private animationFrameId?: number;
  private webglFrameId?: number;
  private gsapContext?: { revert: () => void };
  private destroyParallaxListeners?: () => void;
  private destroyWebgl?: () => void;

  data = introductionData;
  facts = factsData;
  projectCta = projectCtaData;
  activeFeatureIndex = 0;

  featureSteps = [
    {
      title: 'Planifier les operations',
      description: 'Structuration des taches, jalons et priorites pour livrer plus vite avec une meilleure clarte.',
      statA: 'Roadmap claire',
      statB: 'Execution visible'
    },
    {
      title: 'Suivre la production',
      description: 'Suivi des projets, categories d articles, imports et progression globale en un seul endroit.',
      statA: 'Vue unifiee',
      statB: 'Moins de friction'
    },
    {
      title: 'Piloter la rentabilite',
      description: 'Mesure du chiffre d affaires, des volumes et des performances par categorie pour mieux decider.',
      statA: 'CA actionnable',
      statB: 'Decisions rapides'
    },
    {
      title: 'Coordonner les equipes',
      description: 'Collaboration simple entre production, ventes et administration avec responsabilites claires.',
      statA: 'Flux fluides',
      statB: 'Livraisons stables'
    },
    {
      title: 'Ameliorer en continu',
      description: 'Tableaux de bord, retours terrain et ameliorations iteratives pour faire evoluer le produit.',
      statA: 'Vision long terme',
      statB: 'Croissance durable'
    }
  ];

  caseStudies = [
    {
      project: 'SANKOFA',
      role: 'Product Developer',
      challenge: 'Digitaliser une activite artisanale avec des flux encore manuels.',
      solution: 'Plateforme de gestion des articles, imports, ventes, volumes par categorie et CA.',
      impact: 'Pilotage plus clair, decisions plus rapides et meilleure visibilite commerciale.'
    },
    {
      project: 'FLOTTE',
      role: 'Full-Stack Developer',
      challenge: 'Structurer la gestion de parc, la conformite et les operations quotidiennes.',
      solution: 'Gestion vehicules/locations/maintenance/carburant avec alertes, roles et reporting.',
      impact: 'Risque operationnel reduit, meilleure tracabilite et lecture KPI pour la direction.'
    }
  ];

  constructor(private readonly siteContentApi: SiteContentApiService) {}

  ngOnInit(): void {
    this.siteContentApi.getContent().subscribe((content) => {
      this.data = content.introduction;
      this.facts = content.facts;
      this.projectCta = content.projectCta;
    });
  }

  setActiveFeature(index: number): void {
    this.activeFeatureIndex = index;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    void this.initializeImmersiveMotion();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.webglFrameId) {
      cancelAnimationFrame(this.webglFrameId);
    }
    this.lenisInstance?.destroy();
    this.gsapContext?.revert();
    this.destroyParallaxListeners?.();
    this.destroyWebgl?.();
  }

  private async initializeImmersiveMotion(): Promise<void> {
    const [{ default: Lenis }, gsapModule, scrollTriggerModule] = await Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]);

    const gsap = gsapModule.gsap;
    const { ScrollTrigger } = scrollTriggerModule;

    gsap.registerPlugin(ScrollTrigger);

    this.lenisInstance = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2
    });

    this.lenisInstance?.on('scroll', () => ScrollTrigger.update());
    const animate = (time: number): void => {
      this.lenisInstance?.raf(time);
      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);

    const root = this.hostElement.nativeElement;

    this.gsapContext = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.scroll-typo').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 48, opacity: 0, filter: 'blur(8px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%'
            }
          }
        );
      });

      gsap.to('.mono-background-inner', {
        yPercent: -12,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to('.mana-orb-a, .mana-orb-c', {
        yPercent: -18,
        xPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to('.mana-orb-b, .mana-orb-d', {
        yPercent: 16,
        xPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      const pinnedTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.immersive-pin-section',
          start: 'top top',
          end: '+=180%',
          pin: true,
          scrub: 0.9
        }
      });

      pinnedTimeline
        .fromTo('.immersive-title', { opacity: 0.35, y: 80, scale: 0.92 }, { opacity: 1, y: 0, scale: 1 }, 0)
        .fromTo('.immersive-copy p', { opacity: 0, y: 28 }, { opacity: 1, y: 0 }, 0.1)
        .fromTo('.immersive-layer.layer-a', { x: -120, opacity: 0.2 }, { x: 40, opacity: 1 }, 0)
        .fromTo('.immersive-layer.layer-b', { x: 130, y: 40, opacity: 0.1 }, { x: -30, y: -30, opacity: 0.95 }, 0)
        .fromTo('.immersive-layer.layer-c', { scale: 0.72, opacity: 0 }, { scale: 1.04, opacity: 0.88 }, 0.15)
        .to('.immersive-title', { y: -18, scale: 1.03 }, 0.65)
        .to('.immersive-layer.layer-a', { rotate: 10, x: 90 }, 0.7)
        .to('.immersive-layer.layer-b', { rotate: -10, x: -80 }, 0.7);

      gsap.to('.h-scroll-track', {
        xPercent: -72,
        ease: 'none',
        scrollTrigger: {
          trigger: '.h-scroll-section',
          start: 'top top',
          end: '+=240%',
          pin: true,
          scrub: 1
        }
      });
    }, root);

    this.setupInteractiveParallax(gsap, root);
    await this.initializeWebglScene();
    ScrollTrigger.refresh();
  }

  private async initializeWebglScene(): Promise<void> {
    const canvas = this.heroWebglCanvas?.nativeElement;
    if (!canvas) {
      return;
    }

    const THREE = await import('three');

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0.2, 5.4);

    const keyLight = new THREE.PointLight(0x52f1ff, 1.6, 24);
    keyLight.position.set(2.4, 1.8, 2.8);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x8b5cf6, 1.2, 20);
    fillLight.position.set(-2.2, -1.4, 2);
    scene.add(fillLight);

    const ringGeometry = new THREE.TorusKnotGeometry(1.05, 0.24, 168, 20);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x52f1ff,
      emissive: 0x0f2a39,
      metalness: 0.72,
      roughness: 0.16
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ringMesh);

    const coreGeometry = new THREE.IcosahedronGeometry(0.78, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xb8ff6a,
      emissive: 0x22360f,
      metalness: 0.16,
      roughness: 0.24,
      transmission: 0.14,
      transparent: true,
      opacity: 0.94
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.2 + Math.random() * 1.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xdce9ff,
      size: 0.03,
      transparent: true,
      opacity: 0.72
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const resize = (): void => {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    const clock = new THREE.Clock();
    const renderLoop = (): void => {
      const t = clock.getElapsedTime();
      ringMesh.rotation.x = t * 0.18;
      ringMesh.rotation.y = t * 0.28;
      coreMesh.rotation.y = -t * 0.38;
      coreMesh.rotation.x = Math.sin(t * 0.6) * 0.25;
      particles.rotation.y = t * 0.08;
      particles.rotation.x = Math.cos(t * 0.22) * 0.15;
      renderer.render(scene, camera);
      this.webglFrameId = requestAnimationFrame(renderLoop);
    };
    this.webglFrameId = requestAnimationFrame(renderLoop);

    this.destroyWebgl = () => {
      window.removeEventListener('resize', resize);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }

  private setupInteractiveParallax(gsap: { to: (target: string | Element, vars: object) => void }, root: HTMLElement): void {
    const visual = root.querySelector<HTMLElement>('.immersive-visual');
    const layers = Array.from(root.querySelectorAll<HTMLElement>('.immersive-layer'));

    if (!visual || !layers.length) {
      return;
    }

    const onMove = (event: PointerEvent): void => {
      const rect = visual.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      layers.forEach((layer, index) => {
        const factor = (index + 1) * 10;
        gsap.to(layer, {
          x: x * factor,
          y: y * factor,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    };

    const onLeave = (): void => {
      layers.forEach((layer) => {
        gsap.to(layer, { x: 0, y: 0, duration: 0.7, ease: 'power3.out' });
      });
    };

    visual.addEventListener('pointermove', onMove);
    visual.addEventListener('pointerleave', onLeave);

    this.destroyParallaxListeners = () => {
      visual.removeEventListener('pointermove', onMove);
      visual.removeEventListener('pointerleave', onLeave);
    };
  }
}
