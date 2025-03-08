// (00) 00000-0000
export const maskToPhoneNumber = (
  valueRaw?: string | number | null,
  emptySymbol: string = ""
): string => {
  if (!valueRaw) return emptySymbol;

  let valueFormatted = valueRaw.toString();
  valueFormatted = valueFormatted.replace(/\D/g, "");
  valueFormatted = valueFormatted.replace(/^(\d\d)(\d)/g, "($1) $2");

  if (valueFormatted.length === 0) return emptySymbol;

  // check digit 9
  if (valueFormatted.length > 13) {
    valueFormatted = valueFormatted.replace(/(\d{5})(\d)/, "$1-$2");
  } else {
    valueFormatted = valueFormatted.replace(/(\d{4})(\d)/, "$1-$2");
  }

  return valueFormatted;
};
