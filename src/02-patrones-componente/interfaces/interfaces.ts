import { ReactElement, JSX } from "react";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
    counter: number;
    incraseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHocProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Image: ({ img }: {img? : string }) => JSX.Element;
    Title: ({ title }: { title?: string;}) => JSX.Element;
    Buttons: () => JSX.Element;
}