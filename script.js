// Exemple : Afficher une alerte au clic sur un projet
document.querySelectorAll('.project a').forEach(link => {
    link.addEventListener('click', function() {
        alert("Redirection vers le projet...");
    });
});

