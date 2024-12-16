import GalleryItem from "../GalleryItem/GalleryItem";
import Button from "../Button/Button";

import Loader from "../Loader/Loader";
import { ImageGalleryContainer } from "./Gallery.styled";
import { getImages } from "../services/Pixabay-Api";
import { useState, useEffect } from "react";

const SearchInfo = ({ queryText }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
    setPage(1);
  }, [queryText]);

  useEffect(() => {
    // if (!queryText) {
    //   return;
    // }

    setLoading(true);

    getImages(queryText, page)
      .then((data) => {
        setImages((state) => [...state, ...data.hits]);
      })

      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [queryText, page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  // if (status === "idle") {
  //   return <div>введите имя</div>;
  // }
  // if (status === "pending") {
  //   return <Loader />;
  // }

  // if (status === "rejected") {
  //   return <p>{error.message}</p>;
  // }

  // if (status === "resolved") {
  return (
    <>
      <ImageGalleryContainer>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <GalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </ImageGalleryContainer>
      {error && <div>{error.message}</div>}
      {loading && <Loader />}
      {images.length >= 12 && <Button onClick={loadMore} />}
    </>
  );
};
export default SearchInfo;
