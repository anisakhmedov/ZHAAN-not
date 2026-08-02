import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchQueryDto } from './dto/search-query.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  // Unified cross-category search, e.g. GET /search?q=paris&category=hotels
  @Get()
  search(@Query() query: SearchQueryDto) {
    return this.searchService.search(query);
  }
}
