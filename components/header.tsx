'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GoSearch } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx'
import styles from '../styles/Header.module.css'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/about': {
    name: 'About',
  },
  '/experience': {
    name: 'Experience',
  },
  '/contact': {
    name: 'Contact',
  },
};

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.mainheader}>
        <Link href='/' className='flex'>
          <Image
            src="/../public/FINESSE-Logo.png"
            alt="FINESSE Logo"
            className={styles.vercelLogo}
            width={115}
            height={50}
            priority
          />
        </Link>
      </div>

      <section className='space-x-5'>
        <GoSearch size={20} onClick={() => console.log('clicked')} />
        <button className='content-center' onClick={() => console.log('clicked')} aria-label="Cart">
          <RxHamburgerMenu size={20} />
        </button>
        <button onClick={() => console.log('clicked')} aria-label="Cart">
          CART
        </button>
      </section>
    </nav >
  );
}