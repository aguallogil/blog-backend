import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ormconfig from './config/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal: true,
    load: [ormconfig],
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: ormconfig,
  }),
    UserModule,
    AuthModule,
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
