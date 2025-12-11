import { PrismaClient } from '../generated/prisma';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import bcrypt from 'bcrypt';

// Create adapter for SQLite - use the same path as DATABASE_URL in .env
const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('IhsaNau#2025!Secure', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'zalowebiz@gmail.com' },
    update: {},
    create: {
      email: 'zalowebiz@gmail.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
      isActive: true,
    },
  });
  console.log('✅ Created admin user:', admin.email);

  // Create banners
  const banner1 = await prisma.banner.upsert({
    where: { id: 'banner-1' },
    update: {},
    create: {
      id: 'banner-1',
      image: '/images/banner/1.png',
      alt: 'Jasa Layanan Website Profesional & Terjangkau',
      buttonText: 'Konsultasi Gratis',
      buttonLink: '#contact',
      order: 1,
      isActive: true,
    },
  });
  console.log('✅ Created banner:', banner1.alt);

  const banner2 = await prisma.banner.upsert({
    where: { id: 'banner-2' },
    update: {},
    create: {
      id: 'banner-2',
      image: '/images/banner/2.png',
      alt: 'Partner IT Terpercaya untuk Setiap Kebutuhan Bisnis',
      buttonText: 'Konsultasi Gratis',
      buttonLink: '#contact',
      order: 2,
      isActive: true,
    },
  });
  console.log('✅ Created banner:', banner2.alt);

  const banner3 = await prisma.banner.upsert({
    where: { id: 'banner-3' },
    update: {},
    create: {
      id: 'banner-3',
      image: '/images/banner/3.png',
      alt: 'Exclusive Phone - Launching Soon',
      buttonText: 'Learn More',
      buttonLink: '#services',
      order: 3,
      isActive: true,
    },
  });
  console.log('✅ Created banner:', banner3.alt);

  const banner4 = await prisma.banner.upsert({
    where: { id: 'banner-4' },
    update: {},
    create: {
      id: 'banner-4',
      image: '/images/banner/4.png',
      alt: 'IT Outsourcing Solutions Package',
      buttonText: 'Learn More',
      buttonLink: '#services',
      order: 4,
      isActive: true,
    },
  });
  console.log('✅ Created banner:', banner4.alt);

  // Create sample testimonials
  const testimonial1 = await prisma.testimonial.upsert({
    where: { id: 'testimonial-1' },
    update: {},
    create: {
      id: 'testimonial-1',
      name: 'John Doe',
      position: 'CEO',
      company: 'Tech Corp',
      avatar: '/images/avatar1.jpg',
      rating: 5,
      content: 'Excellent service! They delivered our project on time and exceeded our expectations.',
      isFeatured: true,
      isPublished: true,
      order: 1,
    },
  });
  console.log('✅ Created testimonial:', testimonial1.name);

  // Create FAQ Category
  const faqCategory = await prisma.faqCategory.upsert({
    where: { slug: 'general' },
    update: {},
    create: {
      name: 'General',
      slug: 'general',
      description: 'General questions about our services',
      order: 1,
      isPublished: true,
    },
  });
  console.log('✅ Created FAQ category:', faqCategory.name);

  // Create FAQ
  const faq = await prisma.faq.upsert({
    where: { id: 'faq-1' },
    update: {},
    create: {
      id: 'faq-1',
      categoryId: faqCategory.id,
      question: 'What services do you offer?',
      answer: 'We offer web development, mobile app development, and UI/UX design services.',
      order: 1,
      isPublished: true,
    },
  });
  console.log('✅ Created FAQ:', faq.question);

  // Create sample portfolio
  const portfolio = await prisma.portfolio.upsert({
    where: { slug: 'sample-project' },
    update: {},
    create: {
      title: 'Sample Project',
      slug: 'sample-project',
      description: 'A sample portfolio project showcasing our web development skills.',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      client: 'Sample Client',
      year: 2024,
      thumbnail: '/images/project/sample.jpg',
      images: ['/images/project/sample1.jpg', '/images/project/sample2.jpg'],
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      isFeatured: true,
      isPublished: true,
      order: 1,
    },
  });
  console.log('✅ Created portfolio:', portfolio.title);

  // Create pricing plan
  const pricingPlan = await prisma.pricingPlan.upsert({
    where: { slug: 'basic' },
    update: {},
    create: {
      name: 'Basic Plan',
      slug: 'basic',
      description: 'Perfect for small businesses',
      price: 5000000,
      currency: 'IDR',
      billingType: 'one-time',
      isPopular: false,
      isActive: true,
      order: 1,
      buttonText: 'Get Started',
      features: {
        create: [
          { feature: 'Responsive Design', isIncluded: true, order: 1 },
          { feature: 'Up to 5 Pages', isIncluded: true, order: 2 },
          { feature: 'Basic SEO', isIncluded: true, order: 3 },
          { feature: '1 Month Support', isIncluded: true, order: 4 },
        ],
      },
    },
  });
  console.log('✅ Created pricing plan:', pricingPlan.name);

  // Create client logo
  const client = await prisma.client.upsert({
    where: { id: 'client-1' },
    update: {},
    create: {
      id: 'client-1',
      name: 'Sample Client',
      logo: '/images/clients/sample.png',
      website: 'https://example.com',
      order: 1,
      isPublished: true,
    },
  });
  console.log('✅ Created client:', client.name);

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
