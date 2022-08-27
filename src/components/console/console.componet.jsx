import { Component } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import ConsoleNav from "../console-nav/console-nav.component";

export default class Console extends Component  {

  constructor(props) {
    super(props);

    const [searchParams] = useSearchParams();
    console.log(searchParams)
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <ConsoleNav />
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
    )
  }
}