/**
 * Portfolio Utilities
 * Helper functions untuk memudahkan create portfolio items
 */

import { cardPresets, portfolioConfig } from '~/config/portfolio.config'
import type { PortfolioItem, PricingItem } from '~/types/portfolio'

/**
 * Create Hero Card
 */
export const createHeroCard = (data: {
  id: number
  image: string
  badge: string
  title: string
  description: string
  showPlaceholders?: boolean
}): PortfolioItem => ({
  ...data,
  type: 'hero',
  ...cardPresets.hero,
  showPlaceholders: data.showPlaceholders ?? true
})

/**
 * Create Feature Card
 */
export const createFeatureCard = (data: {
  id: number
  image: string
  title: string
  description: string
  buttonText?: string
  showButton?: boolean
}): PortfolioItem => ({
  ...data,
  type: 'feature',
  ...cardPresets.feature,
  showButton: data.showButton ?? true,
  buttonText: data.buttonText ?? 'See more'
})

/**
 * Create Project Card
 */
export const createProjectCard = (data: {
  id: number
  image: string
  title: string
  description: string
  category?: string
  client?: string
  buttonStyle?: string
}): PortfolioItem => ({
  ...data,
  type: 'project',
  ...cardPresets.project,
  buttonStyle: data.buttonStyle ?? portfolioConfig.buttons.primary
})

/**
 * Create Pricing Card
 */
export const createPricingCard = (data: {
  id: number
  badge: string
  title: string
  prices: PricingItem[]
}): PortfolioItem => ({
  ...data,
  type: 'pricing',
  ...cardPresets.pricing
})

/**
 * Create About Card
 */
export const createAboutCard = (data: {
  id: number
  image: string
  badge: string
  title: string
  subtitle: string
  description: string
  badgeColor?: string
  bgGradient?: string
}): PortfolioItem => ({
  ...data,
  type: 'about',
  ...cardPresets.about,
  badgeColor: data.badgeColor ?? portfolioConfig.badgeColors.purple,
  bgGradient: data.bgGradient ?? portfolioConfig.gradients.purple
})

/**
 * Create Info Card
 */
export const createInfoCard = (data: {
  id: number
  badge: string
  title: string
  description: string
}): PortfolioItem => ({
  ...data,
  type: 'info',
  ...cardPresets.info
})

/**
 * Batch create multiple project cards
 */
export const createProjectCards = (
  projects: Array<{
    image: string
    title: string
    description: string
    category?: string
    client?: string
  }>
): PortfolioItem[] => {
  return projects.map((project, index) => 
    createProjectCard({
      id: index + 1,
      ...project
    })
  )
}

/**
 * Sort portfolio items by order index
 */
export const sortByOrder = (items: PortfolioItem[]): PortfolioItem[] => {
  return items.sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0))
}

/**
 * Filter portfolio items by category
 */
export const filterByCategory = (
  items: PortfolioItem[], 
  category: string
): PortfolioItem[] => {
  if (!category) return items
  return items.filter(item => item.category === category)
}

/**
 * Filter portfolio items by type
 */
export const filterByType = (
  items: PortfolioItem[], 
  type: string
): PortfolioItem[] => {
  if (!type) return items
  return items.filter(item => item.type === type)
}

/**
 * Search portfolio items
 */
export const searchPortfolio = (
  items: PortfolioItem[], 
  query: string
): PortfolioItem[] => {
  if (!query) return items
  
  const lowerQuery = query.toLowerCase()
  
  return items.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description?.toLowerCase().includes(lowerQuery) ||
    item.category?.toLowerCase().includes(lowerQuery) ||
    item.client?.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Get unique categories from portfolio items
 */
export const getCategories = (items: PortfolioItem[]): string[] => {
  const categories = items
    .map(item => item.category)
    .filter(Boolean) as string[]
  
  return [...new Set(categories)]
}

/**
 * Validate portfolio item
 */
export const validatePortfolioItem = (item: Partial<PortfolioItem>): boolean => {
  if (!item.id || !item.type || !item.title) {
    console.error('Portfolio item missing required fields:', item)
    return false
  }
  
  const validTypes = ['hero', 'feature', 'project', 'pricing', 'about', 'info']
  if (!validTypes.includes(item.type)) {
    console.error('Invalid portfolio item type:', item.type)
    return false
  }
  
  return true
}

/**
 * Transform API data to portfolio items
 * Untuk saat migrasi ke backend nanti
 */
export const transformApiData = (apiData: any): PortfolioItem[] => {
  return apiData.map((item: any) => ({
    id: item.id,
    type: item.type,
    colSpan: item.col_span || '',
    rowSpan: item.row_span || '',
    bgGradient: item.bg_gradient,
    aspectRatio: item.aspect_ratio,
    image: item.image,
    imageEffect: item.image_effect,
    padding: item.padding,
    contentLayout: item.content_layout,
    badge: item.badge,
    badgeColor: item.badge_color,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
    showButton: item.show_button,
    buttonText: item.button_text,
    buttonStyle: item.button_style,
    showPlaceholders: item.show_placeholders,
    prices: item.prices,
    category: item.category,
    client: item.client,
    tags: item.tags,
    projectUrl: item.project_url,
    orderIndex: item.order_index,
    isActive: item.is_active
  }))
}

/**
 * Get portfolio item by ID
 */
export const getItemById = (
  items: PortfolioItem[], 
  id: number
): PortfolioItem | undefined => {
  return items.find(item => item.id === id)
}

/**
 * Toggle portfolio item active status
 * Untuk CMS nanti
 */
export const toggleActive = (
  items: PortfolioItem[], 
  id: number
): PortfolioItem[] => {
  return items.map(item => 
    item.id === id 
      ? { ...item, isActive: !item.isActive }
      : item
  )
}
