import React from "react";


const PortfolioItem = (props)=>(
    <div>
        This is my portfolio nr {props.match.params.id}
    </div>
)

export default PortfolioItem;