import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { BookService } from './book/book.service';
import { BookModule } from './book/book.module';
import { RegistryModule } from './registry/registry.module';
import { RegistryService } from './registry/registry.service';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, BookModule, RegistryModule],
  controllers: [AppController],
  providers: [UserService, BookService, PrismaService, RegistryService],
})
export class AppModule {}
