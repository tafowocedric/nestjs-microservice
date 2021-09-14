import { Product } from '.prisma/client';

export class ProductEntity implements Product {
  id: string;
  title: string;
  image: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}
