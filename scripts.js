const BASE_URL = 'http://localhost:5000/api' // change this if hosted online

async function signupUser() {
  const email = document.getElementById('signupEmail').value
  const password = document.getElementById('signupPassword').value

  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()
  alert(data.message)

  if (res.ok) {
    document.getElementById('otpSection').style.display = 'block'
  }
}

async function verifyOtp() {
  const email = document.getElementById('signupEmail').value
  const otp = document.getElementById('otpInput').value

  const res = await fetch(`${BASE_URL}/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp })
  })

  const data = await res.json()
  alert(data.message)

  if (res.ok) {
    window.location.href = 'login.html'
  }
}

async function loginUser() {
  const email = document.getElementById('loginEmail').value
  const password = document.getElementById('loginPassword').value

  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()
  alert(data.message)

  if (res.ok) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', data.email)
    window.location.href = 'dashboard.html'
  }
}
