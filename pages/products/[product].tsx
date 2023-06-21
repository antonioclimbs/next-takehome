import { useRouter } from 'next/router';
import type { GetStaticPropsContext } from 'next'
import styles from '../../styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Image from 'next/image';
import Details from '@/components/details';

// export async function getStaticProps({ params, locale }: GetStaticPropsContext<{ handle: string }>) {
//   const options = {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//     body: JSON.stringify({
//       a: 10,
//       b: 20,
//     }),
//   };

//   const data = await fetch('localhost:8080/products', options);

//   // const page = await resolveBuilderContent(builderModel, locale, {
//   //   productHandle: params?.handle,
//   // })

//   return {
//     props: {
//       // page: page,
//       data: data,
//       // ...(await getLayoutProps()),
//     },
//   }
// }



export default function ProductPage({ data }) {
  const router = useRouter();
  const { product, variant } = router.query;

  const productInfo = {
    product,
    variant,
    price: 36,
    details: 'details',
    ...data
  }
  /*
    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 50;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 4;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 3;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 2.5;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between') : 20;
  
    var swiper = new Swiper('.swiper-slider-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop
        },
        992: {
          slidesPerView: slidesTablet
        },
        320: {
          slidesPerView: slidesMobile
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: dragSize
      }
  */
  return (
    <div className={styles.product}>
      {/* <section>
        <h1>Product Page</h1>
        <p>Product: {product}</p>
        <p>Query Parameter: {variant}</p>
      </section> */}
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
        // zoom={true}
        // scrollbar={{ draggable: true }}
        // navigation={true}
        // pagination={{ clickable: true }} // Add pagination dots
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
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
        </SwiperSlide>
      </Swiper>
      <Details props={productInfo} />
    </div >
  );
};