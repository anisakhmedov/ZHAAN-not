import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { CreateAvailability-slotDto } from './dto/create-availability-slot.dto';
import { UpdateAvailability-slotDto } from './dto/update-availability-slot.dto';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availability-slotService: AvailabilityService) {}

  @Get()
  findAll() {
    return this.availability-slotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.availability-slotService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateAvailability-slotDto) {
    return this.availability-slotService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAvailability-slotDto) {
    return this.availability-slotService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.availability-slotService.remove(id);
  }
}
