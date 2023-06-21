import { useState } from 'react';
import styles from '@/styles/Home.module.css'

export default function Details({ props }) {
  const { product, price, size, details } = props;
  const productName = product?.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '1X', '2X', '3X'];
  let quantity = 1;

  const [activeButton, setActiveButton] = useState(styles.buttonSizes);

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
      <div className={styles.productName}>
        <h1>{productName}</h1>
        <span className=''>${price.toFixed(2)}</span>
      </div>

      <div className=''>
        <p>Size</p>
        <div className={styles.allButtons}>
          {buttonSizes}
        </div>
      </div>

      {/* <div className='w-full flex justify-between'> */}
      <div className={styles.purchase}>
        <div className='border border-black w-1/4 rounded-lg p-1 flex justify-evenly'>
          <button className=''>
            -
          </button>
          <button className='border-x-2 border-black w-1/2'>
            {quantity}
          </button>
          <button className=''>
            +
          </button>
        </div>
        <button className='border w-2/3 rounded-lg p-1 justify-end bg-black text-white'>ADD TO CART</button>
      </div>
      <button className='border w-full rounded-lg p-1'>BUY WITH shopPay</button>

      <div className='text-left'>
        <h2>Product Details</h2>
        <p>{details}</p>
      </div>
    </div>
  )
}