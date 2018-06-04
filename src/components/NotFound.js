import React from "react";
import { Link } from "react-router-dom";

const NotFound = ()=>(
    <div>
        <p>404- page not found</p>
        <Link to="/" exact="true"> Go home bitch </Link>
    </div>
)

export default NotFound;