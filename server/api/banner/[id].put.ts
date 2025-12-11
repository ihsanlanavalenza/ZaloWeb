import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    const body = await readBody(event);

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

    const banner = await prisma.banner.update({
      where: { id },
      data: {
        image: body.image || existingBanner.image,
        title: body.title !== undefined ? body.title : existingBanner.title,
        description: body.description !== undefined ? body.description : existingBanner.description,
        alt: body.alt !== undefined ? body.alt : (existingBanner.alt || 'Banner image'),
        buttonText: body.buttonText !== undefined ? body.buttonText : existingBanner.buttonText,
        buttonLink: body.buttonLink !== undefined ? body.buttonLink : existingBanner.buttonLink,
        order: body.order !== undefined ? body.order : existingBanner.order,
        isActive: body.isActive !== undefined ? body.isActive : existingBanner.isActive,
      },
    });

    return {
      success: true,
      data: banner,
      message: 'Banner updated successfully',
    };
  } catch (error) {
    console.error('Error updating banner:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to update banner',
    });
  }
});
