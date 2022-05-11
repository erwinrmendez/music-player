// clamp value to be 0 >= x >= maxValue
export const clamp = (value: number, max: number) => {
  return Math.max(0, Math.min(value, max));
};
