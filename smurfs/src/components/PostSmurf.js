import React from "react";

const PostSmurf = () => {
  return (
    <form>
      <label htmlFor="name"></label>
      <input type="text" name="name" id="name" />
      <label htmlFor="age"></label>
      <input type="text" name="age" id="age" />
      <label htmlFor="height"></label>
      <input type="text" name="height" id="height" />
    </form>
  );
};
