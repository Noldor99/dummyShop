import { IProduct } from "../models/models";



export const calcTotalPrice = (items: IProduct[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
