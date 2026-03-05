import {
  About,
  BlogSection,
  ContactSection,
  FactsData,
  Introduction,
  PortfolioSection,
  ProjectCtaData,
  ResumeSection,
  ServicesSection,
  SocialLinks,
  TestimonialSection,
  VideoSection
} from './index';

export interface SiteContentPayload {
  introduction: Introduction;
  about: About;
  socialLinks: SocialLinks;
  facts: FactsData;
  services: ServicesSection;
  portfolio: PortfolioSection;
  resume: ResumeSection;
  testimonial: TestimonialSection;
  contact: ContactSection;
  blog: BlogSection;
  video: VideoSection;
  projectCta: ProjectCtaData;
}

export type PartialSiteContentPayload = Partial<SiteContentPayload>;
