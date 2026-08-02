import { Injectable } from '@nestjs/common';
import { CreateMedia-assetDto } from './dto/create-media-asset.dto';
import { UpdateMedia-assetDto } from './dto/update-media-asset.dto';

@Injectable()
export class MediaService {
  findAll() {
    return [];
  }

  findOne(id: string) {
    return { id };
  }

  create(dto: CreateMedia-assetDto) {
    return dto;
  }

  update(id: string, dto: UpdateMedia-assetDto) {
    return { id, ...dto };
  }

  remove(id: string) {
    return { id, deleted: true };
  }
}
