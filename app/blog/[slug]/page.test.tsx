/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("App Router: Displays the correct content for the dynamic route segment", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("This is the content for the post with slug:")).toBeInTheDocument();
});