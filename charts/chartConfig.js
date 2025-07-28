export const surveyTopicsScoresChartConfig = {
  canvasId: 'surveyTopicsScoreChart',
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'J', 'K', 'L'],
    datasets: [
      {
        backgroundColor: '#F18C5C',
        borderRadius: 6,
        barThickness: 15,
        maxBarThickness: 15,
        data: [4.5, 1.9, 2.3, 4.6, 0.4, 4.6, 4.6, 1.9, 2.3, 4.6, 0.4, 4.6]
      }
    ]
  },
  options: {
    plugins: {
      legend: { position: false }
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0
      }
    },
    scales: {
      x: {
        stacked: false,
        border: {
          display: true,
          color: '#eff2f5',
          width: 1
        },
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          color: ' #616E85',
          font: {
            size: 12,
            weight: '400'
          },
          padding: 7
        }
      },
      y: {
        stacked: false,
        ticks: {
          color: '#616E85',
          font: {
            size: 12,
            weight: '400'
          },
          padding: 18,
          stepSize: 1
        },
        beginAtZero: true,
        border: {
          display: false
        },
        grid: {
          drawBorder: false,
          display: true,
          color: '#eff2f5',
          drawTicks: false,
          lineWidth: 1
        },
        afterFit: function (axis) {
          axis.width = 28;
        }
      }
    }
  }
};

export const kpsChartConfig = {
  canvasId: 'kpsChart',
  type: 'bar',
  data: {
    labels: ['KP 1', 'KP 2', 'KP 3', 'KP 4', 'KP 2'],
    datasets: [
      {
        label: 'KP',
        data: [90, 73, 24, 60, 24],
        borderRadius: 6,
        backgroundColor: ['#5155C3', '#597DBE', '#5F99BB', '#65B8B7', '#6CDDB1']
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: false }
    },
    scales: {
      x: {
        stacked: false,
        border: {
          display: true,
          color: '#eff2f5',
          width: 1
        },

        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          color: ' #616E85',
          font: {
            size: 12,
            weight: '400'
          },
          padding: 7
        }
      },
      y: {
        stacked: false,
        ticks: {
          color: '#616E85',
          font: {
            size: 12,
            weight: '400'
          },
          padding: 18,
          stepSize: 25,
          callback: function (value) {
            return value + '%';
          }
        },
        beginAtZero: true,
        border: {
          display: false
        },
        grid: {
          drawBorder: false,
          display: true,
          color: '#eff2f5',
          drawTicks: false,
          lineWidth: 1
        },
        afterFit: function (axis) {
          axis.width = 50;
        }
      }
    }
  },
  renderLegend: function () {
    const legendData = [
      { backgroundColor: '#5155C3', label: 'KP 1', textColor: '#222531' },
      { backgroundColor: '#597DBE', label: 'KP 2', textColor: '#222531' },
      { backgroundColor: '#5F99BB', label: 'KP 3', textColor: '#222531' },
      { backgroundColor: '#65B8B7', label: 'KP 4', textColor: '#222531' },
      { backgroundColor: '#6CDDB1', label: 'KP 5', textColor: '#222531' },
      { backgroundColor: '#a7a8ac', label: 'KP 6', textColor: '#a7a8ac' }
    ];

    const legendEl = document.getElementById('kpsChartLegend');
    if (!legendEl) return;

    legendEl.innerHTML = legendData
      .map(
        ({ backgroundColor, label, textColor }) => `
        <div class="legend">
          <div class="legend__circle" style="background: ${backgroundColor}"></div>
          <span class="legend__label" style="color: ${textColor}">${label}</span>
        </div>
      `
      )
      .join('');
  }
};

const backgroundPlugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, _, options) => {
    const { ctx, chartArea } = chart;
    ctx.save();
    ctx.fillStyle = options.backgroundColor || 'green';
    ctx.fillRect(
      chartArea.left,
      chartArea.top,
      chartArea.width,
      chartArea.height
    );
    ctx.restore();
  }
};

export const rlqChartConfig = {
  canvasId: 'rlqChart',
  type: 'line',
  data: {
    labels: Array.from({ length: 5 }, (_, i) => ''),
    datasets: [
      {
        data: [60, 48, 54, 43, 52],
        fill: true,
        backgroundColor: '#e39165',
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: '#e39165'
      },
      {
        data: [45, 52, 62, 49, 35],
        fill: true,
        backgroundColor: '#ebb495',
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: '#ebb495'
      }
    ]
  },
  options: {
    responsive: false,
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    plugins: {
      legend: {
        display: false
      },
      customCanvasBackgroundColor: {
        backgroundColor: '#fdf6f3'
      }
    },
    scales: {
      x: {
        stacked: false,
        border: {
          display: true,
          color: '#eff2f5',
          width: 1
        },
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: false,
          padding: 0
        }
      },
      y: {
        stacked: false,
        min: 0,
        max: 100,
        ticks: {
          padding: 0,
          stepSize: 10,
          display: false
        },
        beginAtZero: true,
        border: {
          display: false
        },
        grid: {
          drawBorder: false,
          display: true,
          color: '#eff2f5',
          drawTicks: false,
          lineWidth: 1
        }
      }
    }
  },
  plugins: [backgroundPlugin]
};

const kiChartTicksPlugin = {
  id: 'kiChartTicksPlugin',
  beforeDraw(chart) {
    const { ctx, width, height } = chart;

    const centerX = width / 2;
    const centerY = height * 0.8;
    const outerRadius = width / 2 - 5;

    ctx.save();
    ctx.translate(centerX, centerY);

    const numTicks = 40;
    const totalAngle = 240 * (Math.PI / 180);
    const startAngle = 150 * (Math.PI / 180);

    const tickLength = 8;
    const angleStep = totalAngle / (numTicks - 1);
    for (let i = 0; i < numTicks; i++) {
      const angle = startAngle + i * angleStep;
      const x1 = Math.cos(angle) * (outerRadius - tickLength);
      const y1 = Math.sin(angle) * (outerRadius - tickLength);
      const x2 = Math.cos(angle) * outerRadius;
      const y2 = Math.sin(angle) * outerRadius;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = '#ededed';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    const numTicksInner = 40;
    const innerTickLength = 4;
    const innerTickRadius = outerRadius * 0.7;
    const innerAngleStep = totalAngle / (numTicksInner - 1);
    for (let i = 0; i < numTicksInner; i++) {
      const angle = startAngle + i * innerAngleStep;
      const x1 = Math.cos(angle) * (innerTickRadius - innerTickLength);
      const y1 = Math.sin(angle) * (innerTickRadius - innerTickLength);
      const x2 = Math.cos(angle) * innerTickRadius;
      const y2 = Math.sin(angle) * innerTickRadius;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = '#d9d9d9';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    ctx.restore();

    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = '#616E85';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const labelRadius = outerRadius - 18;

    const startLabelAngle = (150 * Math.PI) / 180;
    const x0 = centerX + Math.cos(startLabelAngle) * labelRadius;
    const y0 = centerY + Math.sin(startLabelAngle) * labelRadius;
    ctx.fillText('0', x0, y0);

    const endLabelAngle = (30 * Math.PI) / 180;
    const x100 = centerX + Math.cos(endLabelAngle) * labelRadius;
    const y100 = centerY + Math.sin(endLabelAngle) * labelRadius;
    ctx.fillText('100', x100, y100);
  }
};

export const kiChartConfig = {
  canvasId: 'kiChart',
  type: 'doughnut',
  data: {},
  options: {
    responsive: false,
    cutout: '85%',
    events: [],
    plugins: {
      tooltip: {
        enabled: false
      }
    }
  },
  plugins: [kiChartTicksPlugin]
};

export const mziChartConfig = {
  canvasId: 'mziChart',
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#f0f2f5', 'transparent'],
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: false,
    cutout: '80%',
    rotation: 270,
    circumference: 300,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false }
    }
  }
};
