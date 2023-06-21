'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GoSearch } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.mainheader}> */}
      <GoSearch size={20} className='px-0' onClick={() => console.log('clicked')} />
      <button className='mx-4' onClick={() => console.log('clicked')} aria-label="Cart">
        <RxHamburgerMenu size={20} />
      </button>
      <Link href='https://www.finesse.us' className='justify-self-center'>
        <Image
          src="/../public/FINESSE-Logo.png"
          alt="FINESSE Logo"
          className={styles.vercelLogo}
          width={115}
          height={50}
          priority
        />
      </Link>
      {/* </div> */}

      {/* <section className='space-x-5'> */}
      <button className='mx-4' onClick={() => console.log('clicked')} aria-label="Cart">
        CART
      </button>
      {/* </section> */}
    </nav >
  );
}