import { createChart } from './createChart.js';
import {
  surveyTopicsScoresChartConfig,
  kpsChartConfig,
  rlqChartConfig,
  kiChartConfig,
  mziChartConfig
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

  createChart({
    ...kiChartConfig
  });

  createChart({
    ...mziChartConfig
  });
});
