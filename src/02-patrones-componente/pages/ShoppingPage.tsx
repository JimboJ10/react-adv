import { ProductButtons } from "../components/ProductButtons"
import { ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage"
import { ProductTile } from "../components/ProductTitle"
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products"

export const ShoppingPage = () => {

  const { handleProudctCountChange, shoppingCart  } = useShoppingCart()

  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {
            products.map(product => (
              <ProductCard
                key={product.id}
                product={product} 
                className="bg-dark"
                onChange={handleProudctCountChange}
                value={shoppingCart[product.id]?.count || 0}
              >
                <ProductImage className="custom-image" />
                <ProductTile className="text-white" />
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            ))
          }
          
        </div>

        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCard
                key={key}
                product={product} 
                className="bg-dark"
                style={{
                  width: '100px'
                }}
                value={product.count}
                onChange={handleProudctCountChange}
              >
                <ProductImage className="custom-image" />
                {/* <ProductTile className="text-white" /> */}
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            ))
          }
        </div>
    </div>
  )
}
