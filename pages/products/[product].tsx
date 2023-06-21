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
    // slides.push(<SwiperSlide className={`${styles.slide} ${isFullScreen ? styles.fullscreen : ''}`} key={i}>
    slides.push(<SwiperSlide className={styles.slide} key={i}>
      {isFullScreen ? (
        // <div className={styles.fullscreen}>
        <div onClick={handleToggleFullScreen}>
          {/* <ImageMagnify className={''} {...{
            smallImage: {
              alt: images[i].alt,
              isFluidWidth: true,
              src: images[i].url
            },
            largeImage: {
              src: images[i].url,
              width: 1680,
              height: 2100
            },
            imagePosition: 'right',
          }} /> */}
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
        // freeMode={true}
        centeredSlides={true}
      // className={styles.swiper}
      >
        {/* <SwiperSlide className={styles.slide}>
          <img src='https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_fbe029d5-ce6f-4a4b-ad03-12de748de70c_1680x.jpg?v=1674955469' alt='image1' />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src='https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_d92bb309-b1c6-44fc-b0f6-b7a33a90d693_1100x.jpg?v=1674955469' alt='image1' />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src='https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_ead9228a-a716-445a-8905-34caea5b18fa_1100x.jpg?v=1674955469' alt='image1' />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src='https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_86ebb7b3-f1ec-4650-a3db-1983b106db83_1100x.jpg?v=1674955469' alt='image1' />
        </SwiperSlide> */}
        {slides}
      </Swiper>
      {!isFullScreen ? (<Details props={productInfo} />) : null}
    </div >
  );
};