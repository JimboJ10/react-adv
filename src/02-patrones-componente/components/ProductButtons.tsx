import { CSSProperties, useContext } from "react";
import styles  from '../styles/styles.module.css';
import { ProductContext } from "../context/ProductContext";

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({className, style}:Props) => {
    const {counter, incraseBy} = useContext(ProductContext);
    return (
        <div className={ `${styles.buttonsContainer} ${className}` } style={style}>
            <button 
                className={styles.buttonMinus}
                onClick={() => incraseBy(-1)}
            >
                -
            </button>
            <div className={styles.countLabel}>
                {counter}
            </div>
            <button 
                className={styles.buttonAdd}
                onClick={() => incraseBy(1)}
            >
                +
            </button>

        </div>
    )
}