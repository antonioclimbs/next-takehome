import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Details from '@/components/details';
import images from '@/public/images.json';
import ImageMagnify from 'react-image-magnify';

export default function ProductPage({ data }) {
  const router = useRouter();
  const { product, variant } = router.query;

  const productInfo = {
    product,
    variant,
    price: 36,
    details: 'Angel on earth vibes - look otherworldly in this tie dye printed dress 🦋 Having them all trying to figure out where you came from… heaven, duh 😇',
    ...data
  }

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    if (!isFullScreen) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const openFullscreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const slides: JSX.Element[] = [];

  for (let i = 0; i < images.length; i++) {
    slides.push(<SwiperSlide className={styles.slide} key={i}>
      {isFullScreen ? (
        <div onClick={handleToggleFullScreen}>
          <img src={images[i].url} alt={`image${i}`} onClick={handleToggleFullScreen} />
        </div>) : (
        <img src={images[i].url} alt={`image${i}`} onClick={handleToggleFullScreen} />
      )}
    </SwiperSlide>)
  }

  return (
    <div className={styles.product}>
      <Swiper
        loop={true}
        spaceBetween={isFullScreen ? 0 : 10}
        slidesPerView={1.2}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        scrollbar={{
          el: '.swiper-scrollbar',
          draggable: true,
          snapOnRelease: true,
          dragSize: 'auto',
        }}
        centeredSlides={true}
      >
        {slides}
      </Swiper>
      {!isFullScreen ? (<Details props={productInfo} />) : null}
    </div >
  );
};