import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import FilterByMonth from "../FilterByMonth";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("FilterByMonth", () => {
  render(
    <FilterByMonth
      labelText="For monthly points, type in full month"
      placeHolderText="december"
    />
  );
  expect(
    screen.getByText("For monthly points, type in full month")
  ).toBeInTheDocument();
  expect(screen.getByPlaceholderText("december")).toBeInTheDocument();
});

it("Input Change", async () => {
  const handleSubmit = jest.fn();
  render(
    <FilterByMonth
      labelText="foo"
      placeHolderText="month"
      handleSubmit={handleSubmit}
    />
  );
  const inputElement = screen.getByTestId("input-element");
  fireEvent.change(inputElement, { target: { value: "december" } });
  expect(inputElement.value).toBe("december");
});

it("handleSubmit -click enter", async () => {
  const handleSubmit = jest.fn();
  render(
    <FilterByMonth
      labelText="foo"
      placeHolderText="month"
      handleSubmit={handleSubmit}
    />
  );
  const inputElement = screen.getByTestId("input-element");
  const inputForm = screen.getByTestId("input-form");
  fireEvent.change(inputElement, { target: { value: "december" } });
  fireEvent.submit(inputForm);
  await waitFor(() => handleSubmit);
  expect(handleSubmit).toHaveBeenCalled();
});
