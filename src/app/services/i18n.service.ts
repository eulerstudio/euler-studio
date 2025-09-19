import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Translation {
  [key: string]: string | string[] | Translation;
}

export interface Translations {
  [locale: string]: Translation;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'euler-studio-language';
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
        cta_secondary: 'Get In Touch',
        typing_words: ['Digital Solutions', 'Web Development', 'Innovation', 'Excellence'],
        scroll: 'Scroll'
      },
      about: {
        title: 'About Euler Studio',
        subtitle: 'Transforming ideas into digital realities through innovation, creativity, and technical excellence.',
        story_title: 'Our Story',
        story_description_1: 'Founded with a vision to bridge the gap between innovative ideas and digital implementation, Euler Studio has emerged as a trusted partner for businesses seeking to establish a strong digital presence. Our team combines creative design thinking with robust technical expertise to deliver solutions that not only meet but exceed expectations.',
        story_description_2: 'Based in Jakarta, we serve clients across Indonesia and internationally, helping them navigate the digital landscape with confidence and achieve sustainable growth through technology-driven solutions.',
        services_title: 'What We Do',
        mission_title: 'Our Mission',
        mission_text: 'To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital world.',
        services: {
          web_development: {
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern technologies and best practices.'
          },
          digital_strategy: {
            title: 'Digital Strategy',
            description: 'Comprehensive digital transformation strategies to accelerate business growth.'
          },
          ui_ux_design: {
            title: 'UI/UX Design',
            description: 'User-centered design solutions that create engaging and intuitive experiences.'
          },
          technical_consulting: {
            title: 'Technical Consulting',
            description: 'Expert guidance on technology choices, architecture, and implementation strategies.'
          }
        },
        stats: {
          projects: 'Projects Completed',
          experience: 'Years Experience',
          satisfaction: 'Client Satisfaction',
          support: 'Support Available'
        }
      },
      portfolio: {
        title: 'Latest Projects',
        subtitle: 'Showcasing our commitment to excellence through innovative digital solutions that drive real business results.',
        cta_title: 'Ready to Start Your Project?',
        cta_description: "Let's discuss how we can bring your vision to life with our expertise and creativity.",
        cta_button: 'Get In Touch',
        live_demo: 'Live Demo',
        featured: 'Featured',
        empty_title: 'No Projects Found',
        empty_description: 'No projects match the selected category. Try selecting a different filter.'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Ready to transform your ideas into reality? Let\'s discuss your project and explore how we can help you succeed.',
        info_title: 'Contact Information',
        form_title: 'Send us a Message',
        success_title: 'Message Sent Successfully!',
        success_description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
        business_hours: 'Business Hours',
        labels: {
          email: 'Email',
          phone: 'Phone',
          office: 'Office',
          address: 'Address',
          full_name: 'Full Name',
          email_address: 'Email Address',
          company: 'Company',
          service_interest: 'Service of Interest',
          project_details: 'Project Details'
        },
        address: {
          street: 'Gedung Bursa Efek Indonesia Tower 1',
          unit: 'Level 3 Unit 304 SCBD, Senayan',
          city: 'South Jakarta',
          postal_code: '12190',
          country: 'Indonesia',
          full: 'Gedung Bursa Efek Indonesia Tower 1, Level 3 Unit 304 SCBD, Senayan, South Jakarta 12190, Indonesia'
        },
        placeholders: {
          full_name: 'Your full name',
          email: 'your@email.com',
          company: 'Your company name',
          message: 'Tell us about your project, goals, and requirements...'
        },
        services: {
          web_development: 'Web Development',
          digital_strategy: 'Digital Strategy',
          ui_ux_design: 'UI/UX Design',
          consulting: 'Technical Consulting',
          other: 'Other'
        },
        validation: {
          name_required: 'Full name is required',
          name_min: 'Name is too short',
          email_required: 'Email is required',
          email_invalid: 'Please enter a valid email',
          service_required: 'Service selection is required',
          message_required: 'Project details are required',
          message_min: 'Please provide more details about your project'
        },
        send_message: 'Send Message',
        sending: 'Sending...',
        schedule: {
          monday_friday: 'Monday - Friday',
          saturday: 'Saturday',
          sunday: 'Sunday',
          weekday_hours: '9:00 AM - 6:00 PM',
          saturday_hours: '10:00 AM - 4:00 PM',
          closed: 'Closed'
        },
        info_cards: {
          quick_response: {
            title: 'Quick Response',
            description: 'We typically respond to all inquiries within 24 hours during business days.'
          },
          confidential: {
            title: 'Confidential',
            description: 'All project discussions are kept strictly confidential under our NDA policy.'
          },
          free_consultation: {
            title: 'Free Consultation',
            description: 'Initial project consultation and estimate are completely free with no obligations.'
          }
        }
      },
      footer: {
        brand_tagline: 'Transforming ideas into digital excellence through innovation, creativity, and technical expertise.',
        quick_links: 'Quick Links',
        services: 'Services',
        business_hours: 'Business Hours',
        start_project: 'Start Your Project',
        copyright: 'All rights reserved.',
        legal: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service'
        },
        services_list: {
          web_development: 'Web Development',
          digital_strategy: 'Digital Strategy',
          ui_ux_design: 'UI/UX Design',
          technical_consulting: 'Technical Consulting',
          mobile_apps: 'Mobile Applications',
          ecommerce: 'E-commerce Solutions'
        },
        schedule: {
          monday_friday: 'Monday - Friday',
          saturday: 'Saturday',
          sunday: 'Sunday',
          weekday_hours: '9:00 AM - 6:00 PM',
          saturday_hours: '10:00 AM - 4:00 PM',
          closed: 'Closed'
        }
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
        cta_secondary: 'Hubungi Kami',
        typing_words: ['Solusi Digital', 'Pengembangan Web', 'Inovasi', 'Keunggulan'],
        scroll: 'Gulir'
      },
      about: {
        title: 'Tentang Euler Studio',
        subtitle: 'Mengubah ide menjadi realitas digital melalui inovasi, kreativitas, dan keunggulan teknis.',
        story_title: 'Cerita Kami',
        story_description_1: 'Didirikan dengan visi untuk menjembatani kesenjangan antara ide inovatif dan implementasi digital, Euler Studio telah muncul sebagai mitra terpercaya bagi bisnis yang ingin membangun kehadiran digital yang kuat. Tim kami menggabungkan pemikiran desain kreatif dengan keahlian teknis yang kuat untuk memberikan solusi yang tidak hanya memenuhi tetapi melampaui harapan.',
        story_description_2: 'Berbasis di Jakarta, kami melayani klien di seluruh Indonesia dan internasional, membantu mereka menavigasi lanskap digital dengan percaya diri dan mencapai pertumbuhan berkelanjutan melalui solusi berbasis teknologi.',
        services_title: 'Apa yang Kami Lakukan',
        mission_title: 'Misi Kami',
        mission_text: 'Memberdayakan bisnis dengan solusi digital terdepan yang mendorong pertumbuhan, meningkatkan pengalaman pengguna, dan menciptakan nilai yang langgeng di dunia digital yang terus berkembang.',
        services: {
          web_development: {
            title: 'Pengembangan Web',
            description: 'Website dan aplikasi web kustom yang dibangun dengan teknologi modern dan praktik terbaik.'
          },
          digital_strategy: {
            title: 'Strategi Digital',
            description: 'Strategi transformasi digital yang komprehensif untuk mempercepat pertumbuhan bisnis.'
          },
          ui_ux_design: {
            title: 'Desain UI/UX',
            description: 'Solusi desain yang berpusat pada pengguna yang menciptakan pengalaman yang menarik dan intuitif.'
          },
          technical_consulting: {
            title: 'Konsultasi Teknis',
            description: 'Panduan ahli tentang pilihan teknologi, arsitektur, dan strategi implementasi.'
          }
        },
        stats: {
          projects: 'Proyek Selesai',
          experience: 'Tahun Pengalaman',
          satisfaction: 'Kepuasan Klien',
          support: 'Dukungan Tersedia'
        }
      },
      portfolio: {
        title: 'Proyek Terbaru',
        subtitle: 'Menampilkan komitmen kami terhadap keunggulan melalui solusi digital inovatif yang menghasilkan hasil bisnis nyata.',
        cta_title: 'Siap Memulai Proyek Anda?',
        cta_description: 'Mari diskusikan bagaimana kami dapat mewujudkan visi Anda dengan keahlian dan kreativitas kami.',
        cta_button: 'Hubungi Kami',
        live_demo: 'Demo Langsung',
        featured: 'Unggulan',
        empty_title: 'Tidak Ada Proyek Ditemukan',
        empty_description: 'Tidak ada proyek yang cocok dengan kategori yang dipilih. Coba pilih filter yang berbeda.'
      },
      contact: {
        title: 'Hubungi Kami',
        subtitle: 'Siap mengubah ide Anda menjadi kenyataan? Mari diskusikan proyek Anda dan jelajahi bagaimana kami dapat membantu Anda sukses.',
        info_title: 'Informasi Kontak',
        form_title: 'Kirim Pesan',
        success_title: 'Pesan Terkirim!',
        success_description: 'Terima kasih telah menghubungi kami. Kami akan merespons dalam 24 jam.',
        business_hours: 'Jam Operasional',
        labels: {
          email: 'Email',
          phone: 'Telepon',
          office: 'Kantor',
          address: 'Alamat',
          full_name: 'Nama Lengkap',
          email_address: 'Alamat Email',
          company: 'Perusahaan',
          service_interest: 'Layanan yang Diminati',
          project_details: 'Detail Proyek'
        },
        address: {
          street: 'Gedung Bursa Efek Indonesia Tower 1',
          unit: 'Level 3 Unit 304 SCBD, Senayan',
          city: 'Jakarta Selatan',
          postal_code: '12190',
          country: 'Indonesia',
          full: 'Gedung Bursa Efek Indonesia Tower 1, Level 3 Unit 304 SCBD, Senayan, Jakarta Selatan 12190, Indonesia'
        },
        placeholders: {
          full_name: 'Nama lengkap Anda',
          email: 'email@anda.com',
          company: 'Nama perusahaan Anda',
          message: 'Ceritakan tentang proyek, tujuan, dan kebutuhan Anda...'
        },
        services: {
          web_development: 'Pengembangan Web',
          digital_strategy: 'Strategi Digital',
          ui_ux_design: 'Desain UI/UX',
          consulting: 'Konsultasi Teknis',
          other: 'Lainnya'
        },
        validation: {
          name_required: 'Nama lengkap diperlukan',
          name_min: 'Nama terlalu pendek',
          email_required: 'Email diperlukan',
          email_invalid: 'Masukkan email yang valid',
          service_required: 'Pilihan layanan diperlukan',
          message_required: 'Detail proyek diperlukan',
          message_min: 'Berikan detail lebih banyak tentang proyek Anda'
        },
        send_message: 'Kirim Pesan',
        sending: 'Mengirim...',
        schedule: {
          monday_friday: 'Senin - Jumat',
          saturday: 'Sabtu',
          sunday: 'Minggu',
          weekday_hours: '09:00 - 18:00',
          saturday_hours: '10:00 - 16:00',
          closed: 'Tutup'
        },
        info_cards: {
          quick_response: {
            title: 'Respon Cepat',
            description: 'Kami biasanya merespons semua pertanyaan dalam 24 jam selama hari kerja.'
          },
          confidential: {
            title: 'Rahasia',
            description: 'Semua diskusi proyek dijaga kerahasiaannya di bawah kebijakan NDA kami.'
          },
          free_consultation: {
            title: 'Konsultasi Gratis',
            description: 'Konsultasi proyek awal dan estimasi sepenuhnya gratis tanpa kewajiban.'
          }
        }
      },
      footer: {
        brand_tagline: 'Mengubah ide menjadi keunggulan digital melalui inovasi, kreativitas, dan keahlian teknis.',
        quick_links: 'Tautan Cepat',
        services: 'Layanan',
        business_hours: 'Jam Operasional',
        start_project: 'Mulai Proyek Anda',
        copyright: 'Hak cipta dilindungi.',
        legal: {
          privacy: 'Kebijakan Privasi',
          terms: 'Syarat Layanan'
        },
        services_list: {
          web_development: 'Pengembangan Web',
          digital_strategy: 'Strategi Digital',
          ui_ux_design: 'Desain UI/UX',
          technical_consulting: 'Konsultasi Teknis',
          mobile_apps: 'Aplikasi Mobile',
          ecommerce: 'Solusi E-commerce'
        },
        schedule: {
          monday_friday: 'Senin - Jumat',
          saturday: 'Sabtu',
          sunday: 'Minggu',
          weekday_hours: '09:00 - 18:00',
          saturday_hours: '10:00 - 16:00',
          closed: 'Tutup'
        }
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
        cta_secondary: '联系我们',
        typing_words: ['数字解决方案', '网站开发', '创新技术', '卓越品质'],
        scroll: '滚动'
      },
      about: {
        title: '关于欧拉工作室',
        subtitle: '通过创新、创意和技术卓越将想法转化为数字现实。',
        story_title: '我们的故事',
        story_description_1: '欧拉工作室成立时怀着弥合创新理念与数字实现之间差距的愿景，已成为寻求建立强大数字形象的企业的可信赖合作伙伴。我们的团队将创意设计思维与强大的技术专长相结合，提供不仅满足而且超越期望的解决方案。',
        story_description_2: '总部位于雅加达，我们为印度尼西亚和国际客户提供服务，帮助他们自信地驾驭数字环境，通过技术驱动的解决方案实现可持续增长。',
        services_title: '我们的服务',
        mission_title: '我们的使命',
        mission_text: '通过前沿的数字解决方案赋能企业，推动增长，增强用户体验，在不断发展的数字世界中创造持久价值。',
        services: {
          web_development: {
            title: '网站开发',
            description: '使用现代技术和最佳实践 构建和定制 网站以及应用程序。'
          },
          digital_strategy: {
            title: '数字策略',
            description: '全面的数字化转型策略，加速业务增长。'
          },
          ui_ux_design: {
            title: 'UI/UX设计',
            description: '提供以用户为中心的解决方案。'
          },
          technical_consulting: {
            title: '技术咨询',
            description: '提供 技术选择、架构和实施策略方面的专家指导。'
          }
        },
        stats: {
          projects: '已完成项目',
          experience: '年经验',
          satisfaction: '客户满意度',
          support: '支持可用'
        }
      },
      portfolio: {
        title: '最新项目',
        subtitle: '通过驱动实际业务成果的创新数字解决方案，彰显我们对卓越品质的执着追求。',
        cta_title: '准备开始您的项目？',
        cta_description: '让我们讨论如何用我们的专业知识和创意将您的愿景变为现实。',
        cta_button: '联系我们',
        live_demo: '现场演示',
        featured: '特色项目',
        empty_title: '未找到项目',
        empty_description: '没有项目匹配所选类别。请尝试选择不同的筛选器。'
      },
      contact: {
        title: '联系我们',
        subtitle: '准备好将您的想法变为现实了吗？让我们一同探讨您的项目，探寻助力您成功的方法。',
        info_title: '联系信息',
        form_title: '发送消息',
        success_title: '消息发送成功！',
        success_description: '感谢您联系我们。我们将在24小时内回复。',
        business_hours: '营业时间',
        labels: {
          email: '电子邮件',
          phone: '电话',
          office: '办公室',
          address: '地址',
          full_name: '全名',
          email_address: '电子邮件地址',
          company: '公司',
          service_interest: '感兴趣的服务',
          project_details: '项目详情'
        },
        address: {
          street: '印度尼西亚证券交易所大厦1号塔',
          unit: '3层304单元 SCBD, Senayan',
          city: '南雅加达',
          postal_code: '12190',
          country: '印度尼西亚',
          full: '印度尼西亚证券交易所大厦1号塔，3层304单元 SCBD, Senayan，南雅加达 12190，印度尼西亚'
        },
        placeholders: {
          full_name: '您的全名',
          email: '您的@邮箱.com',
          company: '您的公司名称',
          message: '告诉我们您的项目、目标和需求...'
        },
        services: {
          web_development: '网站开发',
          digital_strategy: '数字策略',
          ui_ux_design: 'UI/UX设计',
          consulting: '技术咨询',
          other: '其他'
        },
        validation: {
          name_required: '全名为必填项',
          name_min: '姓名过短',
          email_required: '电子邮件为必填项',
          email_invalid: '请输入有效的电子邮件',
          service_required: '服务选择为必填项',
          message_required: '项目详情为必填项',
          message_min: '请提供更多项目详情'
        },
        send_message: '发送消息',
        sending: '发送中...',
        schedule: {
          monday_friday: '周一 - 周五',
          saturday: '周六',
          sunday: '周日',
          weekday_hours: '上午9:00 - 下午6:00',
          saturday_hours: '上午10:00 - 下午4:00',
          closed: '休息'
        },
        info_cards: {
          quick_response: {
            title: '快速响应',
            description: '我们通常在工作日24小时内回复所有询问。'
          },
          confidential: {
            title: '保密',
            description: '所有项目讨论均在我们的保密协议政策下严格保密。'
          },
          free_consultation: {
            title: '免费咨询',
            description: '初次项目咨询和估价完全免费，无任何义务。'
          }
        }
      },
      footer: {
        brand_tagline: '通过创新、创意和技术专长将想法转化为数字卓越。',
        quick_links: '快速链接',
        services: '服务',
        business_hours: '营业时间',
        start_project: '开始您的项目',
        copyright: '版权所有。',
        legal: {
          privacy: '隐私政策',
          terms: '服务条款'
        },
        services_list: {
          web_development: '网站开发',
          digital_strategy: '数字策略',
          ui_ux_design: 'UI/UX设计',
          technical_consulting: '技术咨询',
          mobile_apps: '移动应用',
          ecommerce: '电子商务解决方案'
        },
        schedule: {
          monday_friday: '周一 - 周五',
          saturday: '周六',
          sunday: '周日',
          weekday_hours: '上午9:00 - 下午6:00',
          saturday_hours: '上午10:00 - 下午4:00',
          closed: '休息'
        }
      }
    }
  };

  constructor() {
    // Initialize locale after translations are available
    this.currentLocale.set(this.getInitialLocale());
  }

  getCurrentLocale() {
    return this.currentLocale();
  }

  private getInitialLocale(): string {
    if (isPlatformBrowser(this.platformId)) {
      // Check for pre-loaded language from HTML script
      const preLoadedLang = (window as any).__EULER_INITIAL_LANG__;
      if (preLoadedLang && this.translations[preLoadedLang]) {
        return preLoadedLang;
      }

      // Fallback: Try to get from localStorage directly
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved && this.translations[saved]) {
        return saved;
      }

      // Fall back to browser language
      const browserLang = navigator.language.split('-')[0];
      if (this.translations[browserLang]) {
        return browserLang;
      }
    }

    // Default to English
    return 'en';
  }

  private saveToStorage(locale: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, locale);
    }
  }

  setLocale(locale: string): void {
    if (this.translations[locale]) {
      this.currentLocale.set(locale);
      this.saveToStorage(locale);
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
