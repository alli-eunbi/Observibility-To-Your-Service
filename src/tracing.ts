import opentelemetry from '@opentelemetry/sdk-node';
// import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import process from 'process';

import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const Sentry = require('@sentry/node');

import {
  SentrySpanProcessor,
  SentryPropagator,
} from '@sentry/opentelemetry-node';
import { resourceLimits } from 'worker_threads';
// const prometheusExporter = new PrometheusExporter({ startServer: true });

Sentry.init({
  dsn: process.env.SENTRY_URL,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({ name: 'cpuAndMemory' });

// transaction.setData('cpuUsage', endUsage);

export const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'observibilty-sentry',
  }),
  // Optional - if omitted, the tracing SDK will not be initialized
  traceExporter: jaegerExporter,
  // Optional - If omitted, the metrics SDK will not be initialized
  metricReader: prometheusExporter,
  // Optional - you can use the metapackage or load each instrumentation individually
  instrumentations: [getNodeAutoInstrumentations()],
  // See the Configuration section below for additional  configuration options
});

sdk.start();

// You can also use the shutdown method to gracefully shut down the SDK before process shutdown
// or on some operating system signal.
process.on('SIGTERM', () => {
  sdk
    .shutdown()
    .then(
      () => console.log('SDK shut down successfully'),
      (err) => console.log('Error shutting down SDK', err),
    )
    .finally(() => process.exit(0));
});
