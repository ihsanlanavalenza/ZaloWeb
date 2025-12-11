import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export default defineEventHandler(async (event) => {
  try {
    const form = await readMultipartFormData(event);
    
    if (!form || form.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No file uploaded',
      });
    }

    const file = form[0];
    
    if (!file.filename || !file.data) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid file data',
      });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type || '')) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Only image files are allowed (JPEG, PNG, WebP, GIF)',
      });
    }

    // Generate unique filename
    const ext = file.filename.split('.').pop();
    const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
    
    // Create upload directory if it doesn't exist
    const uploadDir = join(process.cwd(), 'public', 'images', 'banner');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Save file
    const filepath = join(uploadDir, filename);
    await writeFile(filepath, file.data);

    // Return URL path
    return {
      success: true,
      url: `/images/banner/${filename}`,
      filename: filename,
    };
  } catch (error: any) {
    console.error('Upload error:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to upload image',
    });
  }
});
