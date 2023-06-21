export default function Details({ props }) {
  const { product, price, size, details } = props;
  return (
    <div>
      <h1>{product}</h1>
      <p>{price}</p>
      <button>{size}</button>
      <h3>Product Details</h3>
      <p>{details}</p>
    </div>
  )
}