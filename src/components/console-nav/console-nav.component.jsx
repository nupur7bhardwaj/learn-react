import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class ConsoleNav extends Component{

  render(){
    return (
      <div>
        <div>
          <Link className='nav-link' to='hotel-form'>
              New Hotel
          </Link>
        </div>

        <div>
          
        </div>
      </div>
    )
  }

}