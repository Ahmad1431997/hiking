// import {useState} from "react"

const Rang = (props) => {
  return (
    <div>
      <label for="customRange1" class="form-label">
        Example range
      </label>
      <input
        type="range"
        min="1"
        max="12"
        step="1"
        className="form-control-range"
        id="customRange1"
        onChange={(event) => props.setRange(event.target.value)}
      ></input>
    </div>
  );
};

export default Rang;
