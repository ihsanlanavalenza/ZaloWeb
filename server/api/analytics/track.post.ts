// Simple in-memory storage (gunakan database untuk production)
const visitors = []
const dailyStats = new Map()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  const visitorData = {
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
