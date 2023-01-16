import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes, availableTimes } from "./components/Main";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

/*
test("Check if times are returned", () => {
  const dates = initializeTimes("2023-01-16");
  expect(dates).not.toBe([]);
});

test("Check if times are updated", () => {
  const dates= updateTimes("2023-01-16");
  expect(dates).not.toBe([]);
});
*/