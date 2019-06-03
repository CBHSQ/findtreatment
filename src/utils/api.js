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
    if (query.typeFacility && query.typeFacility !== location.typeFacility) {
      return false;
    }
    // if (
    //   query.typeFacility &&
    //   location.services.filter(
    //     service =>
    //       service.f1 === "Type of Care" && service.f3 === query.typeFacility
    //   ).length < 1
    // ) {
    //   return false;
    // }
    return true;
  });
};
