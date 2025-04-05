import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product,
  onChange?: ( args:onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({onChange, product, value = 0}:useProductArgs) => {
    
  const [counter, setCounter] = useState(value);

  const isController = useRef(!!onChange);

  const incraseBy = (value:number) => {

    if (isController.current) {
      const newValue = Math.max(counter + value, 0);
      return onChange!({count: newValue, product});
    }

    const newValue = Math.max(counter + value, 0);
    setCounter( newValue);

    onChange && onChange({count: newValue, product});
        
  }

  useEffect(() => {
    setCounter(value);
  }, [value])

  return {
    counter,
    incraseBy
  }
}
