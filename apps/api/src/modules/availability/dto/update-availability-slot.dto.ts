import { PartialType } from '@nestjs/swagger';
import { CreateAvailability-slotDto } from './create-availability-slot.dto';

export class UpdateAvailability-slotDto extends PartialType(CreateAvailability-slotDto) {}
