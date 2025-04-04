import { ReactElement, JSX, CSSProperties } from "react";
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export interface ProductContextProps {
    counter: number;
    incraseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHocProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Image: (Props:ProductImageProps) => JSX.Element;
    Title: (Props:ProductTitleProps) => JSX.Element;
    Buttons: (Props:ProductButtonsProps) => JSX.Element;
}