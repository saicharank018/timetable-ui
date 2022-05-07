import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Todo from "./Courses";
import {
  faCheck,
  faTrashAlt,
  faEdit,
  faWindowClose,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Professors = () => {
  const [prof_id, setProfId] = useState("");
  const [prof_name, setProfName] = useState("");
  const [prof_dept, setProfDept] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const [professors, setProfessors] = useState([
    { prof_id: "1", prof_name: "Professor-1", prof_dept: "Department-1" },
    { prof_id: "2", prof_name: "Professor-2", prof_dept: "Department-2" },
    { prof_id: "3", prof_name: "Professor-3", prof_dept: "Department-3" },
  ]);
  const addProf = () => {
    // if (prof_id == "" || prof_name == "" || prof_dept == "") {
    //   alert("Enter detailes Correctly");
    //   return;
    // }
    // fetch("/addProf", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/Json",
    //   },
    //   body: JSON.stringify({
    //     prof_id,
    //     prof_name,
    //     prof_dept,
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

  const deleteProf = (id) => {
    // console.log(id);
    // fetch("/deleteProf", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/Json",
    //   },
    //   body: JSON.stringify({
    //     prof_id: id,
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

  useEffect(() => {
    // fetch("/getProf", {
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res.data);
    //     setProfessors(res.data);
    //   })
    //   .catch((err) => {
    //     // notify("Something went wrong !!", "error");
    //     alert("some thing went wrong");
    //   });
  }, [refreshKey]);

  return (
    <div>
      <h1 className="appTitle text-center">Add Professors</h1>
      <form>
        <div className="addBarButtonStyle">
          <input
            value={prof_id}
            onChange={(e) => setProfId(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Professor id"
          />
          <input
            value={prof_name}
            onChange={(e) => setProfName(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Professor Name"
          />
          <input
            value={prof_dept}
            onChange={(e) => setProfDept(e.target.value)}
            type="text"
            className="addInputBar"
            placeholder="Enter Department"
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
                <th>Professor Id</th>
                <th>Professor Name</th>
                <th>Professor Department</th>
              </tr>
            </thead>
            <tbody>
              {professors.map((item) => (
                <tr>
                  <td>{item.prof_id} </td>
                  <td>{item.prof_name} </td>
                  <td>{item.prof_dept} </td>
                  <td>
                    <button
                      className="toDoButton deleteButton col"
                      onClick={() => {
                        deleteProf(item.prof_id);
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

export default Professors;