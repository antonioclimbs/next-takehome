import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const sandy: JSX.Element[] = [];
  for (let i = 0; i < 4; i++) {
    // sandy.push(<SwiperSlide className={styles.slide} key={i}>
    sandy.push(<SwiperSlide className='' key={i}>

    </SwiperSlide>)
  }

  return (
    <main className={styles.details}>
      <img src='https://cdn.shopify.com/s/files/1/0237/3346/9261/collections/AQUATIC-DESKTOP-BANNER.jpg?v=1687189768' alt='FINESSE-header' className='' />
      <div>
        <section className={styles.productName}>
          <h1 className=''>The hottest fits, voted on by you!</h1>
          <span className=''>Trending now on Lollipop Street, check out these fire fits.</span>
        </section>
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
          centeredSlides={true}
          className='w-full'
        >
          <button>
            <Link href={'/products/sandy-tie-dye-print-dress?variant=some-param'} >
              <Image
                src="/../public/dress1.webp"
                alt="Sandy Tie Dye Print Dress"
                width={300}
                height={200}
                priority
              />
              Sandy Tie Dye Print Dress
            </Link>
          </button>
        </Swiper>
      </div>
    </main >
  )
}
