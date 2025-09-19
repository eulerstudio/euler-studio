import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private i18n = inject(I18nService);

  isMenuOpen = signal(false);

  navigationItems = [
    { anchor: '#hero', i18nKey: 'nav.home' },
    { anchor: '#about', i18nKey: 'nav.about' },
    { anchor: '#portfolio', i18nKey: 'nav.portfolio' },
    { anchor: '#contact', i18nKey: 'nav.contact' }
  ];

  languages = [
    { code: 'en', label: 'EN' },
    { code: 'id', label: 'ID' },
    { code: 'zh', label: '中文' }
  ];

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  getCurrentLang() {
    return this.i18n.getCurrentLocale();
  }

  switchLanguage(langCode: string): void {
    this.i18n.setLocale(langCode);
    this.closeMenu();
  }

  translate(key: string): string {
    return this.i18n.translate(key);
  }

  scrollToSection(anchor: string): void {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMenu();
  }
}