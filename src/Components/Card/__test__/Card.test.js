import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Card from "..";


const blog =
{
  "date": "2nd Januray, 2018",
  "readingTime": "2 mins",
  "title": "The future of abstract art and the culture ...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 10,
  "liked": false,
  "image": "abstract.png"
}

describe("Card", () => {
  // it("should match the snapshot", () => {
  //   const { asFragment } = render(<Card {...blog} />);
  //   expect(asFragment()).toMatchSnapshot();
  // });

  it("should change color of the heart icon to red when clicked", () => {
    render(<Card {...blog} />);
    expect(screen.queryByAltText('heartIcon').src).toEqual('http://localhost/heart-black.svg');
    fireEvent.click(screen.queryByAltText('heartIcon'));
    expect(screen.queryByAltText('heartIcon').src).toEqual('http://localhost/heart-red.svg');
  });

  it("should change color of the clap icon to orange when clicked", () => {
    render(<Card {...blog} />);
    expect(screen.queryByAltText('clapIcon').src).toContain('clapping.svg');
    fireEvent.click(screen.queryByAltText('clapIcon'));
    expect(screen.queryByAltText('clapIcon').src).toEqual('clapped.svg');
  });

  // it("should increment the clap counter when clicked once", () => {
  // render(<Card {...blog} />);
  // console.log(screen.getByTestId('clap-counter').innerText);
  // expect(screen.getByTestId('clap-counter')).(blog.claps);
  // fireEvent.click(screen.getByTestId('clap-counter'));
  // expect(screen.getByTestId('clap-counter').innerText).toEqual(blog.claps + 1);

  // });
  it("should increment the clap counter when clicked once", () => {
    render(<Card {...blog} />);
    expect(screen.getByTestId('clap-counter').innerText).toEqual(blog.claps.toString());
    fireEvent.click(screen.getByTestId('clap-counter'));
    expect(screen.getByTestId('clap-counter').innerText).toEqual((blog.claps + 1).toString());
  });

});

