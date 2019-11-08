import React, { useState } from "react";
// import axios from "axios"
import { postSmurf } from "../actions/actions";
import { connect } from "react-redux";

const PostSmurf = props => {

    
console.log("PostSMURF", postSmurf())

  const [name, setNewName] = useState("");
  const [age, setNewAge] = useState("");
  const [height, setNewHeight] = useState("");


  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleAgeChange = e => {
    setNewAge(e.target.value);
  };
  const handleHeightChange = e => {
    setNewHeight(e.target.value);
  };
  const handleSubmit = e => {
      e.preventDefault()
      props.postSmurf(name, age,height)
  };

  return (
      <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleNameChange}
      />

      <label htmlFor="age"></label>
      <input
        type="text"
        name="age"
        id="age"
        value={age}
        onChange={handleAgeChange}
      />

      <label htmlFor="height"></label>
      <input
        type="text"
        name="height"
        id="height"
        value={height}
        onChange={handleHeightChange}
      />

      <button  type="submit" >Add Smurf</button>
    </form>
    </>
  );
};

const mapDispatchToProps = {
  postSmurf
};

export default connect(
  null,
  mapDispatchToProps
)(PostSmurf);
