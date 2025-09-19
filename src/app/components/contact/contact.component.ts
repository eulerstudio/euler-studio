import { Component, ChangeDetectionStrategy, signal, OnInit, inject, ElementRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CONTACT_INFO } from '../../constants/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  private elementRef = inject(ElementRef);
  private fb = inject(FormBuilder);
  private platformId = inject(PLATFORM_ID);

  isVisible = signal(false);
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  contactInfo = CONTACT_INFO;
  contactForm: FormGroup;

  services = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'digital-strategy', label: 'Digital Strategy' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      service: ['', Validators.required],
      budget: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

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

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true);

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.contactForm.reset();

        // Reset success state after 5 seconds
        setTimeout(() => {
          this.submitSuccess.set(false);
        }, 5000);
      }, 2000);
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  private markAllFieldsAsTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} is too short`;
    }
    return '';
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here
    });
  }

  openMaps(): void {
    const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(this.contactInfo.address.full)}`;
    window.open(mapsUrl, '_blank');
  }
}