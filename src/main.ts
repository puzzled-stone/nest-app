import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DateformatInterceptor } from './interceptors/dateformat.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new DateformatInterceptor());
  await app.listen(3000);
}
bootstrap();
