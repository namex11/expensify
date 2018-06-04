import React from "react";
import { Link } from "react-router-dom";

const Portfolio = ()=>(
    <div>
        <p>This is my Portfolio</p>
        <Link to="/portfolio/1" > To my first </Link>
        <Link to="/portfolio/2"> To my second </Link>
    </div>
)




export default Portfolio;