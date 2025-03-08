// 0px
export const maskToPixel = (
  valueRaw: number | null,
  emptySymbol: string = ""
) => {
  if (!valueRaw && valueRaw !== 0) return emptySymbol;
  if (isNaN(valueRaw)) return emptySymbol;
  if (typeof valueRaw !== "number") return emptySymbol;

  const valueFormatted = `${valueRaw.toFixed(0)}px`;

  return valueFormatted;
};
