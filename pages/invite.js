function generateInviteCode(username) {
  const namePart = username.toLowerCase().replace(/\s+/g, '');
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return namePart + randomNumber;
}

function showInviteCode() {
  const emailInput = document.getElementById('userEmail').value.trim();

  if (!emailInput || !emailInput.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }

  const username = emailInput.split('@')[0];
  const inviteCode = generateInviteCode(username);

  document.getElementById('inviteCodeDisplay').textContent = 'Your invite code: ' + inviteCode;
}
