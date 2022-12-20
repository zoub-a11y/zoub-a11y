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

	// Sélectionne l'élément de commutateur du mode sombre
	const toggleDarkMode = document.querySelector("#toggle-dark-mode");
	const btnHaut = document.querySelector(".btnHaut");
	const presentation = document.querySelector(".presentation");
	const switchDarkMode = document.querySelector(".switch");

	// Ajoute un gestionnaire d'événement au clic sur l'élément de commutateur
	toggleDarkMode.addEventListener("click", function () {
	// Inverse l'état du mode sombre
	darkModeEnabled = !darkModeEnabled;

	// Applique le mode sombre ou le mode clair en fonction de l'état du mode sombre
	if (darkModeEnabled) {
	  document.body.classList.add("dark-mode");
	  switchDarkMode.setAttribute('aria-label', "Désactiver le mode sombre");
	  switchDarkMode.setAttribute('title', "Désactiver le mode sombre");
	  btnHaut.classList.replace("btnHaut", "dark-mode-btnHaut");
	  presentation.classList.replace("presentation", "dark-mode-presentation");
	} else {
	  document.body.classList.remove("dark-mode");
	  switchDarkMode.setAttribute('aria-label', "Activer le mode sombre");
	  switchDarkMode.setAttribute('title', "Activer le mode sombre");
	  btnHaut.classList.replace("dark-mode-btnHaut", "btnHaut");
	  presentation.classList.replace("dark-mode-presentation", "presentation");
	}
	});

	async function addCurrentUrlToFavorites() {
	  // Récupère l'URL actuelle
	  var currentUrl = window.location.href;

	  try {
		// Ajoute l'URL actuelle aux favoris
		await navigator.bookmarks.create({title: document.title, url: currentUrl});
	  } catch (error) {
		console.error(error);
	  }
	}
};