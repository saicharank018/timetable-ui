import React from "react";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import HomeScreen from "./Components/HomeScreen";
import Courses from "./Components/Courses";
import Lecturers from "./Components/Lecturers";
import Home2 from "./Components/Dashboard";
import { Batch } from "./Components/Batches";
import { MappingElective } from "./Components/MappingElective";
import { MappingLecture } from "./Components/MappingLecture";
import { MappingLab } from "./Components/MappingLab";
import { Dummy } from "./Components/dummy";
const Home = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route path="/login" element={<Dummy />} />

      {/* <Navbar/> */}
      <Route path="home" element={<HomeScreen />}>
        <Route path="dashboard" element={<Home2 />} />
        <Route path="courses" element={<Courses />} />
        <Route path="lecturers" element={<Lecturers />} />
        <Route path="batches" element={<Batch />} />
        <Route path="electives" element={<MappingElective />} />
        <Route path="lectures" element={<MappingLecture />} />
        <Route path="labs" element={<MappingLab />} />
      </Route>
    </Routes>
  );
};

export default Home;
