import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { FriendsModule } from './modules/friends/friends.module';
import { TeamsModule } from './modules/teams/teams.module';
import { ChallengesModule } from './modules/challenges/challenges.module';
import { MatchRoomsModule } from './modules/match-rooms/match-rooms.module';
import { RatingsModule } from './modules/ratings/ratings.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ReportsModule } from './modules/reports/reports.module';
import { RealtimeModule } from './modules/realtime/realtime.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    PrismaModule,
    AuthModule,
    ProfilesModule,
    FriendsModule,
    TeamsModule,
    ChallengesModule,
    MatchRoomsModule,
    RatingsModule,
    NotificationsModule,
    ReportsModule,
    RealtimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
