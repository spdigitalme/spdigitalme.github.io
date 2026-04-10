document.querySelector(".brand a").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector("#hero")?.scrollIntoView({
    behavior: "smooth"
  });
});