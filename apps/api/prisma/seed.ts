import { PrismaClient, SkillLevel, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const agadir = await prisma.city.upsert({
    where: { name: 'Agadir' },
    update: {},
    create: { name: 'Agadir' },
  });

  await prisma.user.upsert({
    where: { email: 'admin@koranow.ma' },
    update: {},
    create: {
      email: 'admin@koranow.ma',
      name: 'KoraNow Admin',
      role: UserRole.ADMIN,
      cityId: agadir.id,
      skillLevel: SkillLevel.PRO,
      isVerified: true,
    },
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
