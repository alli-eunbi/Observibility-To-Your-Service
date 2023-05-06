import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as Sentry from '@sentry/node';
import { client } from 'prom-client';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const collectDefaultMetrics = client.collectDefaultMetrics;

  const Registry = client.Registry;
  const register = new Registry();
  collectDefaultMetrics({ register });

  Sentry.init({
    dsn: process.env.SENTRY_URL,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
  app.enableCors();

  const transaction = Sentry.startTransaction({ name: 'cpuAndMemory' });

  transaction.setData('cpuUsage', endUsage);
  await app.listen(3001);
}
bootstrap();
