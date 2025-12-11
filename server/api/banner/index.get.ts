import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

export default defineEventHandler(async (event) => {
  try {
    const banners = await prisma.banner.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    });

    return {
      success: true,
      data: banners,
    };
  } catch (error) {
    console.error('Error fetching banners:', error);
    return {
      success: false,
      error: 'Failed to fetch banners',
      data: [],
    };
  }
});
