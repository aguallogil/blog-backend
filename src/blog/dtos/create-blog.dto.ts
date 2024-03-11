import { ApiProperty } from "@nestjs/swagger";

export class CreateBlogDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    author: string;

    @ApiProperty()
    content: string;
  }