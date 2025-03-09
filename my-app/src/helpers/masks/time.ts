export const maskToDate = (
  valueRaw?: string | number | null,
  emptySymbol: string = ""
) => {
  if (!valueRaw) return emptySymbol;

  let valueFormatted = valueRaw.toString();
  valueFormatted = valueFormatted.replace(/\D/g, "");
  valueFormatted = valueFormatted.replace(/(\d{2})(\d)/, "$1/$2");
  valueFormatted = valueFormatted.replace(/(\d{2})(\d)/, "$1/$2");

  return valueFormatted;
};

export const maskFixToDate = (
  valueRaw?: string | number | null,
  emptySymbol: string = ""
) => {
  if (!valueRaw) return emptySymbol;

  const valueFormatted = valueRaw.toString();
  const parts = valueFormatted.split("/");
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  const formattedDDMMYYYY = `${day}/${month}/${year}`;
  const formattedMMDDYYYY = `${month}/${day}/${year}`;

  const dateObject = new Date(formattedMMDDYYYY);

  const isValidDate =
    dateObject instanceof Date &&
    !isNaN(dateObject.getTime()) &&
    dateObject.getFullYear() === parseInt(year, 10) &&
    dateObject.getMonth() + 1 === parseInt(month, 10) &&
    dateObject.getDate() === parseInt(day, 10);

  if (!isValidDate) {
    return emptySymbol;
  }

  return formattedDDMMYYYY;
};
