import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { SalonsService } from './salons.service';
import { CreateSalonDto } from './dto/create-salon.dto';
import { UpdateSalonDto } from './dto/update-salon.dto';

@Controller('salons')
export class SalonsController {
  constructor(private readonly salonService: SalonsService) {}

  @Get()
  findAll() {
    return this.salonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salonService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateSalonDto) {
    return this.salonService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSalonDto) {
    return this.salonService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salonService.remove(id);
  }
}
