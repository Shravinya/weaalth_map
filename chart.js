let ownerChart = null;

export function renderOwnerPieChart(owner, canvasId = 'ownerPieChart') {
  const ctx = document.getElementById(canvasId)?.getContext('2d');
  if (!ctx) return;

  const propValue = Number(owner.value) || 0;
  const netWorth = Number(owner.net_worth) || 0;
  const remaining = netWorth > propValue ? netWorth - propValue : 0;

  if (ownerChart) {
    ownerChart.destroy();
  }

  ownerChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Property Value', 'Remaining Net Worth'],
      datasets: [{
        data: [propValue, remaining],
        backgroundColor: ['#36A2EB', '#FF6384']
      }]
    },
    options: {
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: `${owner.name}'s Asset Breakdown`
        }
      }
    }
  });
}

export function destroyOwnerChart() {
  if (ownerChart) {
    ownerChart.destroy();
    ownerChart = null;
  }
}
