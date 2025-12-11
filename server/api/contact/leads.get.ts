import { defineEventHandler } from 'h3'

// In-memory storage - sama dengan submit.post.ts
// Di production, ini akan query dari database
const sampleLeads = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+62812345678',
    company: 'Tech Startup',
    message: 'Saya tertarik dengan paket Premium untuk membuat website e-commerce. Bisa diskusi lebih lanjut?',
    createdAt: '2024-12-10T10:30:00Z',
    status: 'new',
    source: 'website'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    email: 'sarah@restaurant.com',
    phone: '+62823456789',
    company: 'Restaurant Chain',
    message: 'Butuh sistem reservasi online untuk 3 cabang restoran kami.',
    createdAt: '2024-12-09T14:20:00Z',
    status: 'contacted',
    source: 'website'
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael@school.edu',
    phone: '+62834567890',
    company: 'ABC School',
    message: 'Ingin membuat LMS untuk sekolah kami. Ada sekitar 300 siswa.',
    createdAt: '2024-12-08T09:15:00Z',
    status: 'new',
    source: 'website'
  }
]

export default defineEventHandler(async (event) => {
  // TODO: Add authentication check
  // TODO: Query from database
  // TODO: Add pagination, filtering, sorting
  
  return {
    success: true,
    data: sampleLeads,
    total: sampleLeads.length
  }
})
