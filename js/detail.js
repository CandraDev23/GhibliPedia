import { loadFilm } from "./api.js";

const param = new URLSearchParams(window.location.search);
const id = param.get("id");

window.onload = loadFilm(id);
