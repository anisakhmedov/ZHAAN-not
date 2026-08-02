import { IsIn, IsOptional, IsString } from 'class-validator';

export class SearchQueryDto {
  @IsOptional()
  @IsString()
  q?: string;

  @IsOptional()
  @IsIn(['hotels', 'salons', 'rentals', 'flights', 'trains'])
  category?: 'hotels' | 'salons' | 'rentals' | 'flights' | 'trains';

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  dateFrom?: string;

  @IsOptional()
  @IsString()
  dateTo?: string;
}
