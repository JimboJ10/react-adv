import { ProductButtons } from "../components/ProductButtons"
import { ProductCard, ProductCardHoc } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage"
import { ProductTile } from "../components/ProductTitle"
import '../styles/custom-styles.css'

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
          <ProductCard product={product} className="bg-dark" >
            <ProductCardHoc.Image className="custom-image" />
            <ProductCardHoc.Title className="text-white" />
            <ProductCardHoc.Buttons className="custom-buttons" />
          </ProductCard>

          <ProductCard product={product} className="bg-dark" >
            <ProductImage className="custom-image" />
            <ProductTile className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>

          <ProductCard product={product}
            style={{
              backgroundColor: 'seagreen',
            }}
          >
            <ProductImage
              style={{
                width: 200,
                objectFit: 'cover',
                borderRadius: 100,
                margin: '10px 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                border: '1px solid black',
                boxShadow: '0px 10px 10px rgba(0,0,0,0.2)',
                marginBottom: 10,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                padding: 10,
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                
              }}
            />
            <ProductTile style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }} />
            <ProductButtons style={{
              backgroundColor: 'white',
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              padding: 10,
              borderRadius: 10,
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0px 10px 10px rgba(0,0,0,0.2)',
              marginBottom: 10,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              margin: '10px 20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
            }} />
          </ProductCard>
        </div>
        
    </div>
  )
}
