import { Component } from "react";
import style from "./ItemGalleryItem.module.css"

class ImageGalleryItem extends Component {
  handleImageClick = () => {
    const { image, onClick } = this.props;
    onClick(image.largeImageURL);
  };

  render() {
    const { image } = this.props;

    return (
      <li>
        <button
          type="button"
          className={style.imageButton}
          onClick={this.handleImageClick}
        >
          <img
            className={style.image}
            src={image.webformatURL}
            alt={image.tags}
            title={image.tags}
          />
        </button>
      </li>
    );
  }
}

export default ImageGalleryItem;