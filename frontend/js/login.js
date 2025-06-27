document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault()

  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('password').value.trim()

  try {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()

    if (res.ok) {
      alert('Login successful')
      // Save user email and balance in localStorage for dashboard
      localStorage.setItem('userEmail', data.email)
      localStorage.setItem('userBalance', data.balance)
      // Redirect to dashboard
      window.location.href = 'user-dashboard.html'
    } else {
      alert(data.error || 'Invalid email or password')
    }
  } catch (err) {
    alert('Server error, please try again later')
  }
})
