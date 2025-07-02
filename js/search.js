import { renderFilms } from "./render_ui.js";

export function searchHandler(keyword, films, sortTitleBtn, sortReleaseBtn) {
  sortReleaseBtn.classList.remove("active");
  sortTitleBtn.classList.remove("active");
  sortTitleBtn.innerHTML = "<i class='fas fa-sort-alpha-down'></i>";
  const lowerKeyword = keyword.toLowerCase().trim();
  const filtered = lowerKeyword
    ? films.filter(
        (
          f // OR logic
        ) =>
          f.title.toLowerCase().includes(lowerKeyword) ||
          f.original_title.toLowerCase().includes(lowerKeyword) ||
          f.original_title_romanised.toLowerCase().includes(lowerKeyword)
      )
    : films;
  renderFilms(filtered);
}
