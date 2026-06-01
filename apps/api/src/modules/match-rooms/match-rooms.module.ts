import { Module } from '@nestjs/common';
import { MatchRoomsService } from './match-rooms.service';
import { MatchRoomsController } from './match-rooms.controller';

@Module({
  providers: [MatchRoomsService],
  controllers: [MatchRoomsController],
  exports: [MatchRoomsService],
})
export class MatchRoomsModule {}
