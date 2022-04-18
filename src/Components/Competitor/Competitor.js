import React, { useRef } from "react";
import "./Competitor.css";

function Competitor({ addCompetitorHandler, show }) {
  const fn = useRef();
  const ln = useRef();
  const gender = useRef();
  const weight = useRef();
  const age = useRef();
  const isSpecial = useRef();
  const imageHref = useRef();
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
            age.current.value,
            isSpecial.current.checked,
            imageHref.current.files[0]?.name
              ? imageHref.current.files[0]?.name
              : ""
          );
          e.currentTarget.reset();
        }}
      >
        <h1>Додај такмичара</h1>
        <span>Име:</span>
        <input type="text" ref={fn} className="form-control mt-2" required />
        <span>Презиме:</span>
        <input type="text" ref={ln} className="form-control mt-2" required />
        <span>Пол</span>
        <select ref={gender} className="form-control mt-2" required>
          <option value="м">м</option>
          <option value="ж">ж</option>
        </select>
        <span>Тежина:</span>
        <input
          type="number"
          ref={weight}
          className="form-control mt-2"
          required
        />
        <span>Године:</span>
        <input
          type="number"
          ref={age}
          className="form-control mt-2 mb-4"
          required
        />
        <span>Посебне потребе:</span>
        <input ref={isSpecial} type="checkbox" className="m-3"></input>
        <span>Слика:</span>
        <input ref={imageHref} type="file" className="m-3"></input>
        <br />
        <input className="btn btn-success m-2" type="submit" value="Сачувај" />
        <input
          className="btn btn-danger m-2"
          type="submit"
          value="Поништи"
          onClick={(e) => e.currentTarget.parentElement.reset()}
        />
      </form>
    </div>
  );
}

export default Competitor;
