import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // get global prefix
  app.setGlobalPrefix('api');
  await app.listen(5001);
}
bootstrap();
