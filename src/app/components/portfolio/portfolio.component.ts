import { Component, ChangeDetectionStrategy, signal, OnInit, inject, ElementRef, PLATFORM_ID, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { PROJECTS, PROJECT_CATEGORIES, type Project } from '../../constants/projects';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit {
  private elementRef = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private i18n = inject(I18nService);

  isVisible = signal(false);
  projects = signal<Project[]>(PROJECTS);
  selectedCategory = signal<string>('all');

  // Computed signal that automatically updates when i18n service changes
  currentLang = computed(() => this.i18n.getCurrentLocale() as 'en' | 'id' | 'zh');

  categories = PROJECT_CATEGORIES;

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

  filteredProjects() {
    const category = this.selectedCategory();
    const allProjects = this.projects();

    return category === 'all'
      ? allProjects
      : allProjects.filter(project => project.category === category);
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory.set(categoryId);
  }

  getProjectDescription(project: Project): string {
    return project.description[this.currentLang()];
  }

  viewProject(project: Project): void {
    // Could open a modal or navigate to project detail page
    console.log('View project details:', project);
    // For now, just open the live demo
    if (project.url) {
      this.openLiveDemo(project);
    }
  }

  openLiveDemo(project: Project): void {
    if (project.url && isPlatformBrowser(this.platformId)) {
      window.open(project.url, '_blank');
    }
  }
}