import { MatchFormat, SkillLevel } from './enums';

export interface ChallengeRecommendationInput {
  cityId: string;
  skillLevel: SkillLevel;
  preferredFormat?: MatchFormat;
  teamRating?: number;
}

export interface TeamRatingPayload {
  fairPlay: number;
  punctuality: number;
  competitiveLevel: number;
  stars: number;
}
