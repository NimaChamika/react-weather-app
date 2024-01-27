import { getCityDateNTime } from "../UtilFns";

test("getCityDateNTime fn should word properly", () => {
  const value = "2024-01-27 18:45";
  const result = getCityDateNTime(value);
  expect(result).toEqual("27, Jan at 2024, 06:45 PM");
});
