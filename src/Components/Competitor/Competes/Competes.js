import React from "react";

function Competes({
  categories,
  competitor,
  show,
  AddDiscipline,
  saveCompetes,
}) {
  console.log(`categories`, categories);
  return (
    <div
      className={`bg-light col-6 mt-4 ml-auto mr-auto ${
        show ? "d-block" : "d-none"
      }`}
    >
      <h1>Add disciplines</h1>
      <form
        className="p-2 row"
        align="center"
        action="javascript:void(0);"
        onSubmit={(e) => {
          saveCompetes();
          e.currentTarget.reset();
        }}
      >
        {categories.map((category) => {
          return (
            <div className="col-4 p-2">
              <span className="">
                {category.name}-{category.type}
              </span>
              <input
                type="checkbox"
                class="form-control"
                value={category.id}
                onChange={(e) => AddDiscipline(e.currentTarget.value)}
              />
            </div>
          );
        })}
        <div className="col-12">
          <input className="btn btn-success m-2" type="submit" value="Add" />
          <input
            className="btn btn-danger m-2"
            type="submit"
            value="Clear"
            onClick={(e) => e.currentTarget.parentElement.parentElement.reset()}
          />
        </div>
      </form>
    </div>
  );
}

export default Competes;
