export const defaultLocale = 'en';
export const locales = ['en', 'sw'] as const;
export type Locale = typeof locales[number];

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    products: 'Products & Services',
    gallery: 'Gallery',
    news: 'News & Blog',
    contact: 'Contact',
    language: 'Language',
    
    // Hero Section
    heroTitle: 'Leading Agricultural & Livestock Production in Tanzania',
    heroSubtitle: 'Empowering farmers and communities through sustainable agricultural practices, quality livestock breeding, and comprehensive farming solutions.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Homepage Sections
    aboutTitle: 'About Robi Agri Products',
    aboutDescription: 'We are a leading agricultural and livestock production company based in Tanzania, committed to sustainable farming practices and quality livestock breeding.',
    servicesTitle: 'Our Services',
    livestockTitle: 'Livestock Production',
    livestockDescription: 'Premium cattle breeding, animal nutrition, and livestock management services.',
    agricultureTitle: 'Agricultural Services',
    agricultureDescription: 'Comprehensive crop production, farm equipment, and agricultural consultancy.',
    consultingTitle: 'Farm Consulting',
    consultingDescription: 'Expert agricultural advice and farm management solutions.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch with our agricultural experts',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    
    // Footer
    companyInfo: 'Leading agricultural and livestock production company in Tanzania.',
    quickLinks: 'Quick Links',
    services: 'Services',
    followUs: 'Follow Us',
    rights: 'All rights reserved.',
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    about: 'Kuhusu Sisi',
    products: 'Bidhaa na Huduma',
    gallery: 'Picha',
    news: 'Habari na Blogu',
    contact: 'Wasiliana',
    language: 'Lugha',
    
    // Hero Section
    heroTitle: 'Kuongoza Uzalishaji wa Kilimo na Mifugo Tanzania',
    heroSubtitle: 'Kuwawezesha wakulima na jamii kupitia mbinu endelevu za kilimo, uzalishaji wa mifugo wa ubora, na suluhisho kamili za kilimo.',
    getStarted: 'Anza Sasa',
    learnMore: 'Jifunze Zaidi',
    
    // Homepage Sections
    aboutTitle: 'Kuhusu Robi Agri Products',
    aboutDescription: 'Sisi ni kampuni inayoongoza katika uzalishaji wa kilimo na mifugo iliyopo Tanzania, tumejitolea katika mbinu endelevu za kilimo na uzalishaji wa mifugo wa ubora.',
    servicesTitle: 'Huduma Zetu',
    livestockTitle: 'Uzalishaji wa Mifugo',
    livestockDescription: 'Uzalishaji wa ngombe wa ubora, lishe ya wanyamapori, na huduma za usimamizi wa mifugo.',
    agricultureTitle: 'Huduma za Kilimo',
    agricultureDescription: 'Uzalishaji kamili wa mazao, vifaa vya shambani, na ushauri wa kilimo.',
    consultingTitle: 'Ushauri wa Shambani',
    consultingDescription: 'Ushauri wa kitaalamu wa kilimo na suluhisho za usimamizi wa shamba.',
    
    // Contact
    contactTitle: 'Wasiliana Nasi',
    contactSubtitle: 'Ungana na wataalamu wetu wa kilimo',
    name: 'Jina Kamili',
    email: 'Anwani ya Barua Pepe',
    phone: 'Nambari ya Simu',
    subject: 'Mada',
    message: 'Ujumbe',
    send: 'Tuma Ujumbe',
    
    // Footer
    companyInfo: 'Kampuni inayoongoza katika uzalishaji wa kilimo na mifugo Tanzania.',
    quickLinks: 'Viungo vya Haraka',
    services: 'Huduma',
    followUs: 'Tufuate',
    rights: 'Haki zote zimehifadhiwa.',
  }
};