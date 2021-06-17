import React from "react";
type PageProps = {
  onChange: any;
  filter: string;
  reset: any;
};
const Filter = ({ onChange, filter, reset }: PageProps) => {
  return (
    <>
      <p className="filter">Filter</p>
      <input
        onChange={onChange}
        name="filter"
        value={filter}
        className="filter-input"
        type="text"
      />
      <button onClick={reset} className="reset">
        Reset
      </button>
    </>
  );
};
export default Filter;
