import { screen, render } from "@testing-library/react";
import Transactions from "../Transactions";
import mockFetch from "../../mocks/mockFetch";

beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
    jest.restoreAllMocks();
});

test("should render Transactions", async () => {
    render(<Transactions />);
    expect(await screen.findByText('1-15-2023')).toBeInTheDocument();
    expect(screen.getByText('Transaction Id')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent(/Transactions/);
});
