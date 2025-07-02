export { formatPeople, formatSpecies, formatLocations, formatVehicles };

function formatPeople(list) {
  if (!Array.isArray(list) || list.length === 0) return "-";
  return `<ul>${list
    .map(
      (p) => `
      <li>
        <details>
          <summary>${p.name}</summary>
          <ul>
            <li><strong>Gender:</strong> ${p.gender || "?"}</li>
            <li><strong>Age:</strong> ${p.age || "?"}</li>
            <li><strong>Eye Color:</strong> ${p.eye_color || "?"}</li>
            <li><strong>Hair Color:</strong> ${p.hair_color || "?"}</li>
          </ul>
        </details>
      </li>`
    )
    .join("")}</ul>`;
}

function formatSpecies(list) {
  if (!Array.isArray(list) || list.length === 0) return "-";
  return `<ul>${list
    .map(
      (s) => `
      <li>
        <details>
          <summary>${s.name}</summary>
          <ul>
            <li><strong>Classification:</strong> ${s.classification}</li>
            <li><strong>Eye Colors:</strong> ${s.eye_colors}</li>
            <li><strong>Hair Colors:</strong> ${s.hair_colors}</li>
          </ul>
        </details>
      </li>`
    )
    .join("")}</ul>`;
}

/* Tambahkan helper serupa untuk locations & vehicles */
function formatLocations(list) {
  if (!Array.isArray(list) || list.length === 0) return "-";
  return `<ul>${list
    .map(
      (l) => `
      <li>
        <details>
          <summary>${l.name}</summary>
          <ul>
            <li><strong>Climate:</strong> ${l.climate}</li>
            <li><strong>Terrain:</strong> ${l.terrain}</li>
            <li><strong>Surface Water:</strong> ${l.surface_water}</li>
          </ul>
        </details>
      </li>`
    )
    .join("")}</ul>`;
}

function formatVehicles(list) {
  if (!Array.isArray(list) || list.length === 0) return "-";
  return `<ul>${list
    .map(
      (v) => `
      <li>
        <details>
          <summary>${v.name}</summary>
          <ul>
            <li><strong>Description:</strong> ${v.description}</li>
            <li><strong>Class:</strong> ${v.vehicle_class}</li>
            <li><strong>Length:</strong> ${v.length}</li>
          </ul>
        </details>
      </li>`
    )
    .join("")}</ul>`;
}
