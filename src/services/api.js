import axios from 'axios';

const getImagesbyAxios = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    per_page: 12,
    key: '22579903-23cd6d72a32c76f3810c95a65',
  },
});

export const fetchImages = async (query, page) => {
  const {
    data: { hits },
  } = await getImagesbyAxios(`?q=${query}&page=${page}`);
  return hits;
};
