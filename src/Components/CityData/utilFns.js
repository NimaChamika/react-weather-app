const getCityDateNTime = (value) => {
  const dateData = new Date(value)
    .toLocaleString("default", {
      year: "numeric",
      month: "short",
      day: "2-digit",

      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h12",
    })
    .split(" ");

  return `${dateData[1]} ${dateData[0]} at ${dateData[2]} ${dateData[3]} ${dateData[4]}`;
};

export { getCityDateNTime };
