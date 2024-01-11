/* eslint-disable react/prop-types */
import { useRef } from "react";

const Form = ({ fetchWeatherData }) => {
  const search = useRef("");

  return (
    <div className="d-flex justify-content-center mt-4 ">
      <input
        type="text"
        className="form-control ms-4 w-100 "
        placeholder="Enter Country..."
        ref={search}
      />
      <input
        type="button"
        value="Search"
        className="ms-2 me-3 bg-dark text-white btn "
        onClick={() => {
          fetchWeatherData(search.current.value);
          search.current.value = "";
        }}
      />
    </div>
  );
};

export default Form;
