import { Component, ChangeDetectionStrategy, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
  isVisible = signal(false);
  currentWordIndex = signal(0);

  typingWords = [
    'Digital Solutions',
    'Web Development',
    'Innovation',
    'Excellence'
  ];

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
        (index + 1) % this.typingWords.length
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