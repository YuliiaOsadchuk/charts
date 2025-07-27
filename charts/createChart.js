export function createChart({
  canvasId,
  type,
  data,
  options,
  plugins,
  renderLegend
}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.warn(`Canvas element with ID "${canvasId}" not found.`);
    return;
  }

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type,
    data,
    options,
    plugins
  });

  if (typeof renderLegend === 'function') {
    renderLegend();
  }
}
