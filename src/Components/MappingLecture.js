import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
/**
 * @author Saicharan
 * @function MappingLecture
 **/

export const MappingLecture = (props) => {
  const [course, setCourse] = useState("");
  const [professor, setProfessor] = useState("");
  const [batch, setBatch] = useState("");

  const [courseList, setCoursesList] = useState(["HDH", "jfjf"]);
  const [professorList, setProfessorList] = useState(["HDH", "jfjf"]);
  const [batchList, setBatchList] = useState(["HDH", "jfjf"]);
  //   useEffect(() => {
  //     fetch("/getCourses", {
  //       method: "GET",
  //     })
  //       .then((res) => res.json)
  //       .then((res) => setCoursesList(res.data));
  //     fetch("/getProfessors", {
  //       method: "GET",
  //     })
  //       .then((res) => res.json)
  //       .then((res) => setProfessorList(res.data));
  //     fetch("/getBatches", {
  //       method: "GET",
  //     })
  //       .then((res) => res.json)
  //       .then((res) => setBatchesList(res.data));
  //   }, []);

  const [lectures, setlectures] = useState([
    {
      batches: 1,
      course: 1,
      professor: "A!)!",
    },
    {
      batches: 1,
      course: 1,
      professor: "A!)!",
    },
    {
      batches: 1,
      course: 1,
      professor: "A!)!",
    },
    {
      batches: 1,
      course: 1,
      professor: "A!)!",
    },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    // fetch("/add", {
    //   method: "GET",
    //   body: JSON.stringify({
    //
    //     course,
    //     professor,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     alert(res);
    //   });
  };

  const deleteLectureMapping = (course, batch, professor) => {
    // fetch("/deleteLabMapping", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/Json",
    //   },
    //   body: JSON.stringify({
    //   batch,course,professor
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (refreshKey == 0) setRefreshKey(1);
    //     else setRefreshKey(0);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div>
      <h1 className="appTitle text-center">Add Lectures Mapping</h1>
      <form>
        <div className="batches">
          <select
            className="form-select-md select-style"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          >
            <option value={0}>Select Batch</option>
            {batchList.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <select
            className="form-select-md select-style"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value={0}>Select Course</option>
            {courseList.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <select
            className="form-select-md select-style"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
          >
            <option value={0}>Select Professor</option>
            {professorList.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <button
            onClick={(e) => submitHandler(e)}
            style={{ width: "80px", height: "40px", padding: "5px" }}
            className="add-button btn  btn-success"
          >
            Add
          </button>
        </div>
      </form>
      <div className="data-list">
        <div
          className="top-header"
          style={{ height: "auto", overflowY: "scroll", overflowX: "hidden" }}
        >
          <ul
            className=" view list-group list-group-horizontal"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <li className="list-group-item">Batch</li>
            <li className="list-group-item">Course</li>
            <li className="list-group-item">Professor</li>
            <li className="list-group-item">Delete Mapping</li>
          </ul>
        </div>
        <div
          className="bottom"
          style={{
            height: "220px",
            overflowY: "scroll",
            overflowX: "hidden",
            marginTop: "0px",
          }}
        >
          {lectures.map((item) => {
            return (
              <ul
                className=" view list-group list-group-horizontal"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <li className="list-group-item">{item.batches}</li>
                <li className="list-group-item">{item.course}</li>
                <li className="list-group-item">{item.professor}</li>
                <li className="list-group-item">
                  <button onClick={() => {}}>delete</button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
