function Cart({ cart, onRemoveFromCart, onClearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className='cart'>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className='cart-item' key={item.id}>
              <span>
                {item.title} — {item.price}€
              </span>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <p className='cart-total'>
            <strong>Total: {total.toFixed(2)}€</strong>
          </p>

          <button onClick={onClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  )
}

export default Cart
