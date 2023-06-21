import { useState } from 'react';
import styles from '@/styles/Home.module.css'

export default function Details({ props }) {
  const { product, price, size, details } = props;
  const productName = product?.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '1X', '2X', '3X'];

  const [activeButton, setActiveButton] = useState('M');

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };


  let i = 0;
  const buttonSizes: JSX.Element[] = sizes.map((size) => {
    i++
    return (
      <button className={styles.buttonSizes} key={i}>
        {size}
      </button>
    )
  })
  return (
    <div className={styles.details}>
      <h1>{productName}</h1>
      <p>${price}</p>
      <h3>Size</h3>
      <div className=''>
        {buttonSizes}
      </div>
      <h3>Product Details</h3>
      <p>{details}</p>
    </div>
  )
}