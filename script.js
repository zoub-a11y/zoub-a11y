window.onload = (event) => {
  // concerne le site
  const currentUrl = window.location.href;
  const title = document.title;
  const resume = document.querySelector('.presentation-contenu-col1 h2').innerHTML;

  // concerne Modale de partage
  const btnShare = document.querySelector(".btnShare");
  const closeBtn = document.querySelector(".closeModal");
  const modalSocial = document.querySelector(".modalSocial");
  const modalContent = document.querySelector(".modal-content");
  const facebookShare = document.querySelector(".modal-content .facebook");
  const twitterShare = document.querySelector(".modal-content .twitter");
  const linkedInShare = document.querySelector(".modal-content .linkedin");
  const copyDiv = document.querySelector(".copyDiv");
  const copyButton = document.querySelector(".copyButton");

  // concerne boutons réseaux sociaux
  const linkedInBtn = document.querySelector(".Linkedin");
  const linkedInName = "zoubeirhaffez";
  const fbBtn = document.querySelector(".Facebook");
  const fbName = "zoubeir.haffez";
  const instaBtn = document.querySelector(".Insta");
  const instaName = "zoubeir.haffez";
  const twitterBtn = document.querySelector(".Twitter");
  const twitterName = "ZoubeirH";

  // concerne dark mode
  const toggleDarkMode = document.querySelector("#toggle-dark-mode");
  const switchDarkMode = document.querySelector(".switch");

  // concerne bouton ajout aux favoris
  const btnFav = document.querySelector(".btnFav");

  // concerne le header
  const btnHaut = document.querySelector(".btnHaut");

  // concerne le résumé et l'image
  const titleLinktree = document.querySelector(".presentation-title h1");
  const presentation = document.querySelector(".presentation");

  window.addEventListener("scroll", (e) => {
    var btn = document.getElementById("btn");
    if (window.scrollY > 200) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  // Définit une variable pour stocker l'état du mode sombre (actif ou inactif)
  let darkModeEnabled = false;

  // Ajoute un gestionnaire d'événement au clic sur l'élément de commutateur
  toggleDarkMode.addEventListener("click", function () {
    // Inverse l'état du mode sombre
    darkModeEnabled = !darkModeEnabled;

    // Applique le mode sombre ou le mode clair en fonction de l'état du mode sombre
    if (darkModeEnabled) {
      document.body.classList.add("dark-mode");
      titleLinktree.style.color = "white";
      switchDarkMode.setAttribute("aria-label", "Désactiver le mode sombre");
      switchDarkMode.setAttribute("title", "Désactiver le mode sombre");
      btnHaut.classList.add("dark-mode-btnHaut");
      presentation.classList.add("dark-mode-presentation");
      toggleDarkMode.setAttribute("aria-pressed", "true");
    } else {
      document.body.classList.remove("dark-mode");
      titleLinktree.style.color = "inherit";
      switchDarkMode.setAttribute("aria-label", "Activer le mode sombre");
      switchDarkMode.setAttribute("title", "Activer le mode sombre");
      btnHaut.classList.remove("dark-mode-btnHaut");
      presentation.classList.remove("dark-mode-presentation");
      toggleDarkMode.setAttribute("aria-pressed", "false");
    }
  });

  // Ouvrir la modale à l'aide du bouton ".btnShare"
  btnShare.addEventListener("click", function () {
    if (darkModeEnabled) {
      modalSocial.style.display = "block";
      closeBtn.classList.add("closeDarkModal");
      modalSocial.classList.add("modalSocialDarkMode");
      modalContent.classList.add("modal-content-dark-mode");
      copyDiv.classList.add("copyDivDarkMode");
      copyButton.classList.add("copyButtonDarkMode");
    } else {
      modalSocial.style.display = "block";
      closeBtn.classList.remove("closeDarkModal");
      modalSocial.classList.remove("modalSocialDarkMode");
      modalContent.classList.remove("modal-content-dark-mode");
      copyDiv.classList.remove("copyDivDarkMode");
      copyButton.classList.remove("copyButtonDarkMode");
    }
  });

  // fermer la modale quand l'utilisateur clique en dehors
  window.addEventListener("click", function (event) {
    if (event.target == modalSocial) {
      modalSocial.style.display = "none";
    }
  });

  // fermer la modale lorsque l'utilisateur clique sur la croix
  closeBtn.addEventListener("click", function () {
    modalSocial.style.display = "none";
  });

  btnFav.addEventListener("click", () => {
    // Ajoute la page aux favoris
    if (window.sidebar && window.sidebar.addPanel) {
      // Pour les navigateurs anciens, tels que Firefox
      window.sidebar.addPanel(title, currentUrl, "");
    } else if (window.external && "AddFavorite" in window.external) {
      // Pour Internet Explorer
      window.external.AddFavorite(currentUrl, title);
    } else {
      // Pour les autres navigateurs
      alert(
        "Votre navigateur ne prend pas en charge cette fonctionnalité. Utilisez le raccourci clavier Ctrl+D pour ajouter cette page aux favoris."
      );
    }
  });

  // Ajouter un gestionnaire d'événement pour copier l'adresse de la page lorsque le bouton est cliqué
  copyButton.addEventListener("click", function () {
    // Créer un élément de texte caché
    var copyTextElement = document.createElement("textarea");
    copyTextElement.style.position = "fixed";
    copyTextElement.style.opacity = "0";
    copyTextElement.value = currentUrl;
    document.body.appendChild(copyTextElement);
    // Modifie le contenu du bouton
    copyButton.textContent = "Copié !";

    // Ajoute la classe pour l'animation de fondu
    copyButton.classList.add("fade-in");

    // Enlève la classe "fade-in" une fois l'animation terminée
    copyButton.addEventListener("animationend", () => {
      copyButton.classList.remove("fade-in");
    });

    // Sélectionner le texte et copier dans le presse-papiers
    copyTextElement.select();
    document.execCommand("copy");

    // Supprimer l'élément de texte caché
    document.body.removeChild(copyTextElement);
  });

  // modification des liens
  facebookShare.href =
    "https://www.facebook.com/sharer/sharer.php?u=" + currentUrl + "";
  twitterShare.href =
    "https://twitter.com/intent/tweet?url=" +
    currentUrl +
    "&text=" +
    title +
    "&via=" +
    twitterName +
    "";
  linkedInShare.href =
    "https://www.linkedin.com/sharing/share-offsite/?url=" + currentUrl + "&title=" + encodeURIComponent(title) + "&summary=" + encodeURIComponent(resume) + "";

  linkedInBtn.href = "https://www.linkedin.com/in/" + linkedInName + "/";
  linkedInBtn.setAttribute(
    "aria-label",
    "Vers le LinkedIn de " + titleLinktree.innerHTML + ""
  );
  linkedInBtn.setAttribute(
    "title",
    "Vers le LinkedIn de " + titleLinktree.innerHTML + ""
  );
  fbBtn.href = "https://www.facebook.com/" + fbName + "";
  fbBtn.setAttribute(
    "aria-label",
    "Vers le Facebook de " + titleLinktree.innerHTML + ""
  );
  fbBtn.setAttribute(
    "title",
    "Vers le Facebook de " + titleLinktree.innerHTML + ""
  );
  instaBtn.href = "https://www.instagram.com/" + instaName + "/";
  instaBtn.setAttribute(
    "aria-label",
    "Vers l'Instagram de " + titleLinktree.innerHTML + ""
  );
  instaBtn.setAttribute(
    "title",
    "Vers l'Instagram de " + titleLinktree.innerHTML + ""
  );
  twitterBtn.href = "https://twitter.com/" + twitterName + "";
  twitterBtn.setAttribute(
    "aria-label",
    "Vers le Twitter de " + titleLinktree.innerHTML + ""
  );
  twitterBtn.setAttribute(
    "title",
    "Vers le Twitter de " + titleLinktree.innerHTML + ""
  );
};
