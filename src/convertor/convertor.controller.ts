import { Controller, Post, Get } from '@nestjs/common';
import { ConvertorService } from './convertor.service';

@Controller('convertor')
export class ConvertorController {
  constructor(private readonly convertorService: ConvertorService) {}
  @Get('city')
  async convertCity() {
    return await this.convertorService.convertCity();
  }
}
