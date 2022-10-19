import React from "react";
import axios from "axios";
import { render, screen, act} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search.jsx";

jest.mock("axios");

describe("Search Form", () => {
  test("success to fetch and display stories from an API", async () => {
    render(<Search />);
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];

    axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: { hits: stories } })
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
        await userEvent.click(screen.getByRole('button'));
    });

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  test("fails to fetch and display stories from an API", async () => {

    axios.get.mockImplementationOnce(() => 
        Promise.reject(new Error()));

    render(<Search />);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
        await userEvent.click(screen.getByRole('button'));
    });
    
    const items = await screen.findByText("Ada yang error ...");

    expect(items).toBeInTheDocument();
  });
});