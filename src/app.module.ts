import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvertorModule } from './convertor/convertor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27018/convertor'),
    ConvertorModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
