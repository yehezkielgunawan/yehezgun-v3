import { render } from "@testing-library/react";

import Home from "@/pages";
import "@testing-library/jest-dom";
import AboutMe from "@/pages/aboutme";
import Articles from "@/pages/articles";
import Projects from "@/pages/projects";

test("Render Home page successfully", () => {
  render(<Home featuredProjects={[]} />);
});

test("Render Projects page successfully", () => {
  render(<Projects projectList={[]} />);
});

test("Render Articles page successfully", () => {
  render(<Articles articleList={[]} />);
});

test("Render About Me page successfully", () => {
  render(<AboutMe experienceList={[]} />);
});
