import { locations, planets } from "./_DATA.js";

export function getAll(query) {
  return new Promise((res, rej) => {
    res(filterResults(query, locations.rows));
  });
}

export function getDetails(id) {
  return new Promise((res, rej) => {
    res(locations.rows.filter(provider => provider.frid === id));
  });
}

const filterResults = (query, locations) => {
  if (planets.includes(query.location.toLowerCase())) {
    return;
  }

  return locations.filter(location => {
    if (
      query.typeFacility &&
      query.typeFacility !== "All" &&
      query.typeFacility !== location.typeFacility
    ) {
      return false;
    }
    return true;
  });
};
