import axios from "axios";
const API_KEY = "47404996-12b53dec464063fd6255bb496";

export const PER_PAGE = 12;

export const fetchImages = (query, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}&safesearch=true`
    )
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error.message);
      throw error;
    });
};
