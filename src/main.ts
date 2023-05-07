import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DateformatInterceptor } from './interceptors/dateformat.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { logger } from './logger.middleware';
import { ParamValidationPipe } from './pipe/custom-validation.pipe';
import { AuthGuard } from './guard/auth.gurad';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // Swagger
    const config = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('The NestJS API description')
        .setVersion('1.0')
        .addTag('NestJS')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    // Global
    app.useGlobalPipes(
        new ParamValidationPipe(),
        new ValidationPipe({
            transform: true,
        }),
    );
    app.useGlobalInterceptors(new DateformatInterceptor());
    app.use(logger);
    await app.listen(4000);
}
bootstrap();
