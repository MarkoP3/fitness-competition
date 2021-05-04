import React, { useRef } from "react";
import Table from "./Table/Table";

function Results({ competitors, searchHandler, saveHandler }) {
  const search = useRef();
  return (
    <div>
      <form
        action="javascript:void(0);"
        className="m-5"
        onSubmit={(e) => {
          searchHandler(search.current.value);
        }}
      >
        <input
          ref={search}
          type="search"
          placeholder="Search competitor"
          className="form-control w-50 m-auto"
        />
      </form>
      <Table saveHandler={saveHandler} competitors={competitors}></Table>
    </div>
  );
}

export default Results;
