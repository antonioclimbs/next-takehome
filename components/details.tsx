import { useState } from 'react';
import styles from '@/styles/Home.module.css'
import ExpandableButton from './expandableButton';

const expandableButtonProps = [
  {
    label: 'MODEL',
    info: [`Casey is 5'11" and is wearing a size S`,]
  },
  {
    label: 'MATERIAL',
    info: [`95% Polyester 5% Spandex`,]
  },
  {
    label: 'SHIPPING & RETURNS',
    info: ['STANDARD SHIPPING', 'Within the US, the estimated transit period is...', 'EXPRESS SHIPPING', 'Within the US, the estimated transit period is...', 'FREE RETURNS & EXCHANGES', 'You can return or exchange...'],
  },
  {
    label: 'SIZE GUIDE',
    info: [`Sizes go here (probably as an img)`,]
  }];

export default function Details({ props }) {
  const { product, price, size, details } = props;
  const productName = product?.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '1X', '2X', '3X'];

  const [quantity, setQuantity] = useState(1);
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (size) => {
    // console.log('size', size)
    setActiveButton(size)
  };

  let i = 0;
  const buttonSizes: JSX.Element[] = sizes.map((size, index) => {
    return (
      <button className={`${styles.buttonSizes} ${activeButton === size ? styles.active : ''}`} onClick={() => handleClick(size)} key={size} >
        {size}
      </button >
    )
  })

  let j = 0;
  const expButtons: JSX.Element[] = expandableButtonProps.map((props) => {
    j++
    return (
      <ExpandableButton props={props} key={j} />
    )
  })

  return (
    <div className={styles.details}>
      <section className={styles.productName}>
        <h1 className='mb-5'>{productName}</h1>
        <span className='mb-5'>${price.toFixed(2)}</span>
      </section>

      <div className=''>
        <p className='mb-5'>Size</p>
        <div className={styles.allButtons}>
          {buttonSizes}
        </div>
      </div>

      <div className={styles.purchase}>
        <div className='border border-black p-0 rounded-3xl flex justify-evenly'>
          <button className='' onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}>
            -
          </button>
          <button className='w-1/2 text-md'>
            {quantity}
          </button>
          <button className='' onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>
        <button className='border w-2/3 rounded-3xl p-1 justify-end bg-black text-white'>
          ADD TO CART
        </button>
      </div>
      <button className='border w-full rounded-3xl mt-2 p-1 bg-violet-600 text-white'>BUY WITH shopPay</button>

      <div className='text-left'>
        <h2>Product Details</h2>
        <p>{details}</p>
      </div>
      <br></br>
      {expButtons}
    </div>
  )
}