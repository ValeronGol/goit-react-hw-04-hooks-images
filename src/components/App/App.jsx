import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchImages } from 'services/api';
import { scroll } from 'services/scroll';
import { Searchbar } from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { LoaderMore } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { ConteinerApp, TitleApp } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(1);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [reqStatus, setReqStatus] = useState('idle');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [photo, setpPhoto] = useState('');

  useEffect(() => {
    if (reqStatus === 'rejected') {
      toast.error('Oops, there is no images with that name');
    }
  }, [reqStatus]);

  useEffect(() => {
    if (!query) return;

    async function getImages() {
      try {
        setReqStatus('pending');
        const imgData = await fetchImages(query, page);
        setReqStatus('resolved');
        setImages(prevImages => [...prevImages, ...imgData.hits]);
        setTotal(imgData.totalHits);
        scroll();
      } catch (error) {
        setReqStatus('rejected');
      }
    }
    getImages();
  }, [query, page]);

  const submitForm = dataQuery => {
    setQuery(dataQuery);
    setImages([]);
    setPage(1);
  };

  const handleButtonMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModalShow = event => {
    if (!isOpenModal) {
      setpPhoto(event.target.dataset.photo);
    }
    setIsOpenModal(!isOpenModal);
  };

  return (
    <ConteinerApp>
      <Searchbar onSubmit={submitForm} />
      {!total && (
        <TitleApp>
          По такому запросу картинок не найдено. Введите другой запрос!!!
        </TitleApp>
      )}
      {!images && <LoaderMore />}
      {images && images.length > 0 && (
        <>
          <ImageGallery images={images} onClick={toggleModalShow} />
          {isOpenModal && <Modal showModal={toggleModalShow} props={photo} />}
          {reqStatus === 'pending' ? (
            <LoaderMore />
          ) : (
            <Button onClick={handleButtonMore} />
          )}
        </>
      )}
      <ToastContainer autoClose={3000} />
    </ConteinerApp>
  );
}
