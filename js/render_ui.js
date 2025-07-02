import { fetchRelations } from "./api.js";
import {
  formatPeople,
  formatSpecies,
  formatLocations,
  formatVehicles,
} from "./utils.js";

const container = document.querySelector(".films");

export function renderFilms(films) {
  container.innerHTML = "";
  if (films.length === 0) {
    container.insertAdjacentHTML(
      "beforeend",
      `
        <h2>No film found</h2>
    `
    );
  }
  const filmsCount = document.querySelector(".films-count");
  if (films.length === 0) {
    filmsCount.textContent = "Results: 0";
    return;
  } else if (films.length > 1) {
    filmsCount.textContent = `Results: ${films.length}`;
  } else {
    filmsCount.textContent = `Result: ${films.length}`;
  }
  films.forEach((film) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="film-item">
      <img class="film-image" src="${film.movie_banner}" alt="${film.title}">
      <div class="film-body">
        <div class="film-title">
          <h3>${film.title}</h3>
          <p>${film.original_title}</p>
          <p>${film.original_title_romanised}</p>
        </div>
          <div class="film-info">
          <p class="release-date">${film.release_date}</p>
          <p>${film.running_time} Minutes</p>
          </div>
          </div>
          <div class="film-footer">
          <p class="rating"><strong>Rating:</strong> <span>${film.rt_score}/100</span></p>
          <button type="button" onclick="window.location.href = 'detail.html?id=${film.id}'" class="btn btn-detail">Detail</button>
        </div>
      </div>
    `
    );
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".content").style.display = "grid";
  });
}

export function renderDetailFilm(film) {
  const detailFilm = document.querySelector(".detail-film");

  fetchRelations(film.id).then((relations) => {
    detailFilm.innerHTML = `
        <div class="detail-cover">
            <img src="${film.image}" alt="Ghibli Film Poster" />
            <div class="detail-cover-header">
              <h2>${film.title}</h2>
              <p>${film.original_title}</p>
              <p>${film.original_title_romanised}</p>
              <span>
              <p><i class="far fa-clock"></i> ${film.running_time} Minutes</p>
              <p><i class="fas fa-star"></i> ${film.rt_score}/100</p>
              </span>
              <p class="film-credits">Director: ${film.director}, Producer: ${
      film.producer
    }</p>
              <p>Release Date: ${film.release_date}</p>
            </div>
          </div>
          <div class="detail-body">
            <div class="description">
              <h3>
                Description
              </h3>
              <p>
                ${film.description}
              </p>
            </div>
            <div class="relations">
              <h3>Related Informations</h3>
              <table class="relation-table">
                <tr>
                  <td><strong>People</strong></td>
                  <td>${formatPeople(relations.people)}</td>
                </tr>
                <tr>
                  <td><strong>Species</strong></td>
                  <td>${formatSpecies(relations.species)}</td>
                </tr>
                <tr>
                  <td><strong>Locations</strong></td>
                  <td>${formatLocations(relations.locations)}</td>
                </tr>
                <tr>
                  <td><strong>Vehicles</strong></td>
                  <td>${formatVehicles(relations.vehicles)}</td>
                </tr>
              </table>
            </div>
          </div>
  `;
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".content").style.display = "block";
  });
}
