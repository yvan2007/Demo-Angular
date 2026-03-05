import { Component, OnInit } from '@angular/core';
import { blogData } from '../../../data';
import { CommonModule, DatePipe } from '@angular/common';
import { SiteContentApiService } from '../../../shared/services/site-content-api.service';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, DatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  data = blogData;

  constructor(private readonly siteContentApi: SiteContentApiService) {}

  ngOnInit(): void {
    this.siteContentApi.getContent().subscribe((content) => {
      this.data = content.blog;
    });
  }
}
