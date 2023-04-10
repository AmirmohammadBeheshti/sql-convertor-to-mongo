import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './schema/city.schema';
import { CityService } from './city.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: City.name, useFactory: () => CitySchema },
    ]),
  ],
  providers: [CityService],
  exports: [CityService],
})
export class CityModule {}
