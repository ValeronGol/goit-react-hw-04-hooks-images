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

// class App extends Component {
//   state = {
//     query: null,
//     total: 1,
//     imgData: [],
//     loading: false,
//     page: 1,
//     isOpenModal: false,
//     photo: '',
//   };

//   submitForm = q => {
//     this.setState({ query: q });
//   };

// handleButtonMore = () => {
//   this.setState(prevState => ({
//     page: prevState.page + 1,
//   }));
// };

//   async componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;
//     const shouldImages = prevState.query !== query;
//     const shouldPage = prevState.page !== page;

//     scroll();

//     if (shouldImages) {
//       try {
//         this.setState({ loading: true, imgData: [], page: 1, total: 1 });
//         const imgData = await fetchImages(query, page);
//         this.setState({
//           imgData: imgData.hits,
//           loading: false,
//           total: imgData.totalHits,
//         });
//       } catch (error) {
//         this.setState({ loading: false });
//         toast.error('Oops, there is no images with that name');
//       }
//     }
//     if (shouldPage) {
//       try {
//         this.setState({ loading: true });
//         const imgData = await fetchImages(query, page);
//         this.setState(prevState => ({
//           imgData: [...prevState.imgData, ...imgData.hits],
//           loading: false,
//         }));
//       } catch (error) {
//         this.setState({ loading: false });
//         toast.error('Oops, there is no images with that name');
//       }
//     }
//   }

//   toggleModalShow = event => {
//     if (!this.state.isOpenModal) {
//       this.setState({ photo: event.target.dataset.photo });
//     }
//     this.setState(prevState => ({
//       isOpenModal: !prevState.isOpenModal,
//     }));
//   };

//   render() {
//     const { imgData, loading, total } = this.state;
//     return (
//       <ConteinerApp>
//         <Searchbar onSubmit={this.submitForm} />
//         {!total && (
//           <TitleApp>
//             По такому запросу картинок не найдено. Введите другой запрос!!!
//           </TitleApp>
//         )}
//         {!imgData && loading && <LoaderMore />}
//         {imgData && imgData.length > 0 && (
//           <>
//             <ImageGallery
//               images={this.state.imgData}
//               onClick={this.toggleModalShow}
//             />
//             {this.state.isOpenModal && (
//               <Modal
//                 showModal={this.toggleModalShow}
//                 props={this.state.photo}
//               />
//             )}
//             {loading ? (
//               <LoaderMore />
//             ) : (
//               <Button onClick={this.handleButtonMore} />
//             )}
//           </>
//         )}
//         <ToastContainer autoClose={3000} />
//       </ConteinerApp>
//     );
//   }
// }
