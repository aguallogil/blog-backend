import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogDto } from '../dtos/create-blog.dto';
import { SearchBlogDto } from '../dtos/search-blog.dto';
import { BlogPost } from '../entities/blog.entity';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogPost)
        private blogRepository: Repository<BlogPost>,
    ) { }

    async create(createBlogDto: CreateBlogDto): Promise<BlogPost> {
        const blogPost = this.blogRepository.create(createBlogDto);
        return this.blogRepository.save(blogPost);
    }

    async findAll(): Promise<BlogPost[]> {
        return this.blogRepository.find();
    }

    async findOne(id: number): Promise<BlogPost> {
        return this.blogRepository.findOneOrFail({ where: { id: id } });
    }

    // async search(searchParams: SearchBlogDto): Promise<BlogPost[]> {
        
    // }
}
