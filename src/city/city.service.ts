import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/request';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './schema/city.schema';
import { Model } from 'mongoose';

@Injectable()
export class CityService {
  constructor(@InjectModel(City.name) private cityModel: Model<City>) {}

  async addCity(createCity: CreateCityDto): Promise<any> {
    const city = await this.cityModel.create({
      ...createCity,
      _id: createCity.id,
    });

    return city;
  }
}
