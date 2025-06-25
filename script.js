const ticker = document.getElementById('ticker');

const pairs = [
  { name: 'AUDUSD', bid: 0.66921, ask: 0.66933 },
  { name: 'EURUSD', bid: 1.09681, ask: 1.09694 },
  { name: 'GBPUSD', bid: 1.2838, ask: 1.28402 },
  { name: 'USDCAD', bid: 1.32769, ask: 1.32785 }
];

function updateTicker() {
  ticker.innerHTML = '';
  pairs.forEach(pair => {
    const spread = (pair.ask - pair.bid).toFixed(1);
    ticker.innerHTML += `
      <div>
        <strong>${pair.name}</strong><br>
        Bid ${pair.bid}<br>
        Ask ${pair.ask}<br>
        Spread <span style="color: green">${spread}</span>
      </div>
    `;
  });
}

updateTicker();
