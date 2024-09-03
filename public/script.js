document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username == 'freedom' && password == 'summercamp2024') {
    // Genera un token casuale
    const token = Math.random().toString(36).substr(2);
    // Salva il token nel sessionStorage
    sessionStorage.setItem('accessToken', token);
    // Reindirizza alla pagina di vittoria con il token come parametro URL
    window.location.href = 'vittoria.html?token=' + token;
  } else {
    alert('Credenziali non valide. Per favore, riprova.');
  }
});
