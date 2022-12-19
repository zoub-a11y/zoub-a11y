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
