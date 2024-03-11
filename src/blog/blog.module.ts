import { Module } from '@nestjs/common';
import { BlogController } from './controllers/blog.controller';
import { BlogService } from './services/blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './entities/blog.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BlogPost])],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
