import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMedia-assetDto } from './dto/create-media-asset.dto';
import { UpdateMedia-assetDto } from './dto/update-media-asset.dto';

@Controller('media')
export class MediaController {
  constructor(private readonly media-assetService: MediaService) {}

  @Get()
  findAll() {
    return this.media-assetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.media-assetService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateMedia-assetDto) {
    return this.media-assetService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMedia-assetDto) {
    return this.media-assetService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.media-assetService.remove(id);
  }
}
