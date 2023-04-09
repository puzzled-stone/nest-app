import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DateformatInterceptor } from './interceptors/dateformat.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new DateformatInterceptor());
  await app.listen(3000);
}
bootstrap();
