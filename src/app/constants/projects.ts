export interface Project {
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

export const PROJECTS: Project[] = [
  {
    id: 'kaizer-coating',
    name: 'Kaizer Coating',
    category: 'Industrial Services',
    url: 'https://kaizercoating.com/',
    description: {
      en: 'Professional coating services website with comprehensive portfolio showcase',
      id: 'Website layanan coating profesional dengan showcase portfolio komprehensif',
      zh: '专业涂层服务网站及全面作品展示'
    },
    technologies: ['Angular', 'NestJS'],
    year: 2024,
    featured: true,
    image: '/images/projects/kaizer-coating-hero.jpg'
  },
  {
    id: 'nobi-racing',
    name: 'NOB1 Racing',
    category: 'Automotive',
    url: 'https://nobiracing.co.id/',
    description: {
      en: 'High-performance racing team website with event management system',
      id: 'Website tim balap performa tinggi dengan sistem manajemen event',
      zh: '高性能赛车队网站及赛事管理系统'
    },
    technologies: ['Angular', 'NestJS'],
    year: 2024,
    featured: true,
    image: '/images/projects/nobi-racing-hero.jpg'
  },
  {
    id: 'pt-jams',
    name: 'PT Jaya Abadi Makmur Sentosa',
    category: 'Corporate',
    url: 'https://www.ptjams.co.id/',
    description: {
      en: 'Corporate website with comprehensive business solutions and services',
      id: 'Website korporat dengan solusi bisnis dan layanan komprehensif',
      zh: '企业网站提供全面的商业解决方案和服务'
    },
    technologies: ['Angular', 'NestJS'],
    year: 2024,
    featured: true,
    image: '/images/projects/pt-jams-hero.jpg'
  }
];

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'Industrial Services', label: 'Industrial' },
  { id: 'Automotive', label: 'Automotive' },
  { id: 'Corporate', label: 'Corporate' }
];