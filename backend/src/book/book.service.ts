import { Injectable } from '@nestjs/common';
import { Prisma, Book } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    bookWhereUniqueInput: Prisma.BookWhereUniqueInput,
  ): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: bookWhereUniqueInput,
    });
  }

  async books(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.BookWhereUniqueInput;
      where?: Prisma.BookWhereInput;
      orderBy?: Prisma.BookOrderByWithRelationInput;
    } = {},
  ): Promise<Book[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.book.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prisma.book.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<Book> {
    const { where, data } = params;
    return this.prisma.book.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.BookWhereUniqueInput): Promise<Book> {
    return this.prisma.book.delete({
      where,
    });
  }
}
