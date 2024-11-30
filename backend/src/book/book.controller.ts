import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from '@prisma/client';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return await this.bookService.create(createBookDto);
  }

  @Get()
  async getBooks(): Promise<Book[]> {
    return await this.bookService.books();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return await this.bookService.findOne({ id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return await this.bookService.update({
      where: { id },
      data: updateBookDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Book> {
    return this.bookService.remove({ id });
  }
}
