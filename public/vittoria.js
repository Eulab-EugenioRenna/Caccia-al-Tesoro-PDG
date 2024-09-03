document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const storedToken = sessionStorage.getItem('accessToken');

    if (!token || token !== storedToken) {
        // Se il token non è presente o non corrisponde, reindirizza alla pagina di login
        window.location.href = 'index.html';
    } else {
        // Rimuovi il token dopo l'uso per evitare accessi ripetuti
        sessionStorage.removeItem('accessToken');
    }
});
