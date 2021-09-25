import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  per_page: 12,
  key: '22579903-23cd6d72a32c76f3810c95a65',
};

const params = 'image_type=photo&orientation=horizontal';

export const fetchImages = async (query, page) => {
  const {
    data: { hits },
  } = await axios.get(`?q=${query}&page=${page}&${params}`);
  return hits;
};
