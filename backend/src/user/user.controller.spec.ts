import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  describe('getUsers', () => {
    it('should return a Promise<User[]>', async () => {
      const result: User[] = [
        {
          id: '23423423kl42bnkh',
          name: 'John Doe',
          email: 'test@domain.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(controller, 'getUsers').mockResolvedValue(result);

      await expect(controller.getUsers()).resolves.toEqual(result);
    });
  });
});
