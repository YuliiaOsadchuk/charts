import { createChart } from './createChart.js';
import {
  surveyTopicsScoresChartConfig,
  kpsChartConfig
} from './chartConfig.js';

document.addEventListener('DOMContentLoaded', () => {
  createChart({
    ...surveyTopicsScoresChartConfig
  });

  createChart({
    ...kpsChartConfig
  });
});
