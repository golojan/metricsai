//Convert mondoDB date to month and year
export const toMonthYear = (date: Date) => {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "long" });
  const year = d.getFullYear();
  return `${month} ${year}`;
};

// Path: libs\toTime.ts
