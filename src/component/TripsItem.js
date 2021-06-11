import {Link} from "react-router-dom"
const TripsItem=(props)=>{
    const trip = props.trip;
    return (
        <div>
        <Link to={`/trips/${trip.slug}`}>
        <img
          alt={trip.name}
          src={trip.img}
        //   onClick={() => props.setProduct(product)}
        />
     </Link>
      <p>{trip.name}</p>
      <p>{trip.length} Days</p>
        </div>
    );
}

export default TripsItem;