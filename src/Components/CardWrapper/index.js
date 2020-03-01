import React from "react";

function CardWrapper({ children }) {
    return (
        <div className="card text-center">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default CardWrapper;