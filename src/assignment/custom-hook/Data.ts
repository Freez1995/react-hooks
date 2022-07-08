export interface ToppingData {
  id: number;
  name: string;
  price: number;
}

export interface PizzaSizeData {
  id: number;
  size: string;
  price: number;
}

export interface DiscountData {
  id: number;
  discountCode: string;
  discountValue: number;
}

export const toppingData: ToppingData[] = [
  {
    id: 0,
    name: 'Chilli',
    price: 1,
  },
  {
    id: 1,
    name: 'Shrooms',
    price: 1,
  },
  {
    id: 2,
    name: 'Egg',
    price: 1.5,
  },
];

export const pizzaSizeData: PizzaSizeData[] = [
  {
    id: 0,
    size: 'S',
    price: 10,
  },
  {
    id: 1,
    size: 'M',
    price: 15,
  },
  {
    id: 2,
    size: 'L',
    price: 20,
  },
];

export const discountData: DiscountData[] = [
  {
    id: 0,
    discountCode: 'discount10',
    discountValue: 0.1,
  },
  {
    id: 1,
    discountCode: 'discount50',
    discountValue: 0.5,
  },
];
