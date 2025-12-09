/**
 * Portfolio API Endpoint
 * 
 * Endpoint: GET /api/portfolio
 * 
 * Untuk sekarang (Frontend only): data static dari composable
 * Untuk nanti (dengan CMS): uncomment bagian database/CMS fetch
 */

export default defineEventHandler(async (event) => {
  // ===== UNTUK CMS/DATABASE NANTI =====
  // Uncomment salah satu implementasi di bawah:

  /* 
  // 1. Fetch dari Database (contoh menggunakan Prisma)
  const items = await prisma.portfolioItem.findMany({
    where: { isActive: true },
    orderBy: { orderIndex: 'asc' },
    include: { prices: true }
  })

  const stats = await prisma.portfolioStat.findMany({
    orderBy: { orderIndex: 'asc' }
  })

  // 2. Fetch dari Headless CMS (contoh Strapi/Contentful)
  const response = await $fetch('https://your-cms.com/api/portfolio')
  
  // 3. Fetch dari file JSON
  const data = await import('~/data/portfolio.json')
  */

  // ===== DATA STATIC (SEKARANG) =====
  // Temporary static data - sama seperti di composable
  const portfolioData = {
    header: {
      badge: 'Portfolio Kami',
      title: 'Karya yang Berbicara',
      description: 'Dari startup hingga enterprise, kami telah membantu 50+ bisnis mencapai kesuksesan digital mereka'
    },
    
    items: [
      {
        id: 1,
        type: 'hero',
        colSpan: 'lg:col-span-2',
        rowSpan: 'lg:row-span-2',
        bgGradient: 'bg-gradient-to-br from-orange-500 to-red-600',
        aspectRatio: 'aspect-square relative',
        image: '/images/project/1.png',
        imageEffect: 'group-hover:scale-105 transition-transform duration-500 mix-blend-overlay opacity-60',
        padding: 'p-8',
        contentLayout: 'flex flex-col justify-between',
        badge: 'Behind the Designs',
        title: 'Shaping Experiences That Make Life Simpler',
        description: 'I\'m a product designer focused on building clean, intuitive interfaces that solve real-world problems.',
        showPlaceholders: true
      },
      {
        id: 2,
        type: 'feature',
        colSpan: 'lg:col-span-2',
        rowSpan: '',
        bgGradient: 'bg-gradient-to-br from-gray-900 to-gray-800',
        aspectRatio: 'aspect-[2/1] relative',
        image: '/images/project/2.png',
        imageEffect: 'opacity-40',
        padding: 'p-8',
        contentLayout: 'flex flex-col justify-center',
        title: 'Strategist. Creative partner.',
        description: 'Blending clarity and creativity to build brands with purpose.',
        showButton: true,
        buttonText: 'See more'
      },
      {
        id: 3,
        type: 'pricing',
        colSpan: 'lg:col-span-2',
        rowSpan: '',
        bgGradient: 'bg-gray-900',
        aspectRatio: 'aspect-[2/1] relative p-8',
        padding: '',
        contentLayout: '',
        badge: 'Pricing',
        title: 'Simple Packages for Every Stage',
        prices: [
          { name: 'Starter', amount: '$1990', featured: false },
          { name: 'Professional', amount: '$2990', featured: true },
          { name: 'Enterprise', amount: '$4990', featured: false }
        ]
      },
      {
        id: 4,
        type: 'about',
        colSpan: 'lg:col-span-2',
        rowSpan: '',
        bgGradient: 'bg-gradient-to-br from-purple-600 to-purple-800',
        aspectRatio: 'aspect-[2/1] relative',
        image: '/images/project/3.png',
        imageEffect: 'mix-blend-overlay opacity-80',
        padding: 'p-8',
        contentLayout: 'flex items-center justify-between',
        badge: 'Fabulous',
        badgeColor: 'text-purple-200',
        title: 'About',
        subtitle: 'Brand Designer',
        description: 'The Person Behind the Work'
      },
      {
        id: 5,
        type: 'project',
        colSpan: '',
        rowSpan: '',
        bgGradient: 'bg-gray-900',
        aspectRatio: 'aspect-square relative',
        image: '/images/project/4.png',
        imageEffect: 'opacity-40',
        padding: 'p-6',
        contentLayout: 'flex flex-col justify-end',
        title: 'Orange Blox',
        description: 'Fashion brand identity design',
        buttonStyle: 'bg-orange-500 text-white',
        category: 'branding',
        client: 'Orange Blox Inc.'
      },
      {
        id: 6,
        type: 'project',
        colSpan: '',
        rowSpan: '',
        bgGradient: 'bg-gray-900',
        aspectRatio: 'aspect-square relative',
        image: '/images/project/5.png',
        imageEffect: 'opacity-40',
        padding: 'p-6',
        contentLayout: 'flex flex-col justify-end',
        title: 'Nova Scene',
        description: 'Perfume brand packaging',
        buttonStyle: 'bg-orange-500 text-white',
        category: 'packaging',
        client: 'Nova Perfumes'
      },
      {
        id: 7,
        type: 'project',
        colSpan: '',
        rowSpan: '',
        bgGradient: 'bg-gray-900',
        aspectRatio: 'aspect-square relative',
        image: '/images/project/6.png',
        imageEffect: 'opacity-40',
        padding: 'p-6',
        contentLayout: 'flex flex-col justify-end',
        title: 'Arched Pink',
        description: 'Sustainable fashion line',
        buttonStyle: 'bg-orange-500 text-white',
        category: 'fashion',
        client: 'Arched Fashion'
      },
      {
        id: 8,
        type: 'project',
        colSpan: '',
        rowSpan: '',
        bgGradient: 'bg-gradient-to-br from-orange-500 to-red-600',
        aspectRatio: 'aspect-square relative',
        image: '/images/project/7.png',
        imageEffect: 'mix-blend-overlay opacity-60',
        padding: 'p-6',
        contentLayout: 'flex flex-col justify-end',
        title: 'Liquid',
        description: 'Abstract art collection',
        buttonStyle: 'bg-white/20 backdrop-blur-sm text-white',
        category: 'art',
        client: 'Liquid Arts'
      },
      {
        id: 9,
        type: 'info',
        colSpan: 'lg:col-span-2',
        rowSpan: '',
        bgGradient: 'bg-gray-900',
        aspectRatio: 'aspect-[2/1] relative p-8',
        padding: '',
        contentLayout: 'flex items-center justify-between h-full',
        badge: 'Who I Am',
        title: 'Design with Purpose and Personality',
        description: 'Shaping meaningful brands through strategy, creativity, and collaboration.'
      }
    ],

    stats: [
      { value: '50+', label: 'Projek Selesai' },
      { value: '140+', label: 'Klien Puas' },
      { value: '99.8%', label: 'Uptime Rate' },
      { value: '4.8/5', label: 'Rating Klien' }
    ],

    cta: {
      text: 'Lihat 200+ Portfolio Kami',
      link: '#portfolio'
    }
  }

  // Return data
  return portfolioData
})
