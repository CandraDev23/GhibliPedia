import { loadFilms, films } from "./api.js";
import { searchHandler } from "./search.js";
import { sortTitle, sortRelease } from "./sort.js";
import { startGifAnimation } from "./animations.js";

window.addEventListener("load", () => {
  loadFilms();
  startGifAnimation();
});

const searchInput = document.querySelector("#search");
const searchForm = document.querySelector("#search-form");

const sortTitleBtn = document.querySelector(".sort-title");
const sortReleaseBtn = document.querySelector(".sort-release");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchHandler(searchInput.value, films);
});

searchInput.addEventListener("input", () => {
  searchHandler(searchInput.value, films, sortTitleBtn, sortReleaseBtn);
});


sortTitleBtn.addEventListener("click", () => sortTitle(films, sortTitleBtn, sortReleaseBtn, searchInput));
sortReleaseBtn.addEventListener("click", () => sortRelease(films, sortTitleBtn, sortReleaseBtn, searchInput));

