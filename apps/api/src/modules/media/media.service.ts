import { Injectable } from '@nestjs/common';
import { CreateMediaAssetDto } from './dto/create-media-asset.dto';
import { UpdateMediaAssetDto } from './dto/update-media-asset.dto';

@Injectable()
export class MediaService {
  findAll() {
    return [];
  }

  findOne(id: string) {
    return { id };
  }

  create(dto: CreateMediaAssetDto) {
    return dto;
  }

  update(id: string, dto: UpdateMediaAssetDto) {
    return { id, ...dto };
  }

  remove(id: string) {
    return { id, deleted: true };
  }
}
