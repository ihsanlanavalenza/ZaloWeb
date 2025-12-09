/**
 * Portfolio Composable
 * Untuk integrasi dengan CMS/API di masa depan
 * 
 * Cara penggunaan:
 * 1. Frontend saja (sekarang): data hardcoded di sini
 * 2. Dengan API: uncomment bagian useFetch dan hapus data hardcoded
 */

export const usePortfolio = () => {
  // ===== UNTUK CMS/API NANTI =====
  // Uncomment kode ini saat sudah ada backend/CMS
  /*
  const { data: portfolioData, pending, error } = await useFetch('/api/portfolio')
  
  return {
    header: portfolioData.value?.header || {},
    portfolioItems: portfolioData.value?.items || [],
    stats: portfolioData.value?.stats || [],
    cta: portfolioData.value?.cta || {}
  }
  */

  // ===== DATA FRONTEND (SEKARANG) =====
  const header = {
    badge: 'Portfolio Kami',
    title: 'Karya yang Berbicara',
    description: 'Dari startup hingga enterprise, kami telah membantu 50+ bisnis mencapai kesuksesan digital mereka'
  }

  const portfolioItems = [
    {
      id: 1,
      type: 'hero',
      image: '/images/project/1.png',
      bgGradient: 'bg-gradient-to-br from-orange-500 to-red-600',
      customHeight: '450px',
      badge: 'Featured Project',
      title: 'Shaping Digital Experiences',
      description: 'Product designer focused on building clean, intuitive interfaces that solve real-world problems.',
      showPlaceholders: true
    },
    {
      id: 2,
      type: 'project',
      image: '/images/project/4.png',
      bgGradient: 'bg-gray-900',
      customHeight: '320px',
      title: 'Orange Blox',
      description: 'Fashion brand identity design',
      category: 'branding',
      client: 'Orange Blox Inc.'
    },
    {
      id: 3,
      type: 'feature',
      image: '/images/project/2.png',
      bgGradient: 'bg-gradient-to-br from-gray-900 to-gray-800',
      customHeight: '380px',
      title: 'Creative Strategy',
      description: 'Blending clarity and creativity to build brands with purpose.',
      showButton: true,
      buttonText: 'Explore'
    },
    {
      id: 4,
      type: 'project',
      image: '/images/project/5.png',
      bgGradient: 'bg-gray-900',
      customHeight: '280px',
      title: 'Nova Scene',
      description: 'Perfume brand packaging',
      category: 'packaging',
      client: 'Nova Perfumes'
    },
    {
      id: 5,
      type: 'about',
      image: '/images/project/3.png',
      bgGradient: 'bg-gradient-to-br from-purple-600 to-purple-800',
      customHeight: '350px',
      badge: 'About Us',
      title: 'Design Excellence',
      description: 'The team behind innovative digital solutions'
    },
    {
      id: 6,
      type: 'project',
      image: '/images/project/6.png',
      bgGradient: 'bg-gray-900',
      customHeight: '300px',
      title: 'Arched Pink',
      description: 'Sustainable fashion line',
      category: 'fashion',
      client: 'Arched Fashion'
    },
    {
      id: 7,
      type: 'project',
      image: '/images/project/7.png',
      bgGradient: 'bg-gradient-to-br from-orange-500 to-red-600',
      customHeight: '330px',
      title: 'Liquid Art',
      description: 'Abstract art collection',
      category: 'art',
      client: 'Liquid Arts'
    },
    {
      id: 9,
      type: 'info',
      bgGradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
      customHeight: '290px',
      badge: 'Our Vision',
      title: 'Design with Purpose',
      description: 'Shaping meaningful brands through strategy, creativity, and collaboration.'
    }
  ]

  const stats = [
    { value: '50+', label: 'Projek Selesai' },
    { value: '140+', label: 'Klien Puas' },
    { value: '99.8%', label: 'Uptime Rate' },
    { value: '4.8/5', label: 'Rating Klien' }
  ]

  const cta = {
    text: 'Lihat 200+ Portfolio Kami',
    link: '#portfolio'
  }

  return {
    header,
    portfolioItems,
    stats,
    cta
  }
}
