import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    return this.prisma.product.create({ data: createProductDto });
  }

  findAll(): Promise<ProductEntity[]> {
    return this.prisma.product.findMany();
  }

  async findOne(id: string): Promise<ProductEntity> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException();

    return product;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException();

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException();

    await this.prisma.product.delete({
      where: { id },
    });

    return [];
  }
}
