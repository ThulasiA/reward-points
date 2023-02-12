import { screen, render } from "@testing-library/react";
import Customer from "../Customer";
import mockFetch from "../../mocks/mockFetch";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("should render Customer table", async () => {
  render(<Customer />);
  expect(screen.getByText("Monthly Points")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Customer Points By Month/);
  expect(
    screen.queryByPlaceholderText(/Enter Month/i)
  ).toHaveAttribute("placeholder", "Enter Month");
});
