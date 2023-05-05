import * as dotenv from 'dotenv';
import * as Sentry from '@sentry/node';
dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_URL,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: 'test',
  name: 'My First Test Transaction',
});

setTimeout(() => {
  try {
    throw Error('test here');
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);
