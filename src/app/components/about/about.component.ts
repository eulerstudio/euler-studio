import { Component, ChangeDetectionStrategy, signal, OnInit, inject, ElementRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

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
  private i18n = inject(I18nService);
  isVisible = signal(false);

  services = [
    {
      titleKey: 'about.services.web_development.title',
      descriptionKey: 'about.services.web_development.description',
      icon: '🌐'
    },
    {
      titleKey: 'about.services.digital_strategy.title',
      descriptionKey: 'about.services.digital_strategy.description',
      icon: '📊'
    },
    {
      titleKey: 'about.services.ui_ux_design.title',
      descriptionKey: 'about.services.ui_ux_design.description',
      icon: '🎨'
    },
    {
      titleKey: 'about.services.technical_consulting.title',
      descriptionKey: 'about.services.technical_consulting.description',
      icon: '⚡'
    }
  ];

  stats = [
    { number: '50+', labelKey: 'about.stats.projects' },
    { number: '5+', labelKey: 'about.stats.experience' },
    { number: '100%', labelKey: 'about.stats.satisfaction' },
    { number: '24/7', labelKey: 'about.stats.support' }
  ];

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  translate(key: string): string {
    return this.i18n.translate(key);
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
