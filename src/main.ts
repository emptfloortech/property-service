import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('property');

  await app.listen(3002);
  console.log('✅ Property Service running on port 3002');
}
bootstrap();