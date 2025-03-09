// 0000
export const maskToOnlyNumbers = (
  valueRaw?: number | string | null,
  emptySymbol: string = ""
): string => {
  if (!valueRaw) return emptySymbol;

  let valueFormatted = valueRaw.toString();
  valueFormatted = valueFormatted.replace(/\D/g, "");
  valueFormatted = valueFormatted.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return valueFormatted;
};

// 000000
export const maskToRawNumber = (
  valueRaw?: number | string | null,
  emptySymbol: string = ""
): string => {
  if (!valueRaw) return emptySymbol;

  let valueFormatted = valueRaw.toString();
  valueFormatted = valueFormatted.replace(/\D/g, "");

  return valueFormatted;
};

// 0.00
export const maskFixToPercentage = (
  valueRaw?: string | number | null,
  decimals: number = 2,
  isMathematical = false,
  prefix = "",
  emptySymbol: string = "",
  toMathematical = false
) => {
  if (!valueRaw) return emptySymbol;

  let valueFormatted: number | string = valueRaw;
  valueFormatted =
    typeof valueFormatted === "string"
      ? parseFloat(valueFormatted)
      : valueFormatted;

  if (isNaN(valueFormatted)) return emptySymbol;

  // check in format percentage
  const valueFormattedIn = isMathematical
    ? valueFormatted * 100
    : valueFormatted;

  // check out format percentage
  const valueFormattedOut = toMathematical
    ? valueFormattedIn / 100
    : valueFormattedIn;

  const valueNormalized = `${(valueFormattedOut * 1).toFixed(
    decimals
  )}${prefix}`;

  return valueNormalized;
};

//
export const maskToSelic = (selicNumber: number) => {
  const taxa_diaria = selicNumber / 100;
  const taxa_anual = (1 + taxa_diaria) ** 254 - 1;
  const taxa_anual_percentual = taxa_anual * 100;

  return maskFixToPercentage(taxa_anual_percentual, 3, false, "%");
};
