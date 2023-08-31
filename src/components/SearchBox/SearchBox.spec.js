import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RouterContext } from "next/dist/shared/lib/router-context";
import SearchBox from ".";

const mockRouter = {
  push: jest.fn(),
};

describe("SearchBox Component", () => {
  it("renders without crashing", () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <SearchBox />
      </RouterContext.Provider>
    );
    expect(screen.getByLabelText(/Buscar producto.../i)).toBeInTheDocument();
  });

  it("updates query state on text field change", () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <SearchBox />
      </RouterContext.Provider>
    );
    const input = screen.getByLabelText(/Buscar producto.../i);
    fireEvent.change(input, { target: { value: "new query" } });
    expect(input).toHaveValue("new query");
  });

  it("calls router.push with the correct query parameter on form submit", () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <SearchBox />
      </RouterContext.Provider>
    );

    const input = screen.getByLabelText(/Buscar producto.../i);
    const form = screen.getByRole("form");
    fireEvent.change(input, { target: { value: "new query" } });
    fireEvent.submit(form);

    expect(mockRouter.push).toHaveBeenCalledWith("/items?q=new query");
  });
});
