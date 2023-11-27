//tells what to expect from product
export interface Product {
  id: number
  name: string
  description: string
  price: number
  pictureUrl: string
  type?: string
  brand: string
  quantityInStock?: number
}