// R$ 0,00
export const maskFixToMoney = (
  valueRaw?: string | number | null,
  prefix: string = "",
  fromSeparatedCents: "commam" | "dot" = "dot",
  toSeparetadCents: "commam" | "dot" = "commam",
  emptySymbol: string = ""
): string => {
  if (!valueRaw && valueRaw !== 0) return emptySymbol;

  let valueFormatted: string | number = valueRaw.toString();

  // threating format in
  if (fromSeparatedCents === "commam") {
    valueFormatted = valueFormatted.replace(/\./g, "");
    valueFormatted = valueFormatted.replace(",", ".");
  }
  if (fromSeparatedCents === "dot") {
    valueFormatted = valueFormatted.replace(/,/g, "");
  }

  // converting into number
  valueFormatted = parseFloat(valueFormatted);

  if (isNaN(valueFormatted)) return emptySymbol;

  valueFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    notation: "standard",
  })
    .format(valueFormatted)
    .replace(/(\s|\u00A0)+/g, "") // fix for Intl currencies
    .replace("R$", prefix + " ")
    .trim();

  valueFormatted = valueFormatted.toString();

  // threating format out
  if (toSeparetadCents === "dot") {
    valueFormatted = valueFormatted.replace(",", "_");
    valueFormatted = valueFormatted.replace(/\./g, ",");
    valueFormatted = valueFormatted.replace("_", ".");
  }

  return valueFormatted;
};
