export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  count?: number | any;
}

export interface IpreProducts {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}