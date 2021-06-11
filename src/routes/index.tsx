import React from "react";
import RouteWrapper from "./Route";
import {HomePage} from "../pages";

const Routes:React.FC = ()=>{
  return (
      <RouteWrapper path="/" exact component={HomePage}/>
  );
}

export default Routes