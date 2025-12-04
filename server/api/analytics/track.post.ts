import { defineEventHandler, readBody, getRequestIP, getRequestHeader } from 'h3'

interface VisitorData {
  id: number
  page: string
  timestamp: string
  userAgent: string
  ip: string | undefined
  referer: string
}

// Simple in-memory storage (gunakan database untuk production)
const visitors: VisitorData[] = []
const dailyStats = new Map<string, number>()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  const visitorData: VisitorData = {
    id: Date.now() + Math.random(),
    page: body.page,
    timestamp: body.timestamp || new Date().toISOString(),
    userAgent: body.userAgent,
    ip: getRequestIP(event),
    referer: getRequestHeader(event, 'referer') || 'Direct'
  }
  
  // Store visitor
  visitors.push(visitorData)
  
  // Update daily stats
  const today = new Date().toISOString().split('T')[0]
  const todayCount = dailyStats.get(today) || 0
  dailyStats.set(today, todayCount + 1)
  
  // Keep only last 1000 visitors in memory
  if (visitors.length > 1000) {
    visitors.shift()
  }
  
  return { success: true }
})
