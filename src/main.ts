import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const post = await prisma.user.create({
    data: {
      title: 'Hello world222',
      content: 'This is a test post222',
    },
  });
  console.log(post);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
