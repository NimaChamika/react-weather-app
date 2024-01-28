import { fireEvent, render, screen } from "@testing-library/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ThemeMode } from "../../../Utils/Data";
import { getThemeData } from "../../../App";
import SearchBar from "..";

let mockClickFn;
let mockThemeBtnClickFn;
let mockTheme;

beforeAll(() => {
  mockTheme = createTheme(getThemeData(ThemeMode.DARK));
});

beforeEach(() => {
  mockClickFn = jest.fn();
  mockThemeBtnClickFn = jest.fn();

  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <ThemeProvider theme={mockTheme}>
      <CssBaseline>
        <SearchBar
          searchBtnClickFn={mockClickFn}
          changeThemeFn={mockThemeBtnClickFn}
        />
      </CssBaseline>
    </ThemeProvider>,
  );
});

test("input init value should be empty", () => {
  const inputEl = screen.getByRole("textbox");
  expect(inputEl.value).toBe("");
});

test("input value change correctly", () => {
  const inputEl = screen.getByRole("textbox");
  fireEvent.change(inputEl, { target: { value: "colombo" } });

  expect(inputEl.value).toBe("colombo");
});

test("search btn click", () => {
  const searchBtnEl = screen.getByRole("button", { name: "searchBtn" });
  fireEvent.click(searchBtnEl);

  expect(mockClickFn).toHaveBeenCalled();
});

test("theme buttons should render with proper colors", () => {
  const lightThemeBtnEl = screen.getByRole("button", { name: "lightThemeBtn" });
  const darkThemeBtnEl = screen.getByRole("button", { name: "darkThemeBtn" });

  // INITIAL THEME IS SET TO DARK MODE
  expect(lightThemeBtnEl).toHaveStyle({
    color: mockTheme.palette.background.lightThemeBtn,
  });

  expect(darkThemeBtnEl).toHaveStyle({
    color: mockTheme.palette.background.darkThemeBtn,
  });
});

test("theme buttons click should work properly", () => {
  const lightThemeBtnEl = screen.getByRole("button", { name: "lightThemeBtn" });
  const darkThemeBtnEl = screen.getByRole("button", { name: "darkThemeBtn" });

  // INITIAL THEME IS SET TO DARK MODE
  fireEvent.click(lightThemeBtnEl);
  expect(mockThemeBtnClickFn).toHaveBeenCalled();

  fireEvent.click(darkThemeBtnEl);
  expect(mockThemeBtnClickFn).toHaveBeenCalled();
});
