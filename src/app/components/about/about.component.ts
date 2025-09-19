import { Component, ChangeDetectionStrategy, signal, OnInit, inject, ElementRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  private elementRef = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  isVisible = signal(false);

  services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      icon: '🌐'
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies to accelerate business growth.',
      icon: '📊'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive experiences.',
      icon: '🎨'
    },
    {
      title: 'Technical Consulting',
      description: 'Expert guidance on technology choices, architecture, and implementation strategies.',
      icon: '⚡'
    }
  ];

  stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.isVisible.set(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(this.elementRef.nativeElement);
    } else {
      // Fallback for server-side rendering or unsupported browsers
      setTimeout(() => {
        this.isVisible.set(true);
      }, 100);
    }
  }
}