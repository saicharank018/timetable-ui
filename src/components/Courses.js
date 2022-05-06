import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  const [course_id, setCourseId] = useState("");
  const [course_name, setCourseName] = useState("");
  const [course_short_form, setCourseShortForm] = useState("");
  const [course_duration, setCourseDuration] = useState("");
  const [course_frequency, setCourseFrequency] = useState("");
  const [course_type, setCourseType] = useState("");
  const [course_rooms, setCourseRooms] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const [courses, setCourses] = useState([
    {
      course_id: "fjjf",
      course_name: "ftr",
      course_short_form: "jfhfh",
      course_type: "chhhf",
      course_duration: "770",
      course_frequency: "886",
      course_rooms: "86",
    },
    {
      course_id: "fjjf",
      course_name: "ftr",
      course_short_form: "jfhfh",
      course_type: "chhhf",
      course_duration: "770",
      course_frequency: "886",
      course_rooms: "86",
    },
    {
      course_id: "fjjf",
      course_name: "ftr",
      course_short_form: "jfhfh",
      course_type: "chhhf",
      course_duration: "770",
      course_frequency: "886",
      course_rooms: "86",
    },
  ]);
  const addProf = () => {
    fetch("/addCourse", {
      method: "post",
      headers: {
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({
        course_id,
        course_name,
        course_short_form,
        course_type,
        course_duration,
        course_frequency,
        course_rooms,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (refreshKey == 0) setRefreshKey(1);
        else setRefreshKey(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProf = (id) => {
    console.log(id);
    fetch("/deleteCourse", {
      method: "post",
      headers: {
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({
        prof_id: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (refreshKey == 0) setRefreshKey(1);
        else setRefreshKey(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch("/getCourse", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setCourses(res.data);
      })
      .catch((err) => {
        // notify("Something went wrong !!", "error");
        alert("some thing went wrong");
      });
  }, [refreshKey]);

  return (
    <div>
      <h1 className="appTitle">Add Courses</h1>
      <form>
        <div className="addBarButtonStyle">
          <input
            value={course_id}
            onChange={(e) => setCourseId(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Course id"
          />
          <input
            value={course_name}
            onChange={(e) => setCourseName(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Course Name"
          />
          <input
            value={course_short_form}
            onChange={(e) => setCourseShortForm(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Course short form"
          />
          <input
            value={course_type}
            onChange={(e) => setCourseType(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Course Type"
          />
          <input
            value={course_frequency}
            onChange={(e) => setCourseFrequency(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Frequency"
          />
          <input
            value={course_duration}
            onChange={(e) => setCourseDuration(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Duration"
          />
          <input
            value={course_rooms}
            onChange={(e) => setCourseRooms(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Rooms"
          />
          <button
            onClick={() => {
              addProf();
            }}
            className="addButton"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="tableView">
          <table id="table" rules={"all"}>
            <thead>
              <tr>
                <th>course_id</th>
                <th>course_name</th>
                <th>course_short_form</th>
                <th>course_type</th>
                <th>duration</th>
                <th>frequency</th>
                <th>prferred_rooms</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((item) => (
                <tr>
                  <td>{item.course_id}</td>
                  <td>{item.course_name}</td>
                  <td>{item.course_short_form}</td>
                  <td>{item.course_type}</td>
                  <td>{item.course_duration}</td>
                  <td>{item.course_frequency}</td>
                  <td>{item.course_rooms}</td>
                  <td>
                    <button
                      className="toDoButton deleteButton col"
                      onClick={() => {
                        deleteProf(item.course_id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default Courses;
