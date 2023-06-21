import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Details from '@/components/details';
import images from '@/public/images.json';

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

  const slides: JSX.Element[] = [];

  for (let i = 0; i < images.length; i++) {
    slides.push(<SwiperSlide className={styles.slide} key={i}>
      <img src={images[i].original} alt={`image${i}`} />
    </SwiperSlide>)
  }

  return (
    <div className={styles.product}>
      <Swiper
        loop={true}
        spaceBetween={10}
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
        freeMode={true}
        centeredSlides={true}
        className={styles.swiper}
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
      <Details props={productInfo} />
    </div >
  );
};