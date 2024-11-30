import { Test, TestingModule } from '@nestjs/testing';
import { RegistryService } from './registry.service';
import { PrismaService } from '../prisma.service';
import { Registry } from '@prisma/client';

describe('RegistryService', () => {
  let service: RegistryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistryService, PrismaService],
    }).compile();

    service = module.get<RegistryService>(RegistryService);
  });

  const result: Registry[] = [
    {
      id: '23423423kl42bnkh',
      userId: '1glygyil231',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  describe('registries', () => {
    it('should return a Promise<Registry[]>', async () => {
      jest.spyOn(service, 'registries').mockResolvedValue(result);

      await expect(service.registries()).resolves.toEqual(result);
    });
  });
});
