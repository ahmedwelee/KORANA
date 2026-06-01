import { MatchFormat, SkillLevel } from '@prisma/client';

const scoreSkill = {
  BEGINNER: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
  PRO: 4,
} as const;

export function challengeRecommendationScore(input: {
  userSkill: SkillLevel;
  challengeSkill: SkillLevel;
  userRating: number;
  challengeTeamRating: number;
  preferredFormat?: MatchFormat;
  challengeFormat: MatchFormat;
}) {
  const skillGap = Math.abs(
    scoreSkill[input.userSkill] - scoreSkill[input.challengeSkill],
  );
  const ratingGap = Math.abs(input.userRating - input.challengeTeamRating);
  const formatBonus =
    input.preferredFormat && input.preferredFormat === input.challengeFormat
      ? 2
      : 0;

  return Math.max(0, 10 - skillGap * 2 - ratingGap + formatBonus);
}
