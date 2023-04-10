import { Module } from '@nestjs/common';
import { ConvertorService } from './convertor.service';
import { CityModule } from 'src/city/city.module';
import { ConvertorController } from './convertor.controller';

@Module({
  imports: [CityModule],
  providers: [ConvertorService],
  controllers: [ConvertorController],
})
export class ConvertorModule {}
