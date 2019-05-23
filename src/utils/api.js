import { locations } from "./_DATA.js";

export function search(query) {
  return new Promise((res, rej) => {
    res(locations.rows);
  });
}
