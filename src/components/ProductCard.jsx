function ProductCard({ title, price, image, onAddToCart, isInCart }) {
  return (
    <div className='product-card'>
      <img className='product-image' src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}€</p>
      <button disabled={isInCart} onClick={onAddToCart}>
        {isInCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard
