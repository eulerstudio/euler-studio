import { Component, ChangeDetectionStrategy, signal, OnInit, inject, ElementRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { I18nService } from '../../services/i18n.service';

interface Project {
  id: string;
  name: string;
  category: string;
  url?: string;
  description: {
    en: string;
    id: string;
    zh: string;
  };
  technologies: string[];
  year: number;
  featured: boolean;
  image?: string;
}

interface ProjectsData {
  projects: Project[];
}

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
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private i18n = inject(I18nService);

  isVisible = signal(false);
  projects = signal<Project[]>([]);
  selectedCategory = signal<string>('all');
  currentLang = signal<'en' | 'id' | 'zh'>('en');

  categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Industrial Services', label: 'Industrial' },
    { id: 'Automotive', label: 'Automotive' },
    { id: 'Corporate', label: 'Corporate' }
  ];

  ngOnInit(): void {
    this.loadProjects();
    this.setupIntersectionObserver();
    // Sync current language with i18n service
    this.currentLang.set(this.i18n.getCurrentLocale() as 'en' | 'id' | 'zh');
  }

  translate(key: string): string {
    return this.i18n.translate(key);
  }

  private loadProjects(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<ProjectsData>('/data/projects.json').subscribe({
        next: (data) => {
          this.projects.set(data.projects);
        },
        error: (error) => {
          console.error('Error loading projects:', error);
          this.loadFallbackProjects();
        }
      });
    } else {
      // Server-side rendering: use fallback data
      this.loadFallbackProjects();
    }
  }

  private loadFallbackProjects(): void {
    this.projects.set([
          {
            id: 'arsitag',
            name: 'Arsitag',
            category: 'Architecture Platform',
            description: {
              en: 'Digital architecture platform connecting architects with clients',
              id: 'Platform arsitektur digital yang menghubungkan arsitek dengan klien',
              zh: '连接建筑师与客户的数字建筑平台'
            },
            technologies: ['Angular', 'Node.js', 'MongoDB'],
            year: 2023,
            featured: true
          },
          {
            id: 'omi-agency',
            name: 'Omi Agency',
            category: 'Creative Agency',
            description: {
              en: 'Creative agency website showcasing innovative design solutions',
              id: 'Website agensi kreatif yang menampilkan solusi desain inovatif',
              zh: '展示创新设计解决方案的创意机构网站'
            },
            technologies: ['React', 'Next.js', 'TypeScript'],
            year: 2023,
            featured: true
          },
          {
            id: 'kaizer-coating',
            name: 'Kaizer Coating',
            category: 'Industrial Services',
            description: {
              en: 'Professional coating services website with portfolio showcase',
              id: 'Website layanan coating profesional dengan showcase portfolio',
              zh: '专业涂层服务网站及作品展示'
            },
            technologies: ['Vue.js', 'Laravel', 'MySQL'],
            year: 2024,
            featured: true
          },
          {
            id: 'nob1-racing',
            name: 'Nob1 Racing',
            category: 'Automotive',
            description: {
              en: 'High-performance racing team website with event management',
              id: 'Website tim balap performa tinggi dengan manajemen event',
              zh: '高性能赛车队网站及赛事管理'
            },
            technologies: ['Angular', 'Express.js', 'PostgreSQL'],
            year: 2024,
            featured: true
          }
        ]);
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