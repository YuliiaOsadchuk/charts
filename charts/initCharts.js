import { createChart } from './createChart.js';
import {
  surveyTopicsScoresChartConfig,
  kpsChartConfig,
  rlqChartConfig
} from './chartConfig.js';

document.addEventListener('DOMContentLoaded', () => {
  createChart({
    ...surveyTopicsScoresChartConfig
  });

  createChart({
    ...kpsChartConfig
  });

  createChart({
    ...rlqChartConfig
  });
});
