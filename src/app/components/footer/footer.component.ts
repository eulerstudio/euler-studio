import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CONTACT_INFO } from '../../constants/contact';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private i18n = inject(I18nService);

  contactInfo = CONTACT_INFO;
  currentYear = new Date().getFullYear();

  quickLinks = [
    { labelKey: 'nav.home', anchor: '#hero' },
    { labelKey: 'nav.about', anchor: '#about' },
    { labelKey: 'nav.portfolio', anchor: '#portfolio' },
    { labelKey: 'nav.contact', anchor: '#contact' }
  ];

  services = [
    'footer.services_list.web_development',
    'footer.services_list.digital_strategy',
    'footer.services_list.ui_ux_design',
    'footer.services_list.technical_consulting',
    'footer.services_list.mobile_apps',
    'footer.services_list.ecommerce'
  ];

  socialLinks = [
    { platform: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/company/euler-studio' },
    { platform: 'GitHub', icon: 'code', url: 'https://github.com/euler-studio' },
    { platform: 'Instagram', icon: 'camera_alt', url: 'https://instagram.com/euler.studio' },
    { platform: 'Twitter', icon: 'alternate_email', url: 'https://twitter.com/euler_studio' }
  ];

  translate(key: string): string {
    return this.i18n.translate(key);
  }

  scrollToSection(anchor: string): void {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}