import React from "react";
import { actors } from "../data";
const mapActors= actors.map(item=>{
  return(
    <div key={item.name}>
      <strong>Name:{item.name}</strong>
      <ul>
        Movies: <li>
          {item.movies}
        </li>
      </ul>
    </div>
  )
})
function Actors() {
  return <div>
    <h1>Actors Page</h1>
{mapActors}
  </div>;
}

export default Actors;
