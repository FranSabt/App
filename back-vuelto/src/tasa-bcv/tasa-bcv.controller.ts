import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasaBcvService } from './tasa-bcv.service';

@Controller('tasa-bcv')
export class TasaBcvController {
  constructor(private readonly tasaBcvServices: TasaBcvService) {}

  @Get()
  getAllTasas() {
    return this.tasaBcvServices.GetAllTasa();
  }

  @Post()
  createTasa(@Body() data: any) {
    return this.tasaBcvServices.CreateTasa(data);
  }

  @Get('last-tasa')
  getLastTasa() {
    return this.tasaBcvServices.GetTasaLast();
  }
}
