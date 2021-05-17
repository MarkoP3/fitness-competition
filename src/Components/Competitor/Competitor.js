import React, { useRef } from "react";
import "./Competitor.css";

function Competitor({ addCompetitorHandler, show }) {
  const fn = useRef();
  const ln = useRef();
  const gender = useRef();
  const weight = useRef();
  const age = useRef();
  return (
    <div
      className={`bg-light col-md-12 col-sm-12 col-12 mt-4 m-0 ${
        show ? "d-block" : "d-none"
      }`}
    >
      <form
        className="p-2"
        action="javascript:void(0);"
        onSubmit={(e) => {
          addCompetitorHandler(
            fn.current.value,
            ln.current.value,
            gender.current.value,
            weight.current.value,
            age.current.value
          );
          e.currentTarget.reset();
        }}
      >
        <h1>Add competitor</h1>
        <span>First Name:</span>
        <input type="text" ref={fn} className="form-control mt-2" required />
        <span>Last Name:</span>
        <input type="text" ref={ln} className="form-control mt-2" required />
        <span>Gender</span>
        <select ref={gender} className="form-control mt-2" required>
          <option value="м">male</option>
          <option value="ж">female</option>
        </select>
        <span>Weight:</span>
        <input
          type="number"
          ref={weight}
          className="form-control mt-2"
          required
        />
        <span>Age:</span>
        <input
          type="number"
          ref={age}
          className="form-control mt-2 mb-4"
          required
        />
        <input className="btn btn-success m-2" type="submit" value="Add" />
        <input
          className="btn btn-danger m-2"
          type="submit"
          value="Clear"
          onClick={(e) => e.currentTarget.parentElement.reset()}
        />
      </form>
    </div>
  );
}

export default Competitor;
