import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Container from '..';
import makeRequest from "../../../utils/makeRequest";
import { mockBlogPostData } from "../../../Mocks/blogPosts";

jest.mock('../../../utils/makeRequest');
describe("Container", () => {
  // it("should match the snapshot", () => {
  //   const { asFragment } = render(<Container />);
  //   expect(asFragment()).toMatchSnapshot();
  // });

  it('should show loading text when data is still loading', async () => {
    const mockMakeRequest = makeRequest;
    mockMakeRequest.mockResolvedValue(mockBlogPostData);
    render(<Container />);
    expect(screen.getByText("Loading...")).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText("mock title 1")).toBeTruthy();
    });
  });

  it('should show the blog posts when data is loaded', async () => {
    // const mockMakeRequest = makeRequest as jest.MockedFunction;
    const mockMakeRequest = makeRequest;
    mockMakeRequest.mockResolvedValue(mockBlogPostData);
    render(<Container />);
    await waitFor(() => {
      expect(screen.getAllByTestId("blog-post")).toHaveLength(2);
    });
  });
  it('should show error message when there is error in data fetch', async () => {
    const mockMakeRequest = makeRequest;
    mockMakeRequest.mockRejectedValue({ message: "Error!!!" });
    render(<Container />);
    await waitFor(() => {
      expect(screen.getByText("Error!!!")).toBeTruthy();
    })
  })



});