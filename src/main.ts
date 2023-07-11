import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create application
  const app = await NestFactory.create(AppModule, { cors: true });
  // Configure CORS options
  app.enableCors({ credentials: true, origin: true });
  // Add validation and plugins pipes
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());
  app.use(helmet());

  // Run application
  await app.listen(3000);
}
bootstrap();
