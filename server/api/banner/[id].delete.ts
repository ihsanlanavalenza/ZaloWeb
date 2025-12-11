import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');

    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Banner ID is required',
      });
    }

    // Check if banner exists
    const existingBanner = await prisma.banner.findUnique({
      where: { id },
    });

    if (!existingBanner) {
      throw createError({
        statusCode: 404,
        message: 'Banner not found',
      });
    }

    await prisma.banner.delete({
      where: { id },
    });

    return {
      success: true,
      message: 'Banner deleted successfully',
    };
  } catch (error) {
    console.error('Error deleting banner:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to delete banner',
    });
  }
});
