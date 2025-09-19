import { Component, ChangeDetectionStrategy, signal, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
  private i18nService = inject(I18nService);

  isVisible = signal(false);
  currentWordIndex = signal(0);

  typingWords = computed(() => {
    const words = this.i18nService.translate('hero.typing_words');
    return Array.isArray(words) ? words : ['Digital Solutions', 'Web Development', 'Innovation', 'Excellence'];
  });

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  ngOnInit(): void {
    // Trigger entrance animation
    setTimeout(() => {
      this.isVisible.set(true);
    }, 100);

    // Start typing animation
    this.startTypingAnimation();
  }

  private startTypingAnimation(): void {
    setInterval(() => {
      this.currentWordIndex.update(index =>
        (index + 1) % this.typingWords().length
      );
    }, 3000);
  }

  scrollToAbout(): void {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}