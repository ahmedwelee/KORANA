export const KORANOW_COLORS = {
  electricGreen: '#32D74B',
  deepBlue: '#007AFF',
  darkNavy: '#0A1128',
  slate: '#111827',
  glass: 'rgba(255,255,255,0.08)',
  white: '#FFFFFF',
} as const;

export const KORANOW_GRADIENTS = {
  primary: [KORANOW_COLORS.deepBlue, KORANOW_COLORS.electricGreen] as const,
} as const;
