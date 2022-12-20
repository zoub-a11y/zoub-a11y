window.onload = (event) => {
	
  window.addEventListener("scroll", (e) => {
    var btn = document.getElementById("btn");
    if (window.scrollY > 200) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
  function scrollhaut() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  var closeBtn = document.querySelector(".close");
  const modalSocial = document.querySelector(".modalSocial");
  const btnShare = document.querySelector(".btnShare");
  const toggleDarkMode = document.querySelector("#toggle-dark-mode");
  const btnHaut = document.querySelector(".btnHaut");
  const btnFav = document.querySelector(".btnFav");
  const titleLinktree = document.querySelector(".presentation-title h1");
  const presentation = document.querySelector(".presentation");
  const switchDarkMode = document.querySelector(".switch");

  // Ouvrir la modale à l'aide du bouton ".btnShare"
  btnShare.addEventListener("click", function () {
    modalSocial.style.display = "block";
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
      btnHaut.classList.replace("btnHaut", "dark-mode-btnHaut");
      presentation.classList.replace("presentation", "dark-mode-presentation");
    } else {
      document.body.classList.remove("dark-mode");
      titleLinktree.style.color = "inherit";
      switchDarkMode.setAttribute("aria-label", "Activer le mode sombre");
      switchDarkMode.setAttribute("title", "Activer le mode sombre");
      btnHaut.classList.replace("dark-mode-btnHaut", "btnHaut");
      presentation.classList.replace("dark-mode-presentation", "presentation");
    }
  });

  btnFav.addEventListener("click", () => {
    // Récupère le titre et l'URL de la page
    const title = document.title;
    const url = window.location.href;

    // Ajoute la page aux favoris
    if (window.sidebar && window.sidebar.addPanel) {
      // Pour les navigateurs anciens, tels que Firefox
      window.sidebar.addPanel(title, url, "");
    } else if (window.external && "AddFavorite" in window.external) {
      // Pour Internet Explorer
      window.external.AddFavorite(url, title);
    } else {
      // Pour les autres navigateurs
      alert(
        "Votre navigateur ne prend pas en charge cette fonctionnalité. Utilisez le raccourci clavier Ctrl+D pour ajouter cette page aux favoris."
      );
    }
  });
  const currentUrl = window.location.href;

  const facebookShare = document.querySelector(".facebook");
  const twitterShare = document.querySelector(".twitter");
  const linkedInShare = document.querySelector(".linkedin");

  facebookShare.href =
    "https://www.facebook.com/sharer/sharer.php?u=" + currentUrl + "";
  twitterShare.href =
    "https://twitter.com/intent/tweet?url=" +
    currentUrl +
    "&text=Zoubeir_Haffez&via=VOTRE_NOM_D%27UTILISATEUR";
  linkedInShare.href =
    "https://www.linkedin.com/shareArticle?mini=true&url=" +
    currentUrl +
    "&title=Zoubeir_Haffez&summary=Defenseur_de_l%27accessibilite&source=URL_DU_SITE";

  // Sélectionner le bouton
  var copyButton = document.querySelector("#copyButton");

  // Ajouter un gestionnaire d'événement pour copier l'adresse de la page lorsque le bouton est cliqué
  copyButton.addEventListener("click", function () {
    // Créer un élément de texte caché
    var copyTextElement = document.createElement("textarea");
    copyTextElement.style.position = "fixed";
    copyTextElement.style.opacity = "0";
    copyTextElement.value = currentUrl;
    document.body.appendChild(copyTextElement);

    // Sélectionner le texte et copier dans le presse-papiers
    copyTextElement.select();
    document.execCommand("copy");
    // Afficher un message de confirmation
  alert('L\'adresse de la page a été copiée dans le presse-papiers!');

    // Supprimer l'élément de texte caché
    document.body.removeChild(copyTextElement);
  });
};
