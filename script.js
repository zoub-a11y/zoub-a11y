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
