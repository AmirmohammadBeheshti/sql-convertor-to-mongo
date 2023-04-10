import { Injectable } from '@nestjs/common';
import * as sql from 'mssql';
import { config } from './config';
import { CityService } from 'src/city/city.service';
import * as mongodb from 'mongodb';

@Injectable()
export class ConvertorService {
  constructor(private readonly cityService: CityService) {}

  async convertCity() {
    const query = `SELECT   '{ "id" : "' + tblCities.id +'",  "faName" : "' + tblCities.FaName +'" ,
    "image" : "' + tblCities.ImageName +'" ,  "displayOrder" : "' + CAST(tblCities.DisplayOrder AS varchar(20)) +'" , "isFeatured" : "' + Cast(tblCities.IsFeatured AS VARCHAR (20)) +'"  , "isEnabled" : "' + Cast(tblCities.IsEnabled AS VARCHAR (20)) +'" , "instagram" : "' + tblCities.Instagram +'" ,"province" : "' + tblCities.Province +'" , "code" : "'+ tblCities.Code +'" }' 
    FROM tblCities  ORDER BY tblCities.Id OFFSET 0 ROWS FETCH NEXT  251 ROWS ONLY
    ;`;
    const findSqlJob = await this.findSqlData(query);

    for await (const value of findSqlJob.recordsets[0]) {
      const rowItem = JSON.parse(value['']);

      await this.cityService.addCity({
        id: rowItem.id,
        faName: rowItem.faName,
        enName: rowItem.id,
        province: rowItem.province,
        code: rowItem.code,
      });
    }
    await sql.close();
    return true;
  }
  async findSqlData(query?: any) {
    const sqlPool = await sql.connect(config.sqlConnectionString);

    const tablesResult = await sqlPool.request().query(query);

    console.log('finish the sql data');
    return tablesResult;
  }
}
