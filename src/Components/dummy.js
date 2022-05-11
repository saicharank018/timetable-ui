import React from "react";
import { year, rooms } from "./Data";
/**
 * @author
 * @function Dummy
 **/

export const Dummy = (props) => {
  return (
    <div>
      <div
        style={{
          height: "auto",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <ul
          className=" dummy list-group list-group-horizontal"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
      <div
        style={{
          height: "60px",
          overflowY: "scroll",
          overflowX: "hidden",
          marginTop: "0px",
        }}
      >
        {year.map((item) => {
          return (
            <ul
              className=" dummy list-group list-group-horizontal"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
