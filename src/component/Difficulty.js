import {Link} from "react-router-dom"

const Difficulty = (props)=>{
    return (
      <div className="dropdown">
      <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Dropdown button
      </button>
      <div className="dropdown-menu">
        <Link to="" className="dropdown-item" >Link 1</Link>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </div>
    );   
}

export default Difficulty;

{/* <div class="dropdown">
      <button class="dropbtn">Dropdown
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      </div>
    ); */}