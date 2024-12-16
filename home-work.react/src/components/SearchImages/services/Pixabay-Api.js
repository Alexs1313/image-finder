// export const getImages = (queryText, page) => {
//   return fetch(
//     `https://pixabay.com/api/?q=${queryText}}&page=${page}&key=47528955-e5c5a15afbe09ffc8e4a2202b&image_type=photo&orientation=horizontal&per_page=12`
//   ).then((r) => {
//     if (r.ok) {
//       return r.json();
//     }
//     return Promise.reject(new Error("Нет данных"));
//   });
// };
import axios from "axios";

export const getImages = (queryText, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${queryText}}&page=${page}&key=47528955-e5c5a15afbe09ffc8e4a2202b&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data);
};
