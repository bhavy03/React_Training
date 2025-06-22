// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import First from "./Basic/First";
// import Gallery from "./Basic/Gallery";
// import Hooks from "./Hooks/UseEffect";
// import Props from "./Props_State/Props";
import { Routes, Route } from "react-router";
import Layout from "./Routing/Layout";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Greeting from "./Testing/Greeting";
import Button from "./Button";

function App() {
  return (
    <>
      {/* <First />
      <Gallery />
      <Hooks /> */}
      {/* <Greeting /> */}
      <Button />
      <Routes>
        <Route index element={<Home />} /> {/* this represents the / path*/}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

{
  /* <Route path="projects">
  <Route index element={<ProjectsHome />} />
  <Route element={<ProjectsLayout />}>
    <Route path=":pid" element={<Project />} />
    <Route path=":pid/edit" element={<EditProject />} />
  </Route>
</Route> */
}

// now this will work is
// /projects -> <ProjectsHome />

// now These paths are relative to /projects
// /projects/42 renders
{
  /* <ProjectsLayout>
  <Project />  // for project with id = 42
</ProjectsLayout> */
}

// /projects/42/edit renders
{
  /* <ProjectsLayout>
  <EditProject /> // for editing project 42
</ProjectsLayout> */
}
// Again, <ProjectsLayout /> must have an <Outlet /> inside it to render Project or EditProject.

// BrowserRouter under the hood listens to window.history changes
// async function can't be passed directly into useEffect
// useEffect expects the callback to return either undefined or a cleanup function.
// An async function returns a Promise, which isn't allowed.
