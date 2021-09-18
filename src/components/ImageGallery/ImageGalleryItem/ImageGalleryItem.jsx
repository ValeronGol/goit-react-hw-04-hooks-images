import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, largeImageURL, tags }) => {
  return (
    <Item>
      <Img src={image} alt={tags} data-photo={largeImageURL} />
    </Item>
  );
};

ImageGalleryItem.prototype = {
  image: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
