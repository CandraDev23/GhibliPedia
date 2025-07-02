import { renderFilms, renderDetailFilm } from "./render_ui.js";

export let films = [];

export async function loadFilms() {
  try {
    const res = await fetch("https://ghibliapi.vercel.app/films");
    if (!res.ok) throw new Error("Gagal mengambil data");
    films = await res.json();
    renderFilms(films);
  } catch (err) {
    console.error(err.message);
  }
}

export async function fetchRelations(id) {
  const filmUrl = `https://ghibliapi.vercel.app/films/${id}`;

  try {
    const [speciesRes, peopleRes, locationRes, vehicleRes] = await Promise.all([
      fetch("https://ghibliapi.vercel.app/species"),
      fetch("https://ghibliapi.vercel.app/people"),
      fetch("https://ghibliapi.vercel.app/locations"),
      fetch("https://ghibliapi.vercel.app/vehicles"),
    ]);

    if (!speciesRes.ok || !peopleRes.ok || !locationRes.ok || !vehicleRes.ok) {
      throw new Error("Gagal mengambil salah satu data relasi");
    }

    const [speciesData, peopleData, locationsData, vehiclesData] =
      await Promise.all([
        speciesRes.json(),
        peopleRes.json(),
        locationRes.json(),
        vehicleRes.json(),
      ]);
    const filteredSpecies = speciesData.filter((item) =>
      item.films.includes(filmUrl)
    );
    const filteredPeople = peopleData.filter((item) =>
      item.films.includes(filmUrl)
    );
    const filteredLocations = locationsData.filter((item) =>
      item.films.includes(filmUrl)
    );
    const filteredVehicles = vehiclesData.filter((item) =>
      item.films.includes(filmUrl)
    );
    return {
      species: filteredSpecies,
      people: filteredPeople,
      locations: filteredLocations,
      vehicles: filteredVehicles,
    };
  } catch (err) {
    console.error("Error ambil data relasi:", err.message);
    return null;
  }
}


export async function loadFilm(idFilm) {
  try {
    const res = await fetch(`https://ghibliapi.vercel.app/films/${idFilm}`);
    if (!res.ok) throw new Error("Gagal mengambil data");
    const film = await res.json();
  document.querySelector(".film-tagline").textContent = `Loading the world of ${film.title}...`;
    renderDetailFilm(film);
    document.querySelector(".film-tagline").textContent = `Step into the world of ${film.title}.`;

  } catch (err) {
    console.error(err.message);
  }
}