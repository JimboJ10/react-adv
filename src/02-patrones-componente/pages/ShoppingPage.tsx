import { ProductButtons } from "../components/ProductButtons"
import { ProductCard, ProductCardHoc } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage"
import { ProductTile } from "../components/ProductTitle"

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
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
          <ProductCard product={product} >
            <ProductCardHoc.Image />
            <ProductCardHoc.Title title="hola" />
            <ProductCardHoc.Buttons />
          </ProductCard>

          <ProductCard product={product} >
            <ProductImage />
            <ProductTile />
            <ProductButtons />
          </ProductCard>
        </div>
        
    </div>
  )
}
