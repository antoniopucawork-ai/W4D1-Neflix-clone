function checkMovies() {
  const sections = document.querySelectorAll(".movie-row");

  for (const section of sections) {
    const sectionPosition = section.getBoundingClientRect();

    if (sectionPosition.top < window.innerHeight - 100) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  }
}

window.addEventListener("scroll", checkMovies);
checkMovies();