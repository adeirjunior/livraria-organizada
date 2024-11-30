import { Injectable } from '@nestjs/common';
import { Registry, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RegistryService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    registryWhereUniqueInput: Prisma.RegistryWhereUniqueInput,
  ): Promise<Registry | null> {
    return this.prisma.registry.findUnique({
      where: registryWhereUniqueInput,
    });
  }

  async registries(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.RegistryWhereUniqueInput;
      where?: Prisma.RegistryWhereInput;
      orderBy?: Prisma.RegistryOrderByWithRelationInput;
    } = {},
  ): Promise<Registry[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.registry.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.RegistryCreateInput): Promise<Registry> {
    return this.prisma.registry.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.RegistryWhereUniqueInput;
    data: Prisma.RegistryUpdateInput;
  }): Promise<Registry> {
    const { where, data } = params;
    return this.prisma.registry.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.RegistryWhereUniqueInput): Promise<Registry> {
    return this.prisma.registry.delete({
      where,
    });
  }
}
