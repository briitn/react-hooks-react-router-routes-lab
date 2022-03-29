import React from "react";
import { directors } from "../data";
const mapDirectors=directors.map(item=>{
  return (
    <div key={item.name}>
      <strong>Name:{item.name}</strong>

      <ul>Movies:<li>
        {item.movies}</li></ul>
      
    </div>
  )
})
function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {mapDirectors}
  </div>;
}

export default Directors;
