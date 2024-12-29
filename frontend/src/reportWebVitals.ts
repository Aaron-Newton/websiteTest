import {
  onCLS,
  onFCP,
  onINP,
  onLCP,
  onTTFB,
  Metric,
} from 'web-vitals';

type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFCP(onPerfEntry);
    onINP(onPerfEntry); // New metric for interaction to next paint
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
