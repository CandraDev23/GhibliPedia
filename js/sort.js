import { renderFilms } from "./render_ui.js";

export function sortTitle(films, sortTitleBtn, sortReleaseBtn, searchInput) {
  searchInput.value = "";
  sortReleaseBtn.classList.remove("active");

  if (
    sortTitleBtn.classList.contains("active") &&
    sortTitleBtn.classList.contains("asc")
  ) {
    sortTitleBtn.classList.add("desc");
    sortTitleBtn.classList.remove("asc");
    sortTitleBtn.innerHTML = "<i class='fas fa-sort-alpha-up-alt'></i>";
    const sorted = [...films].sort((a, b) => b.title.localeCompare(a.title));
    renderFilms(sorted);
  } else if (
    sortTitleBtn.classList.contains("active") &&
    sortTitleBtn.classList.contains("desc")
  ) {
    sortTitleBtn.innerHTML = "<i class='fas fa-sort-alpha-down'></i>";
    sortTitleBtn.classList.remove("active", "desc");
    renderFilms(films);
  } else if (!sortTitleBtn.classList.contains("active")) {
    sortTitleBtn.classList.add("active", "asc");
    sortTitleBtn.innerHTML = "<i class='fas fa-sort-alpha-down'></i>";
    const sorted = [...films].sort((a, b) => a.title.localeCompare(b.title));
    renderFilms(sorted);
  }
}

export function sortRelease(films, sortTitleBtn, sortReleaseBtn, searchInput) {
  searchInput.value = "";
  sortTitleBtn.classList.remove("active");
  sortTitleBtn.innerHTML = "<i class='fas fa-sort-alpha-down'></i>";

  if (sortReleaseBtn.classList.contains("active")) {
    sortReleaseBtn.classList.remove("active");
    renderFilms(films);
  } else {
    sortReleaseBtn.classList.add("active");
    const sorted = [...films].sort((a, b) =>
      b.release_date.localeCompare(a.release_date)
    );
    renderFilms(sorted);
  }
}
