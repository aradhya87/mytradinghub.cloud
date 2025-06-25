// script.js

function openTradeModal(action) {
  document.getElementById("trade-modal").classList.remove("hidden");
  document.getElementById("modal-action").innerText = action === "buy" ? "Buy Lots" : "Sell Lots";
  document.getElementById("modal-action").dataset.type = action;
}

function closeModal() {
  document.getElementById("trade-modal").classList.add("hidden");
}

function confirmTrade() {
  const action = document.getElementById("modal-action").dataset.type;
  const lotSize = document.getElementById("lot-size").value;

  if (lotSize <= 0) {
    alert("Please enter a valid lot size");
    return;
  }

  const message = `You placed a ${action.toUpperCase()} order of ${lotSize} lots`;
  alert(message);
  closeModal();

  // Fake gain/loss update for demo
  const gainLoss = document.getElementById("gain-loss");
  const random = Math.random();
  gainLoss.innerText = action === "buy"
    ? `Gain: +${(random * 3).toFixed(2)}%`
    : `Loss: -${(random * 3).toFixed(2)}%`;
}

// Optional: Live price simulation
setInterval(() => {
  const price = (26500 + Math.random() * 300).toFixed(2);
  document.getElementById("live-price").innerText = `Price: $${price}`;
}, 3000);
