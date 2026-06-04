import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [cart, setCart] = useState([])

  async function fetchProducts() {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) {
        throw new Error('Failed to load products')
      }
      const data = await response.json()
      setProducts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Load products once when the component mounts.
  useEffect(function () {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts()
  }, [])

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const handleClearCart = () => {
    setCart([])
  }

  return (
    <div className='app'>
      <Header title='Product Store' subtitle='Practice React with a simple cart' />

      {loading && <p>Loading products...</p>}
      {error && <p className='error'>{error}</p>}

      <div className='products-list'>
        {products.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id)
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              isInCart={isInCart}
              onAddToCart={() => handleAddToCart(product)}
            />
          )
        })}
      </div>

      <Cart
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  )
}

export default App
