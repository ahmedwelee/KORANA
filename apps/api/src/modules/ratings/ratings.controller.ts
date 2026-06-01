import { Body, Controller, Post } from '@nestjs/common';
import { RatingsService } from './ratings.service';

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post()
  create(
    @Body()
    body: {
      sourceTeamId: string;
      targetTeamId: string;
      challengeId: string;
      stars: number;
      fairPlay: number;
      punctuality: number;
      competitiveLevel: number;
      comment?: string;
      createdById: string;
    },
  ) {
    return this.ratingsService.create(body);
  }
}
