import { render, screen } from "@testing-library/react";

import Home from "@/pages";
import "@testing-library/jest-dom";
import AboutMe from "@/pages/aboutme";
import Articles from "@/pages/articles";
import Projects from "@/pages/projects";

// mock useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// mock next-sanity
jest.mock("next-sanity", () => ({
  createClient: jest.fn(),
}));

test("Render Home page successfully", () => {
  render(<Home featuredProjects={[]} />);

  const CTAText = screen.getByText("Yehezkiel Gunawan");
  expect(CTAText).toBeInTheDocument();
});

test("Render Projects page successfully", () => {
  render(<Projects projectList={[]} />);

  const projectPageTitle = screen.getByText("Featured Projects");
  expect(projectPageTitle).toBeInTheDocument();
});

test("Render Articles page successfully", () => {
  render(<Articles articleList={[]} />);

  const articlesPageText = screen.getByText("Just some random thoughts.", {
    exact: false,
  });
  expect(articlesPageText).toBeInTheDocument();
});

test("Render About Me page successfully", () => {
  render(<AboutMe experienceList={[]} />);

  const aboutMeText = screen.getByText("Work Experience");
  expect(aboutMeText).toBeInTheDocument();
});
