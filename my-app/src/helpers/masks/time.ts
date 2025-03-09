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
  emptySymbol: string = "",
  formatFrom: "YYYY-MM-DD" | "DD/MM/YYYY" | "MM/DD/YYYY" = "DD/MM/YYYY",
  formatTo: "YYYY-MM-DD" | "DD/MM/YYYY" | "MM/DD/YYYY" = "DD/MM/YYYY"
) => {
  if (!valueRaw) return emptySymbol;

  let valueFormatted = valueRaw.toString();

  let day = "";
  let month = "";
  let year = "";

  // in
  switch (formatFrom) {
    case "DD/MM/YYYY":
      day = valueFormatted.split("/")[0];
      month = valueFormatted.split("/")[1];
      year = valueFormatted.split("/")[2];
      break;
    case "MM/DD/YYYY":
      month = valueFormatted.split("/")[0];
      day = valueFormatted.split("/")[1];
      year = valueFormatted.split("/")[2];
      break;
    case "YYYY-MM-DD":
      year = valueFormatted.split("-")[0];
      month = valueFormatted.split("-")[1];
      day = valueFormatted.split("-")[2];
      break;
    default:
      day = "";
      month = "";
      year = "";
      break;
  }

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

  // out
  switch (formatTo) {
    case "DD/MM/YYYY":
      valueFormatted = `${day}/${month}/${year}`;
      break;
    case "MM/DD/YYYY":
      valueFormatted = `${month}/${day}/${year}`;
      break;
    case "YYYY-MM-DD":
      valueFormatted = `${year}-${month}-${day}`;
      break;
    default:
      valueFormatted = `${day}/${month}/${year}`;
      break;
  }

  return valueFormatted;
};
