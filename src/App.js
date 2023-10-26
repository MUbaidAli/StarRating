import { useState } from "react";

import StarRating from "./components/StarRating";


export default function App() {
  
  return (
    <>
      <StarRating defaultRating={3} />
      <StarRating color={"green"} />
      <StarRating messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]} />
      <StarRating
        ratingColors={["#Ef6C53", "#Efd077", "#26948b", "#0099a9", "#00fca8"]}
      />
      <StarRating
        ratingLength={10}
        color="red"
        size="48"
        messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
      />
      <StarRating onSet={setMovieRating} />
      {/* <h2>{movieRating}</h2> */}
      <StarRating size="50" />
          </>
  );
}
