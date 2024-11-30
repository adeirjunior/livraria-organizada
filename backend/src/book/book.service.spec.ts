import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { Book } from '@prisma/client';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService, PrismaService],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  const result: Book[] = [
    {
      id: '23423423kl42bnkh',
      title: 'John Doe',
      author: 'John Doe',
      avaliable: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  describe('getBooks', () => {
    it('should return a Promise<Book[]>', async () => {
      jest.spyOn(service, 'books').mockResolvedValue(result);

      await expect(service.books()).resolves.toEqual(result);
    });
  });
});
