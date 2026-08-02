import { Injectable } from '@nestjs/common';
import { CreateAvailabilitySlotDto } from './dto/create-availability-slot.dto';
import { UpdateAvailabilitySlotDto } from './dto/update-availability-slot.dto';

@Injectable()
export class AvailabilityService {
  findAll() {
    return [];
  }

  findOne(id: string) {
    return { id };
  }

  create(dto: CreateAvailabilitySlotDto) {
    return dto;
  }

  update(id: string, dto: UpdateAvailabilitySlotDto) {
    return { id, ...dto };
  }

  remove(id: string) {
    return { id, deleted: true };
  }
}
