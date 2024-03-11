import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BlogService } from '../services/blog.service';
import { CreateBlogDto } from '../dtos/create-blog.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

}
