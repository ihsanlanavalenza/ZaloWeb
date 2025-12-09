/**
 * Portfolio Types & Interfaces
 * Definisi tipe data untuk Portfolio Section
 */

// Tipe card yang tersedia
export type PortfolioCardType = 
  | 'hero' 
  | 'feature' 
  | 'project' 
  | 'pricing' 
  | 'about' 
  | 'info'

// Interface untuk pricing item
export interface PricingItem {
  name: string
  amount: string
  featured: boolean
}

// Interface untuk portfolio item
export interface PortfolioItem {
  id: number
  type: PortfolioCardType
  colSpan?: string
  rowSpan?: string
  bgGradient: string
  aspectRatio: string
  image?: string
  imageEffect?: string
  padding?: string
  contentLayout?: string
  
  // Content fields
  badge?: string
  badgeColor?: string
  title: string
  subtitle?: string
  description?: string
  
  // Button fields
  showButton?: boolean
  buttonText?: string
  buttonStyle?: string
  
  // Placeholders
  showPlaceholders?: boolean
  
  // Pricing specific
  prices?: PricingItem[]
  
  // Metadata (untuk CMS)
  category?: string
  client?: string
  tags?: string[]
  projectUrl?: string
  orderIndex?: number
  isActive?: boolean
  createdAt?: string
  updatedAt?: string
}

// Interface untuk stats
export interface PortfolioStat {
  value: string
  label: string
}

// Interface untuk header
export interface PortfolioHeader {
  badge: string
  title: string
  description: string
}

// Interface untuk CTA
export interface PortfolioCTA {
  text: string
  link: string
}

// Main Portfolio Data Interface
export interface PortfolioData {
  header: PortfolioHeader
  items: PortfolioItem[]
  stats: PortfolioStat[]
  cta: PortfolioCTA
}

// Filter options untuk CMS nanti
export interface PortfolioFilters {
  category?: string
  client?: string
  search?: string
  type?: PortfolioCardType
  tags?: string[]
}

// API Response Interface
export interface PortfolioApiResponse {
  success: boolean
  data: PortfolioData
  message?: string
  error?: string
}
