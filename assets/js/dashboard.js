// assets/js/dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  // Simulate loading user email and balance (replace with backend fetch)
  const userEmail = localStorage.getItem("userEmail") || "user@example.com"
  const userBalance = localStorage.getItem("userBalance") || "1000.00"

  document.getElementById("user-email").textContent = userEmail
  document.getElementById("user-balance").textContent = userBalance
})
