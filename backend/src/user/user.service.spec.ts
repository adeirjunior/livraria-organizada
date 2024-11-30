import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  const result: User[] = [
    {
      id: '23423423kl42bnkh',
      name: 'John Doe',
      email: 'test@domain.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  describe('getUsers', () => {
    it('should return a Promise<User[]>', async () => {
      jest.spyOn(service, 'users').mockResolvedValue(result);

      await expect(service.users()).resolves.toEqual(result);
    });
  });
});
