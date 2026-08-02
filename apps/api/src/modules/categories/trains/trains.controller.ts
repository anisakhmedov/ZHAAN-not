import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TrainsService } from './trains.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Controller('trains')
export class TrainsController {
  constructor(private readonly trainService: TrainsService) {}

  @Get()
  findAll() {
    return this.trainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateTrainDto) {
    return this.trainService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTrainDto) {
    return this.trainService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainService.remove(id);
  }
}
