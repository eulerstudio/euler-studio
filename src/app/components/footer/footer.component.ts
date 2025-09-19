import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CONTACT_INFO } from '../../constants/contact';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  contactInfo = CONTACT_INFO;
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', anchor: '#hero' },
    { label: 'About', anchor: '#about' },
    { label: 'Portfolio', anchor: '#portfolio' },
    { label: 'Contact', anchor: '#contact' }
  ];

  services = [
    'Web Development',
    'Digital Strategy',
    'UI/UX Design',
    'Technical Consulting',
    'Mobile Applications',
    'E-commerce Solutions'
  ];

  socialLinks = [
    { platform: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/company/euler-studio' },
    { platform: 'GitHub', icon: 'code', url: 'https://github.com/euler-studio' },
    { platform: 'Instagram', icon: 'camera_alt', url: 'https://instagram.com/euler.studio' },
    { platform: 'Twitter', icon: 'alternate_email', url: 'https://twitter.com/euler_studio' }
  ];

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