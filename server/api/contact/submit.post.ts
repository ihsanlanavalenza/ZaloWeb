import { defineEventHandler, readBody } from 'h3'

interface ContactFormData {
  id: number
  name: string
  email: string
  phone: string
  company?: string
  message: string
  createdAt: string
  status: 'new' | 'contacted' | 'closed'
  source: string
}

// In-memory storage (gunakan database untuk production)
const leads: ContactFormData[] = []

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Validation
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      message: 'Name, email, and message are required'
    })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid email format'
    })
  }

  const newLead: ContactFormData = {
    id: Date.now() + Math.random(),
    name: body.name,
    email: body.email,
    phone: body.phone || '',
    company: body.company || '',
    message: body.message,
    createdAt: new Date().toISOString(),
    status: 'new',
    source: body.source || 'website'
  }

  leads.push(newLead)

  // TODO: Send email notification
  // TODO: Save to database
  // TODO: Send to CRM/Marketing automation

  return {
    success: true,
    message: 'Thank you! We will contact you soon.',
    leadId: newLead.id
  }
})
