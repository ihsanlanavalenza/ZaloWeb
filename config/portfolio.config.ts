/**
 * Portfolio Configuration
 * File ini memudahkan customization tampilan portfolio
 */

export const portfolioConfig = {
  // Grid Configuration
  grid: {
    gap: 'gap-4',
    cols: {
      mobile: 'grid-cols-1',
      tablet: 'md:grid-cols-2',
      desktop: 'lg:grid-cols-4'
    }
  },

  // Card Styles
  card: {
    base: 'group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer',
    hover: {
      imageScale: 'group-hover:scale-105',
      duration: 'duration-500'
    }
  },

  // Background Gradients Library
  gradients: {
    orange: 'bg-gradient-to-br from-orange-500 to-red-600',
    purple: 'bg-gradient-to-br from-purple-600 to-purple-800',
    gray: 'bg-gradient-to-br from-gray-900 to-gray-800',
    blue: 'bg-gradient-to-br from-blue-600 to-blue-800',
    green: 'bg-gradient-to-br from-green-600 to-green-800',
    pink: 'bg-gradient-to-br from-pink-600 to-pink-800',
    dark: 'bg-gray-900',
    darker: 'bg-gray-950'
  },

  // Image Effects Library
  imageEffects: {
    overlay: 'mix-blend-overlay opacity-60',
    overlayLight: 'mix-blend-overlay opacity-40',
    overlayStrong: 'mix-blend-overlay opacity-80',
    fade: 'opacity-40',
    fadeLight: 'opacity-60',
    fadeStrong: 'opacity-20',
    animated: 'group-hover:scale-105 transition-transform duration-500 mix-blend-overlay opacity-60'
  },

  // Button Styles Library
  buttons: {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
  },

  // Typography
  typography: {
    badge: 'text-sm font-semibold uppercase tracking-wide',
    title: {
      hero: 'text-4xl md:text-5xl font-black',
      feature: 'text-3xl md:text-4xl font-bold',
      project: 'text-2xl font-bold',
      section: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'
    },
    description: {
      large: 'text-lg md:text-xl leading-relaxed',
      medium: 'text-base leading-relaxed',
      small: 'text-sm'
    }
  },

  // Spacing
  spacing: {
    section: 'py-20 md:py-32',
    container: 'px-4',
    gap: {
      small: 'gap-2',
      medium: 'gap-4',
      large: 'gap-8'
    }
  },

  // Aspect Ratios
  aspectRatios: {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[2/1]',
    ultrawide: 'aspect-[3/1]'
  },

  // Column Spans (untuk grid layout)
  colSpans: {
    1: '',
    2: 'lg:col-span-2',
    3: 'lg:col-span-3',
    4: 'lg:col-span-4'
  },

  // Row Spans
  rowSpans: {
    1: '',
    2: 'lg:row-span-2',
    3: 'lg:row-span-3'
  },

  // Content Layouts
  contentLayouts: {
    topBottom: 'flex flex-col justify-between',
    center: 'flex flex-col justify-center',
    bottom: 'flex flex-col justify-end',
    split: 'flex items-center justify-between',
    splitVertical: 'flex items-center justify-between h-full'
  },

  // Animation Presets
  animations: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    scaleIn: 'animate-scale-in',
    none: ''
  },

  // Badge Colors
  badgeColors: {
    orange: 'text-orange-200',
    purple: 'text-purple-200',
    blue: 'text-blue-200',
    green: 'text-green-200',
    pink: 'text-pink-200',
    white: 'text-white/90',
    gray: 'text-gray-300'
  }
}

// Helper function untuk mendapatkan config
export const getPortfolioConfig = (path: string) => {
  const keys = path.split('.')
  let value: any = portfolioConfig
  
  for (const key of keys) {
    value = value[key]
    if (!value) return null
  }
  
  return value
}

// Preset configurations untuk card types
export const cardPresets = {
  hero: {
    colSpan: portfolioConfig.colSpans[2],
    rowSpan: portfolioConfig.rowSpans[2],
    aspectRatio: portfolioConfig.aspectRatios.square,
    bgGradient: portfolioConfig.gradients.orange,
    imageEffect: portfolioConfig.imageEffects.animated,
    padding: 'p-8',
    contentLayout: portfolioConfig.contentLayouts.topBottom
  },
  
  feature: {
    colSpan: portfolioConfig.colSpans[2],
    aspectRatio: portfolioConfig.aspectRatios.wide,
    bgGradient: portfolioConfig.gradients.gray,
    imageEffect: portfolioConfig.imageEffects.fade,
    padding: 'p-8',
    contentLayout: portfolioConfig.contentLayouts.center
  },
  
  project: {
    colSpan: portfolioConfig.colSpans[1],
    aspectRatio: portfolioConfig.aspectRatios.square,
    bgGradient: portfolioConfig.gradients.dark,
    imageEffect: portfolioConfig.imageEffects.fade,
    padding: 'p-6',
    contentLayout: portfolioConfig.contentLayouts.bottom,
    buttonStyle: portfolioConfig.buttons.primary
  },
  
  pricing: {
    colSpan: portfolioConfig.colSpans[2],
    aspectRatio: portfolioConfig.aspectRatios.wide,
    bgGradient: portfolioConfig.gradients.dark,
    padding: 'p-8'
  },
  
  about: {
    colSpan: portfolioConfig.colSpans[2],
    aspectRatio: portfolioConfig.aspectRatios.wide,
    bgGradient: portfolioConfig.gradients.purple,
    imageEffect: portfolioConfig.imageEffects.overlayStrong,
    padding: 'p-8',
    contentLayout: portfolioConfig.contentLayouts.split,
    badgeColor: portfolioConfig.badgeColors.purple
  },
  
  info: {
    colSpan: portfolioConfig.colSpans[2],
    aspectRatio: portfolioConfig.aspectRatios.wide,
    bgGradient: portfolioConfig.gradients.dark,
    padding: 'p-8',
    contentLayout: portfolioConfig.contentLayouts.splitVertical
  }
}

export default portfolioConfig
