import React from "react";
type PageProps = {
  onChange: any;
  filter: string;
};
const Filter = ({ onChange, filter }: PageProps) => {
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
      <button className="reset">Reset</button>
    </>
  );
};
export default Filter;
