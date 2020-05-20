import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

test("renders home link", () => {
  render(<App />)
  screen.getAllByText("Home")
})
