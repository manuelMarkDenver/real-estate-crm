import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('CRM Users API')
    .setDescription('Jackie CRM User API')
    .setVersion('1.0')
    // .addTag('teams')
    .build();
  app.enableCors();
  app.setGlobalPrefix('users-api');
  app.useGlobalPipes(new ValidationPipe());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('users-api/doc', app, document);

  await app.listen(5001);
}
bootstrap();
