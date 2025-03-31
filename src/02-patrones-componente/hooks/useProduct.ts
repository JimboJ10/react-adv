import { useState } from "react";

export const useProduct = () => {
    
    const [counter, setCounter] = useState(0);

    const incraseBy = (value:number) => {
        setCounter((prev) => {
            if (prev + value < 0) return 0;
            return prev + value;
        })
    }

  return {
    counter,
    incraseBy
  }
}
