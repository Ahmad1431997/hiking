import trips from "../trips"
import { Redirect, useParams } from "react-router-dom"
import {Link} from "react-router-dom"
const TripsDetail = (props) => {
    const tripsSlug = useParams().tripsSlug;
    // console.log(tripsSlug);

    const trip = props.trips.find(
      (trip) => trip.slug === tripsSlug
    );
        if (!trip) return <Redirect to="/*" />

    console.log(trip)
    return(
        <div>
        <h1> {trip.name}</h1>
        <img src={trip.img} alt={trip.name} />
        <p>{trip.city}</p>
        <p>{trip.length} Days</p>
        <p>{trip.description}</p>
        <Link to={`/trips/${"hiking-jordan"}`}>
        <p>Hiking Jordan</p>
        </Link>
        </div>
    );
}

export default TripsDetail;