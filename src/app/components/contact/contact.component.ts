import { Component, ChangeDetectionStrategy, signal, OnInit, inject, ElementRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CONTACT_INFO } from '../../constants/contact';
import { I18nService } from '../../services/i18n.service';

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
  private i18n = inject(I18nService);

  isVisible = signal(false);
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  contactInfo = CONTACT_INFO;
  contactForm: FormGroup;

  services = [
    { value: 'web-development', labelKey: 'contact.services.web_development' },
    { value: 'digital-strategy', labelKey: 'contact.services.digital_strategy' },
    { value: 'ui-ux-design', labelKey: 'contact.services.ui_ux_design' },
    { value: 'consulting', labelKey: 'contact.services.consulting' },
    { value: 'other', labelKey: 'contact.services.other' }
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

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

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true);

      // Get form data
      const formData = this.contactForm.value;
      const selectedService = this.services.find(s => s.value === formData.service);
      const serviceLabel = selectedService ? this.translate(selectedService.labelKey) : formData.service;

      // Format WhatsApp message
      let message = `Hello! I'm interested in working with Euler Studio.\n\n`;
      message += `*Name:* ${formData.name}\n`;
      message += `*Email:* ${formData.email}\n`;
      if (formData.company) {
        message += `*Company:* ${formData.company}\n`;
      }
      message += `*Service:* ${serviceLabel}\n\n`;
      message += `*Message:*\n${formData.message}\n\n`;
      message += `Looking forward to hearing from you!`;

      // Create WhatsApp URL (remove + from phone number for WhatsApp API)
      const phoneNumber = this.contactInfo.phone.replace('+', '');
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new window/tab
      if (isPlatformBrowser(this.platformId)) {
        window.open(whatsappUrl, '_blank');
      }

      // Show success state
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.contactForm.reset();

        // Reset success state after 5 seconds
        setTimeout(() => {
          this.submitSuccess.set(false);
        }, 5000);
      }, 1000);
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
      if (field.errors['required']) {
        if (fieldName === 'name') return this.translate('contact.validation.name_required');
        if (fieldName === 'email') return this.translate('contact.validation.email_required');
        if (fieldName === 'service') return this.translate('contact.validation.service_required');
        if (fieldName === 'message') return this.translate('contact.validation.message_required');
      }
      if (field.errors['email']) return this.translate('contact.validation.email_invalid');
      if (field.errors['minlength']) {
        if (fieldName === 'name') return this.translate('contact.validation.name_min');
        if (fieldName === 'message') return this.translate('contact.validation.message_min');
      }
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
