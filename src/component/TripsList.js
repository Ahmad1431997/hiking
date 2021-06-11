import { useState } from "react";

import TripsItem from "./TripsItem";
import SearchBar from "./SearchBar";
import Rang from "./Rang";
import Difficulty from "./Difficulty"
import {Link} from "react-router-dom"

const TripsList = (props) => {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState("");
  // const[difficulty,setDifficulty]=useState("");
    console.log(range);
  const tripsList = props.trips
    .filter(
      (trip) =>
       ( trip.name.toLowerCase().includes(query) ||
        trip.city.toLowerCase().includes(query) )&&
        trip.length.includes(range)
        //  || (trip.difficulty.includes("easy"))
    )
    .map((trip) => <TripsItem trip={trip} key={trip.id} />);
    // console.log(tripsList);
    
  return (
    <>
      {/* <Helmet>
        <title>Products</title>
        </Helmet> */}

      <SearchBar setQuery={setQuery} />
      <Rang setRange={setRange} />
      <Difficulty tripsList={tripsList} />
      
      {tripsList}
    </>
  );
};
//done
export default TripsList;
