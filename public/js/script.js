document.addEventListener("DOMContentLoaded", function () {
  const allbuttons = document.querySelectorAll(".searchBtn");
  const searchbar = document.querySelector(".searchbar");
  const searchInput = document.getElementById("searchInput");
  const searchclose = document.getElementById("searchclose");

  for (var i = 0; i < allbuttons.length; i++) {
    allbuttons[i].addEventListener("click", function () {
      searchbar.style.visibility = "visible";
      searchbar.classList.add("open");
      this.setAttribute("aria-expanded", "true");
      searchInput.focus();
    });
  }

  searchclose.addEventListener("click", function () {
    searchbar.style.visibility = "hidden";
    searchbar.classList.remove("open");
    this.setAttribute("aria-expanded", "false");
  });
});
