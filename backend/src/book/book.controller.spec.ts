import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from '@prisma/client';

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService, PrismaService],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  describe('getBooks', () => {
    it('should return a Promise<Book[]>', async () => {
      const result: Book[] = [
        {
          id: '23423423kl42bnkh',
          title: 'John Doe',
          author: 'test@domain.com',
          avaliable: true,
          nfcCode: '1213-casDa-s4cAA0bc',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(controller, 'getBooks').mockResolvedValue(result);

      await expect(controller.getBooks()).resolves.toEqual(result);
    });
  });
});
