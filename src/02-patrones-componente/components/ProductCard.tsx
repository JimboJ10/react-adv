import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps, ProductCardHocProps } from '../interfaces/interfaces';
import styles  from '../styles/styles.module.css';
import { ProductImage } from './ProductImage';
import { ProductTile } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({ children, product }:ProductCardProps) => {
    const { counter, incraseBy } = useProduct();
  return (
    <Provider value={{product, counter, incraseBy}}>
        <div className={styles.productCard}>
            {children}
            {/* <ProductImage img={product.img} />
            <ProductTile title={product.title} />
            <ProductButtons counter={counter} incraseBy={incraseBy} /> */}
        </div>
    </Provider>
  )
}

export const ProductCardHoc:ProductCardHocProps = Object.assign(ProductCard, {
    Image: ProductImage,
    Title: ProductTile,
    Buttons: ProductButtons
});