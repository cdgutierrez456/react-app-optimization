import { JSX } from "react"

import { Props as ProductCardProps } from "../components/ProductCard"
import { ProductButtonsProps } from "../components/ProductButtons"
import { ProductImageProps } from "../components/ProductImage"
import { ProductTitleProps } from "../components/ProductTitle"

export interface Product {
  id: string
  img?: string
  title: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (x: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Image: (Props: ProductImageProps) => JSX.Element
  Title: (Props: ProductTitleProps) => JSX.Element
  Buttons: (Props: ProductButtonsProps) => JSX.Element
}