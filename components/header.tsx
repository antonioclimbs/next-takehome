'use client';

import Link from 'next/link';
import Image from 'next/image';
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

      <section className=''>
        {/* {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className=""
            >
              <span className={styles.paths}>
                {name}
              </span>
            </Link>
          );
        })} */}
      </section>
    </nav >
  );
}