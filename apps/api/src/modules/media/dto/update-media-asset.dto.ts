import { PartialType } from '@nestjs/swagger';
import { CreateMedia-assetDto } from './create-media-asset.dto';

export class UpdateMedia-assetDto extends PartialType(CreateMedia-assetDto) {}
