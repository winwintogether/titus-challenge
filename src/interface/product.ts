export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  discount?: number;
  total?: number;
}
