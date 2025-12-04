// Dummy stats untuk demo (gunakan database real untuk production)
export default defineEventHandler(() => {
  return {
    totalVisitors: 15842,
    todayVisitors: 342,
    weeklyVisitors: 2156,
    monthlyVisitors: 8934,
    totalLeads: 156,
    newLeads: 8,
    conversionRate: 4.2,
    visitorGrowth: 23.5,
    todayGrowth: 12.3,
    conversionGrowth: 0.8,
    
    trafficSources: [
      { name: 'Google Search', percentage: 45, visitors: 7129 },
      { name: 'Direct', percentage: 28, visitors: 4436 },
      { name: 'Social Media', percentage: 18, visitors: 2851 },
      { name: 'Referral', percentage: 9, visitors: 1426 }
    ],
    
    topPages: [
      { page: '/', views: 8234, trend: 15.3 },
      { page: '/portfolio', views: 3421, trend: 23.1 },
      { page: '/contact', views: 2156, trend: -5.2 },
      { page: '/services', views: 1842, trend: 8.7 }
    ],
    
    devices: [
      { name: 'Desktop', percentage: 52, count: 8238 },
      { name: 'Mobile', percentage: 38, count: 6020 },
      { name: 'Tablet', percentage: 10, count: 1584 }
    ],
    
    browsers: [
      { name: 'Chrome', percentage: 58, count: 9188 },
      { name: 'Safari', percentage: 24, count: 3802 },
      { name: 'Firefox', percentage: 12, count: 1901 },
      { name: 'Edge', percentage: 6, count: 951 }
    ],
    
    recentVisitors: [
      { time: '2 menit lalu', location: 'Jakarta, Indonesia', page: 'Homepage' },
      { time: '5 menit lalu', location: 'Bandung, Indonesia', page: 'Portfolio' },
      { time: '12 menit lalu', location: 'Surabaya, Indonesia', page: 'Contact' },
      { time: '18 menit lalu', location: 'Bali, Indonesia', page: 'Homepage' },
      { time: '25 menit lalu', location: 'Medan, Indonesia', page: 'Services' }
    ]
  }
})
