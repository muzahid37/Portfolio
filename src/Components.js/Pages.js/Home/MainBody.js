import React from "react";
import About from "./About";
import "./Home.css";
import Intruduce from "./Intruduce";
import Resume from "./Resume";

const MainBody = () => {
  return (
    <div className="body p-7">
      <div className="">
        {" "}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn relative right-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content left">
          {/* <!-- Page content here --> */}
          <h2>Mainbody</h2>
          <div htmlFor="Intruduce">
            {" "}
            <Intruduce />
          </div>
          <div htmlFor="About">
            {" "}
            <About />
          </div>
          <div htmlFor="Resume">
            {" "}
            <Resume />
          </div>

          {/* <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a htmlFor="Intruduce">Home</a>
            </li>
            <li>
              <a htmlFor="About">about</a>
            </li>
            <li>
              <label htmlFor="Resume">resume</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
