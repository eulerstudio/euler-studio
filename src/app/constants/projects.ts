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
    id: 'bmw-dealer-portal',
    name: 'BMW Dealer Portal',
    category: 'Automotive',
    description: {
      en: 'Comprehensive dealer management system for BMW operations',
      id: 'Sistem manajemen dealer komprehensif untuk operasi BMW',
      zh: 'BMW经销商综合管理系统'
    },
    technologies: ['Angular', 'NestJS', 'PostgreSQL'],
    year: 2024,
    featured: true,
    image: '/images/projects/bmw-dealer-portal.jpg'
  },
  {
    id: 'arsitag',
    name: 'Arsitag',
    category: 'Corporate',
    description: {
      en: 'Platform for finding architects, project bidding, and architectural services marketplace',
      id: 'Platform untuk mencari arsitek, penawaran proyek, dan marketplace layanan arsitektur',
      zh: '建筑师查找平台，项目投标和建筑服务市场'
    },
    technologies: ['Angular', 'SCSS', 'TypeScript'],
    year: 2024,
    featured: true,
    image: '/images/projects/arsitag.jpg'
  },
  {
    id: 'dikichi-supply-chain',
    name: 'Dikichi Supply Chain Module',
    category: 'Enterprise',
    description: {
      en: 'Advanced supply chain management solution with real-time tracking',
      id: 'Solusi manajemen rantai pasokan canggih dengan pelacakan real-time',
      zh: '先进的供应链管理解决方案与实时跟踪'
    },
    technologies: ['Angular', 'NestJS', 'Redis', 'PostgreSQL'],
    year: 2024,
    featured: true,
    image: '/images/projects/dikichi.jpg'
  },
  {
    id: 'astra-honda-dashboard',
    name: 'Astra Honda Motor Dashboard',
    category: 'Manufacturing',
    description: {
      en: 'Real-time monitoring dashboard for engine assembling and welding operations',
      id: 'Dashboard monitoring real-time untuk operasi perakitan mesin dan pengelasan',
      zh: '发动机装配和焊接操作实时监控仪表板'
    },
    technologies: ['Angular', 'Chart.js', 'WebSocket', 'NestJS'],
    year: 2024,
    featured: true,
    image: '/images/projects/astra-honda-dashboard.jpg'
  },
  {
    id: 'ekojaya-money-changer',
    name: 'Ekojaya Money Changer',
    category: 'Finance',
    description: {
      en: 'Complete foreign exchange management system with real-time rates',
      id: 'Sistem manajemen valuta asing lengkap dengan kurs real-time',
      zh: '完整的外汇管理系统与实时汇率'
    },
    technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Payment Gateway'],
    year: 2024,
    featured: true,
    image: '/images/projects/ekojaya-money-changer.jpg'
  },
  {
    id: 'mylifejars',
    name: 'MyLifeJars',
    url: 'https://mylifejars.com',
    category: 'Finance',
    description: {
      en: 'Secure encrypted storage for personal memories and password management',
      id: 'Penyimpanan terenkripsi aman untuk kenangan pribadi dan manajemen kata sandi',
      zh: '安全加密存储个人回忆和密码管理'
    },
    technologies: ['Angular', 'Firebase', 'PWA', 'Chart.js'],
    year: 2024,
    featured: true,
    image: '/images/projects/mylifejars.jpg'
  },
  // {
  //   id: 'tickr-tracker',
  //   name: 'Tickr Meter',
  //   category: 'Finance',
  //   description: {
  //     en: 'Stock & cryptocurrency tracking device with real-time market data',
  //     id: 'Perangkat pelacakan saham & cryptocurrency dengan data pasar real-time',
  //     zh: '股票和加密货币跟踪设备，提供实时市场数据'
  //   },
  //   technologies: ['Angular', 'IoT', 'WebSocket', 'Market APIs'],
  //   year: 2024,
  //   featured: true,
  //   image: '/images/projects/tickr.jpg'
  // },
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
  { id: 'Automotive', label: 'Automotive' },
  { id: 'Corporate', label: 'Corporate' },
  { id: 'Enterprise', label: 'Enterprise' },
  { id: 'Manufacturing', label: 'Manufacturing' },
  { id: 'Finance', label: 'Finance' },
  { id: 'Industrial Services', label: 'Industrial' }
];
