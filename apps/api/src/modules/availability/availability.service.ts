import { Injectable } from '@nestjs/common';
import { CreateAvailability-slotDto } from './dto/create-availability-slot.dto';
import { UpdateAvailability-slotDto } from './dto/update-availability-slot.dto';

@Injectable()
export class AvailabilityService {
  findAll() {
    return [];
  }

  findOne(id: string) {
    return { id };
  }

  create(dto: CreateAvailability-slotDto) {
    return dto;
  }

  update(id: string, dto: UpdateAvailability-slotDto) {
    return { id, ...dto };
  }

  remove(id: string) {
    return { id, deleted: true };
  }
}
