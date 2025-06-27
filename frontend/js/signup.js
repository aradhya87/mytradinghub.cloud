document.getElementById('signupForm').addEventListener('submit', async function(e) {
  e.preventDefault()

  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('password').value.trim()
  const confirmPassword = document.getElementById('confirmPassword').value.trim()

  if (password !== confirmPassword) {
    alert('Passwords do not match')
    return
  }

  try {
    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()

    if (res.ok) {
      alert('OTP sent to your email. Please check and verify.')
      // Show OTP input and verification UI here, example:
      document.getElementById('otpSection').style.display = 'block'
      document.getElementById('signupSection').style.display = 'none'
    } else {
      alert(data.error || 'Signup failed')
    }
  } catch (err) {
    alert('Server error, please try again later')
  }
})

// OTP verification form submit
document.getElementById('otpForm').addEventListener('submit', async function(e) {
  e.preventDefault()

  const email = document.getElementById('email').value.trim()
  const otp = document.getElementById('otp').value.trim()

  try {
    const res = await fetch('http://localhost:5000/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
    })
    const data = await res.json()

    if (res.ok) {
      alert('Verification successful! You can now log in.')
      // Redirect to login page or show login UI
      window.location.href = 'login.html'
    } else {
      alert(data.error || 'Invalid OTP')
    }
  } catch (err) {
    alert('Server error, please try again later')
  }
})
