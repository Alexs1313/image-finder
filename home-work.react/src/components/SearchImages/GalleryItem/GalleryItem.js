import { useState } from "react";
import Modal from "../Modal/Modal";
import { Image, Item } from "./GalleryItem.styled";

const GalleryItem = ({ webformatURL, tags, largeImageURL, id }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <Item onClick={toggleModal}>
      <Image src={webformatURL} alt={tags} />
      {showModal && (
        <Modal largeImg={largeImageURL} alt={tags} onClose={toggleModal} />
      )}
    </Item>
  );
};

export default GalleryItem;
