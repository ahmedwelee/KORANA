export const cloudinaryUploadStub = (filename: string) => ({
  provider: 'cloudinary',
  secureUrl: `https://res.cloudinary.com/demo/${filename}`,
  status: 'stub',
});
