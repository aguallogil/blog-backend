import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from 'class-validator';

export class UserDTO{
    @ApiProperty()
    @IsNotEmpty({message:'el $property no puede ser vacio'})
    @IsString()
    username: string;

    @ApiProperty()
    @IsNotEmpty({message:'el $property no puede ser vacio'})
    @IsString()
    password: string;
    
    token?:string;

}