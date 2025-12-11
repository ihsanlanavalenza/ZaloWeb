import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validation - only image is required
    if (!body.image) {
      throw createError({
        statusCode: 400,
        message: 'Image is required',
      });
    }

    const banner = await prisma.banner.create({
      data: {
        image: body.image,
        title: body.title || '',
        description: body.description || '',
        alt: body.alt || 'Banner image',
        buttonText: body.buttonText || null,
        buttonLink: body.buttonLink || null,
        order: body.order || 0,
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return {
      success: true,
      data: banner,
      message: 'Banner created successfully',
    };
  } catch (error) {
    console.error('Error creating banner:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to create banner',
    });
  }
});
