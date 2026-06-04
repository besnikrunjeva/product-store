function Cart({ cart, onRemoveFromCart, onClearCart }) {
  if (cart.length === 0) {
    return null;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <span>
            {item.title} — {item.price}€
          </span>
          <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <p className="cart-total">
        <strong>Total: {total.toFixed(2)}€</strong>
      </p>

      <button onClick={onClearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
