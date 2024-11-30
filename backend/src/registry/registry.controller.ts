import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Registry } from '@prisma/client';
import { RegistryService } from './registry.service';
import { CreateRegistryDto } from './dto/create-registry.dto';
import { UpdateRegistryDto } from './dto/update-registry.dto';

@Controller('registry')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  @Post()
  async create(
    @Body() createRegistryDto: CreateRegistryDto,
  ): Promise<Registry> {
    return await this.registryService.create({
      user: { connect: { id: createRegistryDto.userId } },
    });
  }

  @Get()
  async getRegistries(): Promise<Registry[]> {
    return await this.registryService.registries();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Registry> {
    return await this.registryService.findOne({ id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRegistryDto: UpdateRegistryDto,
  ): Promise<Registry> {
    return await this.registryService.update({
      where: { id },
      data: {
        user: updateRegistryDto.userId
          ? { connect: { id: updateRegistryDto.userId } }
          : undefined,
        book: updateRegistryDto.bookId
          ? { connect: { id: updateRegistryDto.bookId } }
          : undefined,
      },
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Registry> {
    return this.registryService.remove({ id });
  }
}
