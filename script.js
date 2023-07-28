// Pour le Bouton Darkmode Lightmode

const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

themeSwitch.addEventListener('change', function () {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

// pour ajouter le site aux favoris

function favoris() {
    if (navigator.appName != 'Microsoft Internet Explorer') {
        window.alert("Presser Ctrl+D pour ajouter aux favoris");
    } else {
        window.external.AddFavorite("https://www.example.fr", "example.com");
    }
}


// Javascript pour la fonction de copier coller ou partager le lien du site.
function shareOrCopyLink() {
    const lien = document.getElementById('lien').href;
    const zoneTexte = document.getElementById('zone-texte');

    // Vérifier si l'API Web Share est prise en charge par le navigateur
    if (navigator.share) {
        // Partager le lien via l'API Web Share
        navigator.share({
                title: 'Linktree Zoubeir Haffez',
                text: 'Site pour acceder aux différents réseaux de Zoubeir Haffez',
                url: lien
            })
            .then(() => console.log('Lien partagé avec succès !'))
            .catch((error) => {
                console.error('Erreur lors du partage :', error);
                // En cas d'erreur, copier le lien dans le presse-papier
                copyLinkToClipboard(lien);
            });
    } else {
        // Si l'API Web Share n'est pas prise en charge, copier le lien directement
        copyLinkToClipboard(lien);
    }
}

function copyLinkToClipboard(link) {
    const zoneTexte = document.getElementById('zone-texte');

    // Placer le lien dans la zone de texte
    zoneTexte.value = link;
    zoneTexte.select();

    try {
        // Copier le texte sélectionné
        const resultat = document.execCommand('copy');
        if (resultat) {
            alert("Le lien a été copié avec succès !");
        } else {
            alert("La copie du lien a échoué. Veuillez le copier manuellement.");
        }
    } catch (err) {
        alert("Une erreur est survenue lors de la copie du lien : " + err);
    }
}


// Bouton Haut de page

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

function topFunction() {
    // Définissez la durée de l'animation (en millisecondes)
    const duration = 200; // Vous pouvez ajuster cette valeur selon vos préférences

    // Récupérez la position actuelle de défilement
    const startScroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Calculez le déplacement total nécessaire pour atteindre le haut de la page
    const distanceToTop = startScroll;

    // Obtenez le temps de départ de l'animation
    const startTime = performance.now();

    // Créez une fonction d'animation récursive
    function animateScroll(timestamp) {
        const elapsedTime = timestamp - startTime;
        const scrollStep = distanceToTop / duration;

        // Calculez la nouvelle position de défilement pour cet instant
        const newScrollPosition = startScroll - Math.min(scrollStep * elapsedTime, distanceToTop);

        // Défilez vers la nouvelle position
        document.documentElement.scrollTop = document.body.scrollTop = newScrollPosition;

        // Vérifiez si l'animation doit se poursuivre
        if (elapsedTime < duration) {
            // Continuez l'animation en appelant requestAnimationFrame
            requestAnimationFrame(animateScroll);
        } else {
            // L'animation est terminée, assurez-vous que la position finale est correcte
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
    }

    // Démarrez l'animation en appelant requestAnimationFrame pour la première fois
    requestAnimationFrame(animateScroll);
}
