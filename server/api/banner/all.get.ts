import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

// Get all banners (for admin)
export default defineEventHandler(async (event) => {
  try {
    const banners = await prisma.banner.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });

    return {
      success: true,
      data: banners,
    };
  } catch (error) {
    console.error('Error fetching all banners:', error);
    return {
      success: false,
      error: 'Failed to fetch banners',
      data: [],
    };
  }
});
