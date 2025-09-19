import { Injectable, signal } from '@angular/core';

export interface Translation {
  [key: string]: string | Translation;
}

export interface Translations {
  [locale: string]: Translation;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLocale = signal<string>('en');

  private translations: Translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        contact: 'Contact'
      },
      hero: {
        title: 'Crafting Digital Solutions that Transform Ideas',
        subtitle: 'We are Euler Studio, a forward-thinking digital agency specializing in creating exceptional web experiences that drive business growth and innovation.',
        cta_primary: 'Discover Our Work',
        cta_secondary: 'Get In Touch'
      },
      about: {
        title: 'About Euler Studio',
        subtitle: 'Transforming ideas into digital realities through innovation, creativity, and technical excellence.',
        story_title: 'Our Story',
        mission_title: 'Our Mission',
        mission_text: 'To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital world.'
      },
      portfolio: {
        title: 'Our Portfolio',
        subtitle: 'Showcasing our commitment to excellence through innovative digital solutions that drive real business results.',
        cta_title: 'Ready to Start Your Project?',
        cta_description: "Let's discuss how we can bring your vision to life with our expertise and creativity.",
        cta_button: 'Get In Touch'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Ready to transform your ideas into reality? Let\'s discuss your project and explore how we can help you succeed.',
        form_title: 'Send us a Message',
        success_title: 'Message Sent Successfully!',
        success_description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.'
      }
    },
    id: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        portfolio: 'Portfolio',
        contact: 'Kontak'
      },
      hero: {
        title: 'Menciptakan Solusi Digital yang Mengubah Ide',
        subtitle: 'Kami adalah Euler Studio, agensi digital yang berpikir maju yang mengkhususkan diri dalam menciptakan pengalaman web luar biasa yang mendorong pertumbuhan bisnis dan inovasi.',
        cta_primary: 'Temukan Karya Kami',
        cta_secondary: 'Hubungi Kami'
      },
      about: {
        title: 'Tentang Euler Studio',
        subtitle: 'Mengubah ide menjadi realitas digital melalui inovasi, kreativitas, dan keunggulan teknis.',
        story_title: 'Cerita Kami',
        mission_title: 'Misi Kami',
        mission_text: 'Memberdayakan bisnis dengan solusi digital terdepan yang mendorong pertumbuhan, meningkatkan pengalaman pengguna, dan menciptakan nilai yang langgeng di dunia digital yang terus berkembang.'
      },
      portfolio: {
        title: 'Portfolio Kami',
        subtitle: 'Menampilkan komitmen kami terhadap keunggulan melalui solusi digital inovatif yang menghasilkan hasil bisnis nyata.',
        cta_title: 'Siap Memulai Proyek Anda?',
        cta_description: 'Mari diskusikan bagaimana kami dapat mewujudkan visi Anda dengan keahlian dan kreativitas kami.',
        cta_button: 'Hubungi Kami'
      },
      contact: {
        title: 'Hubungi Kami',
        subtitle: 'Siap mengubah ide Anda menjadi kenyataan? Mari diskusikan proyek Anda dan jelajahi bagaimana kami dapat membantu Anda sukses.',
        form_title: 'Kirim Pesan',
        success_title: 'Pesan Terkirim!',
        success_description: 'Terima kasih telah menghubungi kami. Kami akan merespons dalam 24 jam.'
      }
    },
    zh: {
      nav: {
        home: '首页',
        about: '关于我们',
        portfolio: '作品集',
        contact: '联系我们'
      },
      hero: {
        title: '打造数字解决方案，将想法转化为现实',
        subtitle: '我们是欧拉工作室，一家前瞻性的数字机构，专门创造卓越的网络体验，推动业务增长和创新。',
        cta_primary: '发现我们的作品',
        cta_secondary: '联系我们'
      },
      about: {
        title: '关于欧拉工作室',
        subtitle: '通过创新、创意和技术卓越将想法转化为数字现实。',
        story_title: '我们的故事',
        mission_title: '我们的使命',
        mission_text: '通过前沿的数字解决方案赋能企业，推动增长，增强用户体验，在不断发展的数字世界中创造持久价值。'
      },
      portfolio: {
        title: '我们的作品集',
        subtitle: '通过创新的数字解决方案展示我们对卓越的承诺，实现真正的业务成果。',
        cta_title: '准备开始您的项目？',
        cta_description: '让我们讨论如何用我们的专业知识和创意将您的愿景变为现实。',
        cta_button: '联系我们'
      },
      contact: {
        title: '联系我们',
        subtitle: '准备将您的想法变为现实？让我们讨论您的项目，探索我们如何帮助您成功。',
        form_title: '发送消息',
        success_title: '消息发送成功！',
        success_description: '感谢您联系我们。我们将在24小时内回复。'
      }
    }
  };

  getCurrentLocale() {
    return this.currentLocale();
  }

  setLocale(locale: string): void {
    if (this.translations[locale]) {
      this.currentLocale.set(locale);
      // In a full implementation, this would also handle URL updates and localStorage
    }
  }

  translate(key: string): string {
    const keys = key.split('.');
    const currentTranslations = this.translations[this.currentLocale()];

    let translation: any = currentTranslations;
    for (const k of keys) {
      translation = translation?.[k];
    }

    return translation || key;
  }

  // Alias for easier use in templates
  t = this.translate.bind(this);
}