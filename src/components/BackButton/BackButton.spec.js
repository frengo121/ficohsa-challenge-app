import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BackButton from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
    };
  },
}));

describe("BackButton Component", () => {
  it("renders the button correctly", () => {
    render(<BackButton />);
    expect(screen.getByText("Volver")).toBeInTheDocument();
  });
});
