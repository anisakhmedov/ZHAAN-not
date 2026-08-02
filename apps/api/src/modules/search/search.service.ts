import { Injectable } from '@nestjs/common';
import { SearchQueryDto } from './dto/search-query.dto';

export type BookingCategory = 'hotels' | 'salons' | 'rentals' | 'flights' | 'trains';

@Injectable()
export class SearchService {
  search(_query: SearchQueryDto) {
    // TODO: fan out to the relevant category service(s) and merge/rank results
    return { results: [], total: 0 };
  }
}
