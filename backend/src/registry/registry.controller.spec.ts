import { Test, TestingModule } from '@nestjs/testing';
import { RegistryController } from './registry.controller';
import { RegistryService } from './registry.service';
import { Registry } from '@prisma/client';
import { PrismaService } from '../prisma.service';

describe('RegistryController', () => {
  let controller: RegistryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistryController],
      providers: [RegistryService, PrismaService],
    }).compile();

    controller = module.get<RegistryController>(RegistryController);
  });

  describe('getRegistries', () => {
    it('should return a Promise<Registry[]>', async () => {
      const result: Registry[] = [
        {
          id: '23423423kl42bnkh',
          userId: 'jl23nkl3jn2n3ç',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(controller, 'getRegistries').mockResolvedValue(result);

      await expect(controller.getRegistries()).resolves.toEqual(result);
    });
  });
});
