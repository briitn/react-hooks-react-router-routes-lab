import React from "react";
import { movies } from "../data";
const mapMovies= movies.map(item=>{
  return (
    <div key={item.title}>
      <strong>Name:{item.title} </strong>
     <p> Time:{item.time}</p>
   
      
       <ul>Genres:
         <li>
           
      {item.genres}
      </li>

    </ul>

    </div>
  )
  
})
console.log(mapMovies)
function Movies() {
  return <div>
    <h1>Movies Page</h1>
{mapMovies}
  </div>;
}

export default Movies;
