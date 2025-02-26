import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { RegistryController } from './registry.controller';
import { RegistryService } from './registry.service';

@Module({
  controllers: [RegistryController],
  providers: [RegistryService, PrismaService],
})
export class RegistryModule {}
